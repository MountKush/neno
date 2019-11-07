<template lang='pug'>
div(
  :key='this.$route.fullPath'
  class='container-collection'
)
  div(
    v-for='(section, index) in themeData'
    :key='section + index'
  )

    div(
      v-if='section.type === "static-collection"'
      class='collection'
    )
      h1() {{ section.settings.collection.title }}

    //- ProductDisplay(
    //-   v-if='section.type === "static-collection"'
    //-   :product='section.settings.product'
    //-   :blocks='section.blocks'
    //-   class='product__display'
    //- )

    ProductSortFilter(
      v-if='section.type === "static-collection"'
      :products='section.settings.collection.products'
      class='collection__sort-filter'
    )

    ProductsGrid(
      v-if='section.type === "static-collection"'
      :products='section.settings.collection.products'
      class='collection__products'
    )

    //- ul(
    //-   v-if='section.type === "static-collection"'
    //-   class='collection__list'
    //- )
    //-   //- ProductSortFilter(
    //-   //-   v-if='products'
    //-   //-   :products='products'
    //-   //-   class='collection__sort-filter'
    //-   //- )
    //-   li(
    //-     v-for='(product, index) in section.settings.collection.products'
    //-     :key='product.id + index'
    //-     class='collection__item'
    //-   )
    //-     ProductCard(
    //-       :src='product.featuredImage.src'
    //-       :aspectRatio='product.featuredImage.aspectRatio'
    //-       :product='product'
    //-       class='collection__product'
    //-     )
</template>


<script>
import { mapState, mapGetters } from 'vuex'
import Hero from '~comp/Hero.vue'
import ProductsGrid from '~comp/modules/ProductsGrid.vue'
import ProductSortFilter from '~comp/productSortFilter/Index.vue'


export default {
  components: {
    ProductsGrid,
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


    ...mapGetters({
      themeData: 'app/themeData'
    }),


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

  &__products
    @extend %content
    display: grid
    grid-template-columns: repeat(2, 1fr)
    grid-auto-rows: 1fr
    grid-gap: $unit*2
    +mq-s
      grid-template-columns: repeat(3, 1fr)
    +mq-m
      grid-template-columns: repeat(4, 1fr)

  &__sort-filter
    grid-column: 1 / -1
    +mq(520)
      grid-column: unset


</style>
