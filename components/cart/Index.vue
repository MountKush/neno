<template lang='pug'>
div(class='container-cart')

  div(
    v-if='!isCheckoutEmpty'
    class='cart'
  )

    CartHeader(
      class='cart__header'
    )

    CartList(
      :cart='cart'
      class='cart__list'
    )

    CartSummary(
      :cart='cart'
      class='cart__summary'
    )

  ProductRecommendations(
    v-if='cart.items.length'
    :productId='cart.items[0].product_id'
  )
</template>


<script>
import { mapState } from 'vuex'
import _ from 'lodash'
import Header from '~comp/cart/Header.vue'
import CartList from '~comp/cart/CartList.vue'
import CartSummary from '~comp/cart/Summary.vue'
import ProductRecommendations from '~comp/compositions/ProductRecommendations.vue'


export default {
  components: {
    CartHeader: Header,
    CartList,
    CartSummary,
    ProductRecommendations
  },
  props: {},
  data () {
    return {}
  },
  computed: {
    isCheckoutEmpty () {
      return _.isEmpty(this.cart)
    },


    ...mapState({
      cart: state => state.cart.cart
    })
  },
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-cart

.cart
  @extend %content
  margin: $unit*5 auto $unit*10 auto
  display: grid
  +mq-m
    grid-template-rows: repeat(2, auto)
    grid-template-columns: 1fr auto
    grid-gap: $unit*5

  &__header

  &__list

  &__summary
    +mq-m
      grid-row: 1 / -1
      grid-column: 2 / 3

</style>
