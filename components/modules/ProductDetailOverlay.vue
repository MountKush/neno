<template lang='pug'>
OverlayDrawer(
  class='drawer'
  :drawerId='drawerId'
)
  template(v-slot:header)
    div(class='drawer__header')
      button(
        @click='$emit("closeDrawer")'
        class='drawer__product'
      )
        img(
          v-lazy='product.featuredImage.src'
          class='drawer__product-image'
        )
        div(class='drawer__product-content-wrapper')
          p(class='') {{ product.title }}
          div {{ product.price }}
      button(
        @click='$emit("closeDrawer")'
        class='drawer__close'
      )
        div Close

  template(v-slot:default)
    div(
      v-html='content'
      class='drawer__content'
    )
</template>


<script>
import OverlayDrawer from '~comp/slot/OverlayDrawer.vue'


export default {
  components: {
    OverlayDrawer
  },
  props: {
    drawerId: {
      type: String,
      required: true
    },
    product: {
      type: Object,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.drawer

  &__header
    display: grid
    grid-auto-flow: column
    grid-gap: 0 $unit*2
    padding: $unit 0
    width: 100%

  &__product,
  &__close
    display: flex
    align-items: center
    background: transparent
    padding: 0 $unit*2

  &__product
    justify-self: start

    &-image
      width: $unit*7
      height: $unit*7
      margin-right: $unit
      object-fit: cover

    &-content-wrapper
      text-align: center

    & p

    & div

  &__close
    justify-self: end

  &__content
    @extend %content
    max-width: 1024px

</style>
