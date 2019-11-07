<template lang='pug'>
div(class='container')

  div(class='featured-collection')
    SectionHeader(
      :title='"Recommended Products"'
      text=''
      :showViewAll='false'
      buttonLabel=''
      buttonLink=''
    )
    Slider(class='featured-collection__slider')
      ProductCard(
        v-for='(product, index) in products'
        :key='product + index'
        :product='product'
        :src='product.featured_image'
        :aspectRatio='1'
        class='featured-collection__card'
      )
</template>


<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import SectionHeader from '~comp/modules/SectionHeader.vue'
import ProductsGrid from '~comp/modules/ProductsGrid.vue'
import Slider from '~comp/slot/Slider.vue'
import ProductCard from '~comp/ProductCard.vue'


export default {
  components: {
    SectionHeader,
    ProductsGrid,
    Slider,
    ProductCard
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      products: []
    }
  },
  computed: {},
  methods: {
    async init () {
      this.products = await this.fetchProductRecommendations(this.product.id)
    },


    ...mapActions({
      fetchProductRecommendations: 'catalog/fetchProductRecommendations'
    })
  },
  mounted () {
    this.init()
  }
}
</script>


<style lang='sass' scoped>
.container
  padding: $unit*7 0
  background: $pri-cl
  // background: $white

.featured-collection
  display: grid
  grid-gap: $unit*5

  &__slider
    background: $pri-cl
    // background: $white

  &__card
    // width: 320px
    // width: 41vw
    width: 280px

</style>
