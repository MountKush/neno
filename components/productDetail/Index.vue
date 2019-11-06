<template lang='pug'>
div(class='container-product-detail')
  div(class='product-detail')

    Description(
      :product='product'
      class='product-detail__description'
    )
    a(
      @click='openDrawer({ id: "product-description" })'
    ) Read more

    ul(class='text-columns__list')
      li(
        v-for='(block, index) in blocks'
        :key='block + index'
        class='text-columns__item'
      )
        button(
          @click='openDrawer({ id: block.page.handle })'
          class='product-detail__button'
        )
          span(class='product-detail__button-label') {{ block.buttonLabel }}
          span(class='product-detail__button-icon') +
        ProductDetailOverlay(
          :drawerId='block.page.handle'
          :product='product'
          :content='block.page.content'
          @openDrawer='openDrawer({ id: block.page.handle })'
          @closeDrawer='closeDrawer'
        )

    ProductDetailOverlay(
      :drawerId='"product-description"'
      :product='product'
      :content='product.description'
      @closeDrawer='closeDrawer'
    )
</template>


<script>
import { mapState, mapMutations } from 'vuex'
import Controller from './Controller.vue'
import Description from './Description.vue'
import Reviews from './Reviews.vue'
import ProductDetailOverlay from '~comp/modules/ProductDetailOverlay.vue'


export default {
  components: {
    Controller,
    Description,
    Reviews,
    ProductDetailOverlay
  },
  props: {
    product: {
      type: Object,
      required: true
    },
    blocks: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      openDrawerHandle: ''
    }
  },
  computed: {
    ...mapState({
      drawer: state => state.app.drawer
    })
  },
  methods: {
    ...mapMutations({
      closeDrawer: 'app/CLOSE_DRAWER',
      openDrawer: 'app/OPEN_DRAWER'
    })
  }
}
</script>


<style lang='sass' scoped>
.container-product-detail
  // @extend %container


.product-detail
  // @extend %content
  display: grid
  grid-gap: $unit*3

  &__button
    display: flex
    width: 100%
    padding: $unit*3 $unit
    box-shadow: inset 0 1px 0 0 #E5E5E5
    background: transparent
    justify-content: space-between
    align-items: center

    &-label
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis

    &-icon
      margin-left: $unit

  &__controller
    display: none

  &__description,
  &__reviews,
  &__shipping-return
    height: $unit*34
    overflow: auto

  &__section
    position: relative

    &::after
      content: '+'
      position: absolute
      right: $unit*3

    &.active

      &::after
        content: ''
</style>
