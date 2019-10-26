<template lang='pug'>
div(class='container-search')

  div(class='search')

    form(
      @submit.prevent='blur'
      class='search__form'
    )
      IconSearch(class='search__icon')
      input(
        v-model='search'
        ref='search'
        placeholder='Search inventory'
        class='search__input'
      )
      a(
        v-show='search.length'
        @click='clearSearch'
        class='search__clear'
      )
        IconCancel(class='search__icon')

    //- empty state
    div(
      v-show='searchResults.products.length === 0 || search.length === 0'
      class='search__empty'
    )
      h3(
        v-text='search ? "🧐" : "🔭"'
        class='search__empty-title'
      )
      p(
        v-text='search ? "No results found." : "What are you looking for?"'
        class='search__empty-copy'
      )



    div(
      v-show='searchResults.products && search'
      class='search__products'
    )
      //- h2(class='search__products-title') Products
      ul(class='search__products-list')
        li(
          v-for='(product, index) in searchResults.products'
          :key='product.id + index'
          class='search__products-item'
        )
          ProductCard(
            :product='product'
            class='search__products-product'
          )

</template>


<script>
import { mapState } from 'vuex'
import ProductCard from '~comp/ProductCard.vue'
import IconSearch from '~/assets/svg/icon-search.svg'
import IconCancel from '~/assets/svg/icon-cancel.svg'


export default {
  components: {
    ProductCard,
    IconSearch,
    IconCancel
  },
  props: {},
  data () {
    return {
      search: ''
    }
  },
  computed: {
    searchResults () {
      const search = new RegExp(this.search, 'i')
      const products = Object.values(this.products).filter(product => product.title.match(search))
      console.log('products: ', products)
      return {
        products
      }
    },


    ...mapState({
      products: state => state.catalog.products
    })
  },
  methods: {
    clearSearch () { this.search = '' },


    blur () {
      this.$refs.search.blur()
    }
  }
}
</script>


<style lang='sass' scoped>
.container-search


.search
  width: 75%
  max-width: 1024px
  display: grid
  grid-gap: $unit*5 0
  margin: $unit*5 auto 0 auto
  +mq-s
    grid-gap: $unit*10 0
  +mq-m
    margin-top: $unit*10

  &__form
    display: grid
    grid-template-rows: $unit*5
    grid-template-columns: 1fr $unit*3
    grid-gap: 0 $unit
    align-items: center
    background: rgba(232, 234, 237, 1)
    border-radius: $unit*3
    overflow: hidden
    +mq-xs
      grid-template-columns: 1fr $unit*4

  &__icon
    width: $unit*3
    height: $unit*3
    grid-row: 1 / 2
    grid-column: 1 / 2
    margin-left: $unit*2
    pointer-events: none

  &__clear
    grid-row: 1 / 2
    grid-column: 2 / 3

    & .search__icon
      width: 12px
      height: 12px
      padding: 2px
      margin: 0
      border-radius: 50%
      background: $dark
      fill: rgba(239, 239, 239, 1)

  &__input
    width: 100%
    grid-row: 1 / 2
    grid-column: 1 / 2
    padding-left: $unit*6
    background: transparent

  &__empty
    display: grid
    grid-gap: 16px 0
    justify-items: center
    padding: 80px 0

    &-title
      font-size: $fs4

    &-copy
      text-align: center

  &__products
    display: grid
    grid-gap: $unit*4 0

    &-title
      font-size: $fs1

    &-list
      display: grid
      grid-template-columns: repeat(1, 1fr)
      grid-gap: $unit*2
      +mq-xs
        grid-template-columns: repeat(2, 1fr)
      +mq-s
        grid-template-columns: repeat(3, 1fr)
      +mq-m
        grid-template-columns: repeat(4, 1fr)

    &-item

    &-product

</style>
