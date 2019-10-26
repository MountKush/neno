<template lang='pug'>
main(
  :key='this.$route.fullPath'
  class='container-product'
)
  div(
    v-for='(section, index) in themeData'
    :key='section + index'
  )
    ProductDisplay(
      v-if='section.type === "static-product"'
      :product='section.settings.product'
      class='product__display'
    )

    //- ProductDetail(
    //-   :product='product'
    //-   class='product__detail'
    //- )

    //- ProductSimilar(
    //-   :products='products'
    //-   :product='product'
    //-   class='product__similar'
    //- )

</template>


<script>
import { mapState, mapGetters } from 'vuex'
import ProductDisplay from '~comp/productDisplay/Index.vue'
import ProductDetail from '~comp/productDetail/Index.vue'
import ProductSimilar from '~comp/productSimilar/Index.vue'


export default {
  components: {
    ProductDisplay,
    ProductDetail,
    ProductSimilar
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      themeData: 'app/themeData'
    })
  }
}
</script>

<style lang='sass' scoped>
.container-product
  // box-shadow: 0px 0px 0.5rem rgba(33, 33, 33, 0.2)

.product
  // width: 75%
  // max-width: 1024px
  display: grid
  grid-gap: $unit*5 0
  // margin: $unit*5 auto 0 auto
  +mq-m
    // margin-top: $unit*10

  &__display

  &__detail

  &__similar



</style>
