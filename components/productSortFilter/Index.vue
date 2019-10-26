<template lang='pug'>
div(class='container-sort-filter')

  div(class='sort-filter')

    header(class='sort-filter__header')
      a(
        @click='setActiveView("sort by")'
        class='sort-filter__sort-by-button'
      )
        IconSortBy(
          :class='{ active: activeView === "sort by" }'
          class='sort-filter__sort-by-button-svg'
        )
        span(
          :class='{ active: activeView === "sort by" }'
          class='sort-filter__sort-by-button-copy'
        ) Sort By
      a(
        @click='setActiveView("filter")'
        class='sort-filter__filter-button'
      )
        IconFilter(
          :class='{ active: activeView === "filter" }'
          class='sort-filter__filter-button-svg'
        )
        span(
          :class='{ active: activeView === "filter" }'
          class='sort-filter__filter-button-copy'
        ) Filter


    div(class='sort-filter__view-wrapper')

      //- sort by
      ul(
        v-show='activeView === "sort by"'
        class='sort-filter__sort-by-list'
      )
        li(
          v-for='(option, index) in sortBy.options'
          :key='option + index'
          class='sort-filter__sort-by-item'
        )
          a(
            @click='setActiveSortBy(option)'
            :class='{ active: option === sortBy.active}'
            class='sort-filter__sort-by-option'
          ) {{ option }}
          IconCheckMark(
            v-show='option === sortBy.active'
            class='sort-filter__sort-by-svg'
          )

      //- filter
      form(
        @submit.prevent=''
        v-show='activeView === "filter"'
        class='sort-filter__filter-list'
      )
        div(
          class='sort-filter__filter-item'
        )
          h3(class='sort-filter__filter-label') Price
          a(
            @click='toggleActiveFilter("price")'
            class='sort-filter__filter-checkbox'
          )
            IconCheckMark(
              v-show='filter.active.includes("price")'
              class='sort-filter__filter-checkbox-svg'
            )
          input(
            v-model='filter.price'
            type='range'
            min='0'
            max='1'
            step='0.1'
            class='sort-filter__filter-input'
          )
          p(class='sort-filter__filter-price-min') Min
          p(class='sort-filter__filter-price-max') Max

        div(
          class='sort-filter__filter-item'
        )
          h3(class='sort-filter__filter-label') Color
          a(
            @click='toggleActiveFilter("color")'
            class='sort-filter__filter-checkbox'
          )
            IconCheckMark(
              v-show='filter.active.includes("color")'
              class='sort-filter__filter-checkbox-svg'
            )
          ul(class='sort-filter__filter-color-list')
            li(
              v-for='(option, index) in filter.colorOptions'
              :key='option + index'
              class='sort-filter__filter-color-item'
            )
              a(
                @click='toggleActiveColors(option)'
                :style='{ backgroundColor: option }'
                :class='{ active: filter.activeColors.includes(option) }'
                class='sort-filter__filter-color-option'
              )
</template>


<script>
import { mapState, mapMutations } from 'vuex'
import IconCheckMark from '~/assets/svg/icon-check-mark.svg'
import IconSortBy from '~/assets/svg/icon-sort-by.svg'
import IconFilter from '~/assets/svg/icon-filter.svg'
import moment from 'moment'
import _ from 'lodash'


