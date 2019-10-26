<template lang='pug'>
div(class='container-cart-list')

  ul(
    v-if='checkout.lineItems.length'
    class='cart-list'
  )

    CartItem(
      v-for='(item, index) in checkout.lineItems'
      :key='item.id'
      :item='item'
      class='cart-list__item'
    )

  div(
    v-else
    class='cart-list__empty'
  )
    h3(class='cart-list__empty-title') {{ emptyCart.title }}
    p(class='cart-list__empty-copy') {{ emptyCart.copy }}

</template>


<script>
import CartItem from '~comp/cart/CartItem.vue'


export default {
  components: {
    CartItem
  },
  props: {
    checkout: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      emptyCart: {
        title: '😱',
        copy: 'Your cart is empty, but it doesn\'t have to be.'
      }
    }
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-cart-list

.cart-list
  display: grid
  grid-gap: $unit*3 0
  +mq-l
    grid-gap: $unit*4
    grid-template-columns: repeat(2, 1fr)

  &__empty
    display: grid
    grid-gap: $unit*2 0
    justify-items: center
    padding: $unit*10 0


    &-title
      font-size: $fs4

    &-copy
      text-align: center


</style>
