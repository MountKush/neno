<template lang='pug'>
div(class='container-sort-filter')

  div(class='sort-filter')

    //- header(class='sort-filter__header')
    //-   a(
    //-     @click='setActiveView("sort by")'
    //-     class='sort-filter__sort-by-button'
    //-   )
    //-     IconSortBy(
    //-       :class='{ active: activeView === "sort by" }'
    //-       class='sort-filter__sort-by-button-svg'
    //-     )
    //-     span(
    //-       :class='{ active: activeView === "sort by" }'
    //-       class='sort-filter__sort-by-button-copy'
    //-     ) Sort By
    //-   a(
    //-     @click='setActiveView("filter")'
    //-     class='sort-filter__filter-button'
    //-   )
    //-     IconFilter(
    //-       :class='{ active: activeView === "filter" }'
    //-       class='sort-filter__filter-button-svg'
    //-     )
    //-     span(
    //-       :class='{ active: activeView === "filter" }'
    //-       class='sort-filter__filter-button-copy'
    //-     ) Filter


    div(class='sort-filter__view-wrapper')

      //- sort by
      h3 Sort By
      ul(
        class='sort-filter__sort-by-list'
      )
        li(
          v-for='(option, index) in sortOptions'
          :key='option + index'
          class='sort-filter__sort-by-item'
        )
          a(
            @click='setSortBy(option.value)'
            :class='{ active: option.value === activeSortOptionValue }'
            class='sort-filter__sort-by-option'
          ) {{ option.name }}
          IconCheckMark(
            v-show='option.value === activeSortOptionValue'
            class='sort-filter__sort-by-svg'
          )

      //- //- Vendors
      //- h3 Vendors
      //- ul(
      //-   class='sort-filter__sort-by-list'
      //- )
      //-   li(
      //-     v-for='(option, index) in sortOptions'
      //-     :key='option + index'
      //-     class='sort-filter__sort-by-item'
      //-   )
      //-     a(
      //-       @click='setSortBy(option.value)'
      //-       :class='{ active: option.value === activeSortOptionValue }'
      //-       class='sort-filter__sort-by-option'
      //-     ) {{ option.name }}
      //-     IconCheckMark(
      //-       v-show='option.value === activeSortOptionValue'
      //-       class='sort-filter__sort-by-svg'
      //-     )

      //- //- filter
      //- form(
      //-   @submit.prevent=''
      //-   v-show='activeView === "filter"'
      //-   class='sort-filter__filter-list'
      //- )
      //-   div(
      //-     class='sort-filter__filter-item'
      //-   )
      //-     h3(class='sort-filter__filter-label') Price
      //-     a(
      //-       @click='toggleActiveFilter("price")'
      //-       class='sort-filter__filter-checkbox'
      //-     )
      //-       IconCheckMark(
      //-         v-show='filter.active.includes("price")'
      //-         class='sort-filter__filter-checkbox-svg'
      //-       )
      //-     input(
      //-       v-model='filter.price'
      //-       type='range'
      //-       min='0'
      //-       max='1'
      //-       step='0.1'
      //-       class='sort-filter__filter-input'
      //-     )
      //-     p(class='sort-filter__filter-price-min') Min
      //-     p(class='sort-filter__filter-price-max') Max
      //-
      //-   div(
      //-     class='sort-filter__filter-item'
      //-   )
      //-     h3(class='sort-filter__filter-label') Color
      //-     a(
      //-       @click='toggleActiveFilter("color")'
      //-       class='sort-filter__filter-checkbox'
      //-     )
      //-       IconCheckMark(
      //-         v-show='filter.active.includes("color")'
      //-         class='sort-filter__filter-checkbox-svg'
      //-       )
      //-     ul(class='sort-filter__filter-color-list')
      //-       li(
      //-         v-for='(option, index) in filter.colorOptions'
      //-         :key='option + index'
      //-         class='sort-filter__filter-color-item'
      //-       )
      //-         a(
      //-           @click='toggleActiveColors(option)'
      //-           :style='{ backgroundColor: option }'
      //-           :class='{ active: filter.activeColors.includes(option) }'
      //-           class='sort-filter__filter-color-option'
      //-         )
</template>


<script>
import { mapState, mapMutations } from 'vuex'
import IconCheckMark from '~/assets/svg/icon-check-mark.svg'


export default {
  components: {
    IconCheckMark
  },
  props: {
    sortOptions: {
      type: Array,
      required: true
    },
    defaultSortBy: {
      type: String,
      required: true
    },
    sortBy: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      activeSortOptionValue: ''
    }
  },
  computed: {

  },
  watch: {
    sortBy (value) {
      this.activeSortOptionValue = value || this.defaultSortBy
    }
  },
  methods: {
    setSortBy (value) {
      if (this.activeSortOptionValue === value) return
      this.activeSortOptionValue = value
      this.$emit('setSortBy', value)
    }
  },
  mounted () {
    this.activeSortOptionValue = this.sortBy || this.defaultSortBy
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
