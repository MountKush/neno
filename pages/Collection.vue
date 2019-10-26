<template lang='pug'>
div(class='container-collection')


  div(class='collection')
    Hero(
      :header='{ title: collection.title, copy: collection.description }'
      class='collection__hero'
    )

    ul(class='collection__list')
      ProductSortFilter(
        v-if='products'
        :products='products'
        class='collection__sort-filter'
      )
      li(
        v-for='(product, index) in sortByAndFilteredProducts'
        :key='product.id + index'
        class='collection__item'
      )
        ProductCard(
          :product='product'
          class='collection__product'
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
          title: '',
          copy: ''
        }
      }
    }
  },
  computed: {
    collection () {
      console.log('collection: ', this.collections[this.collectionId])
      return this.collections[this.collectionId]
    },


    products () {
      const products = {}
      this.collection.products.forEach(product => products[product.id] = product)
      return products
    },


    ...mapState({
      collectionId: state => state.route.params.id,
      collections: state => state.catalog.collections,
      sortByAndFilteredProducts: state => state.catalog.sortByAndFilteredProducts,
    })
  },
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-collection

.collection
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
