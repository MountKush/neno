<template lang='pug'>
div(class='container-product-similar')

  div(class='product-similar')
    CollectionProducts(
      :collection='similarCollection'
      class='product-similar__collection-products'
    )
</template>


<script>
import { mapState } from 'vuex'
import CollectionProducts from '~comp/CollectionProducts.vue'


export default {
  components: {
    CollectionProducts
  },
  props: {
    products: {
      type: Object,
      required: true
    },
    product: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {
    similarCollection () {
      const collection = Object.values(this.collections).find(collection => {
        return collection.products.find(product => product.id === this.product.id)
      })

      const products = collection.products.filter(product => product.id !== this.product.id)

      return { ...collection, products, title: 'You Might Also Like' }
    },


    ...mapState({
      collections: state => state.catalog.collections
    })
  },
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-product-similar
  // @extend %container

.product-similar


</style>
