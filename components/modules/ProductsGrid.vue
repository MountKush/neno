<template lang='pug'>
ul(class='productGridList')
  li(
    v-for='(product, index) in products'
    :key='product + index'
    class='productGridList__item'
  )
    ProductCard(
      :src='product.featuredImage.src'
      :aspectRatio='product.featuredImage.aspectRatio'
      :product='product'
      class='productGridList__card'
    )
</template>


<script>
import ProductCard from '~comp/ProductCard.vue'


export default {
  components: {
    ProductCard
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.productGridList
  display: grid
  grid-gap: $unit*2
  grid-template-columns: repeat(3, 1fr)

  &__item

  &__card

</style>