export default {
  components: {
    IconCheckMark,
    IconSortBy,
    IconFilter
  },
  props: {
    products: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      activeView: 'sort by',
      sortBy: {
        options: ['Popular', 'Most Recent', 'Price, low to high', 'Price, high to low'],
        active: 'Popular'
      },
      filter: {
        active: [],
        price: 0.5,
        colorOptions: ['#000000', '#ffffff', '#ff0000', '#008eff', '#ff00da', '#fffc00'],
        activeColors: []
      },
      minPrice: 0,
      maxPrice: 0
    }
  },
  computed: {
    activeSortBy () { return this.sortBy.active },


    activeFilters () { return this.filter.active },


    price () { return this.filter.price },


    activeColors () { return this.filter.activeColors }
  },
  watch: {
    activeSortBy () {
      this.sortAndFilterProducts()
    },


    activeFilters () {
      this.sortAndFilterProducts()
    },


    price () {
      this.filter.active.includes('price') ? this.sortAndFilterProducts() : this.toggleActiveFilter('price')
    },


    activeColors () {
      this.filter.active.includes('color') ? null : this.toggleActiveFilter('color')
    }
  },
  methods: {
    setActiveView (view) {
      this.activeView = view
    },


    setActiveSortBy (option) {
      this.sortBy.active = option
    },


    toggleActiveFilter: _.debounce(function(filter) {
      const active = this.filter.active
      const filterIndex = active.indexOf(filter)
      filterIndex >= 0 ? active.splice(filterIndex, 1) : active.push(filter)
    }, 100),


    toggleActiveColors (color) {
      const { activeColors } = this.filter
      const colorIndex = activeColors.indexOf(color)
      colorIndex >= 0 ? activeColors.splice(colorIndex, 1) : activeColors.push(color)
    },


    setMinMaxPrice () {
      const products = Object.values(this.products)
      const variants = _.flatten(products.map(product => product.variants))
      this.minPrice = Math.min(...variants.map(variant => variant.price))
      this.maxPrice = Math.max(...variants.map(variant => variant.price))
    },


    sortAndFilterProducts: _.debounce(function() {
      const { active: activeSortBy } = this.sortBy
      const { active: activeFilters, price: activePrice, activeColors } = this.filter
      let products = Object.values(this.products)

      // filter products
      if (activeFilters.includes('price')) products = this.filterByPrice({ products, activePrice })

      // sort products
      if (activeSortBy.match(/most recent/i)) products = this.sortByRecent({ products })

      if (activeSortBy.match(/price, low to high/i)) products = this.sortByPrice({ products })

      if (activeSortBy.match(/price, high to low/i)) products = this.sortByPrice({ products }).reverse()


      this.SET_SORTBY_AND_FILTERED_PRODUCTS({ products })
    }, 500),


    filterByPrice ({ products, activePrice }) {
      // find the products max/min price
      const maxPrice = this.maxPrice
      const minPrice = this.minPrice
      const priceOffset = Math.round((maxPrice - minPrice) / 5)
      return products.filter(product => {
        const { price } = product.variants[0]
        const lowLimit = Math.max(minPrice, activePrice * maxPrice - priceOffset)
        const highLimit = Math.max(minPrice + priceOffset, activePrice * maxPrice + priceOffset)
        return price >= lowLimit && price <= highLimit
      })
    },


    sortByRecent ({ products }) {
      return products.sort((a, b) => moment(a.publishedAt).unix() - moment(b.publishedAt).unix())
    },


    sortByPrice ({ products }) {
      // default low to high
      return products.sort((a, b) => a.variants[0].price - b.variants[0].price)
    },


    ...mapMutations({
      SET_SORTBY_AND_FILTERED_PRODUCTS: 'catalog/SET_SORTBY_AND_FILTERED_PRODUCTS',
      DELETE_SORTBY_AND_FILTERED_PRODUCTS: 'catalog/DELETE_SORTBY_AND_FILTERED_PRODUCTS'
    })
  },
  beforeMount () {
    this.setMinMaxPrice()
    this.sortAndFilterProducts()
  },
  beforeDestroy () {
    this.DELETE_SORTBY_AND_FILTERED_PRODUCTS()
  }
}
</script>


<style lang='sass' scoped>
.container-sort-filter

.sort-filter
  height: 100%
  // box-shadow: 0 0 $unit*3 rgba(34, 34, 34, 0.05)

  &__header
    display: grid
    grid-auto-columns: min-content
    grid-auto-flow: column
    grid-gap: 0 $unit*3
    padding: $unit*2 0
    margin: 0 $unit
    // border-bottom: 1px solid rgba(34, 34, 34, 0.05)

  &__sort-by-button,
  &__filter-button
    display: flex
    align-items: center
    user-select: none

    &-svg
      width: $unit*2
      height: $unit*2
      pointer-events: none
      margin-right: $unit/2
      fill: $grey

      &.active
        fill: $black

    &-copy
      white-space: nowrap
      color: $grey
      // font-weight: bold

      &.active
        color: $black


  &__view-wrapper

  &__sort-by-list
    display: grid

  &__sort-by-item
    display: grid
    grid-template-rows: $unit*5
    grid-template-columns: auto
    align-items: center


  &__sort-by-option
    width: 100%
    height: 100%
    display: flex
    align-items: center
    grid-row: 1 / 2
    grid-column: 1 / 2
    padding: 0 $unit*2
    color: $grey

    &.active
      color: $black


  &__sort-by-svg
    width: $unit*2
    height: $unit*2
    grid-row: 1 / 2
    grid-column: 1 / 2
    justify-self: end
    margin-right: $unit*2
    pointer-events: none
    visibility: hidden


  &__filter-list
    display: grid
    grid-gap: $unit*2 0
    grid-auto-rows: min-content

  &__filter-item
    display: grid
    grid-template-rows: $unit*5 repeat(2, min-content)
    grid-template-columns: min-content 1fr min-content
    grid-gap: $unit $unit
    margin: 0 $unit*2

    &:last-child
      margin: unset
      visibility: hidden

      & .sort-filter__filter-label
        margin-left: $unit*2

      & .sort-filter__filter-checkbox
        margin-right: $unit*2

  &__filter-label
    grid-row: 1 / 2
    grid-column: 1 / 2
    align-self: center

  &__filter-checkbox
    width: $unit*2
    height: $unit*2
    grid-row: 1 / 2
    grid-column: 3 / 4
    align-self: center
    justify-self: end
    display: flex
    justify-content: center
    align-items: center
    border: 1px solid $black

  &__filter-checkbox-svg
    width: 10px
    height: 10px

  &__filter-input
    +input-type-range
    grid-row: 2 / 3
    grid-column: 1 / 4

  &__filter-price-min,
  &__filter-price-max
    grid-row: 3 / 4
    grid-column: 1 / 2
    font-size: 12px

  &__filter-price-max
    grid-column: 3 / 4

  &__filter-color-list
    grid-row: 2 / 4
    grid-column: 1 / 4
    display: flex
    flex-wrap: wrap
    margin: 0 $unit

  &__filter-color-item


  &__filter-color-option
    width: $unit*2
    height: $unit*2
    display: block
    margin: $unit
    border-radius: 50%
    box-shadow: 0 0 $unit rgba(34, 34, 34, 0.15)
    transition: transform 150ms

    &.active
      transform: scale(1.5)


</style>
