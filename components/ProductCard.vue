<template lang='pug'>
div(class='container-product')

  router-link(
    :to='product.url'
    class='product'
  )

    Photo(
      :src='src'
      :aspectRatio='aspectRatio'
      :image='{ src, aspectRatio: `0 0 ${aspectRatio} 1` }'
      class='product__image'
    )
    h3(
      class='product__title'
    ) {{ product.title }}
    p(
      class='product__price'
    ) ${{ product.price }}
    //- p(
    //-   v-if='product.variants[0].compareAtPrice > product.variants[0].price'
    //-   class='product__tag'
    //- ) Sale
</template>


<script>
import Photo from '~comp/Photo.vue'


export default {
  components: {
    Photo
  },
  props: {
    product: {
      type: Object,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    aspectRatio: {
      type: Number,
      default: 1
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
.container-product

.product
  position: relative
  display: grid
  grid-template-rows: repeat(3, min-content)
  // grid-gap: $unit 0
  // box-shadow: 0 0 $unit*3 rgba(34, 34, 34, 0.05)
  // padding: $unit $unit $unit*4 $unit
  // padding: $unit
  // background: $white
  // padding: $unit

  &__image
    // padding: $unit*5 $unit*3 0 $unit*3
    // padding: $unit*2
    // padding-bottom: 0

  &__title
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    // margin: $unit $unit*2 0 $unit*2
    // padding: $unit*2
    margin: $unit 0

  &__price
    // margin: 0 $unit*2

  &__tag
    position: absolute
    right: 0
    padding: $unit/2 $unit
    background: rgba(255, 255, 255, 0.9)
    color: $success
    font-size: 12px
    text-transform: uppercase

</style>
