<template lang='pug'>
div(class='container-products')

  div(class='products')
    Hero(
      :header='hero.header'
      class='products__hero'
    )

    ul(class='products__list')
      ProductSortFilter(
        v-if='products'
        :products='products'
        class='products__sort-filter'
      )
      li(
        v-for='(product, index) in sortByAndFilteredProducts'
        :key='product.id'
        class='products__item'
      )
        ProductCard(
          :product='product'
          class='products__product'
        )

</template>


<script>
import { mapState } from 'vuex'
import Hero from '~comp/Hero.vue'
import ProductCard from '~comp/ProductCard.vue'
import ProductSortFilter from '~comp/productSortFilter/Index.vue'


export default {
  components: {
    Hero,
    ProductCard,
    ProductSortFilter
  },
  props: {},
  data () {
    return {
      hero: {
        header: {
          title: 'Shop All Products',
          copy: 'We got you covered'
        }
      },
      dropdown: {
        options: ['Popular', 'Most Recent', 'Price, low to high', 'Price, high to low'],
        selected: 'Popular'
      }
    }
  },
  computed: {
    ...mapState({
      products: state => state.catalog.products,
      sortByAndFilteredProducts: state => state.catalog.sortByAndFilteredProducts
    })
  },
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-products

.products
  display: grid
  grid-gap: $unit*5 0

  &__list
    @extend %content
    display: grid
    grid-template-columns: repeat(1, 1fr)
    grid-auto-rows: 1fr
    grid-gap: $unit*2
    +mq-xs
      grid-template-columns: repeat(2, 1fr)
    +mq-s
      grid-template-columns: repeat(3, 1fr)
    +mq-m
      grid-template-columns: repeat(4, 1fr)

  &__sort-filter
    grid-column: 1 / -1
    +mq(520)
      grid-column: unset

</style>
