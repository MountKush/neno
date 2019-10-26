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
      :checkout='checkout'
      class='cart__list'
    )

    DiscountEntry(class='cart__discount-entry')

    Estimation(
      :checkout='checkout'
      class='cart__estimation'
    )

    Submit(
      :checkout='checkout'
      class='cart__submit'
    )
</template>


<script>
import { mapState } from 'vuex'
import _ from 'lodash'
import Header from '~comp/cart/Header.vue'
import CartList from '~comp/cart/CartList.vue'
import DiscountEntry from '~comp/cart/DiscountEntry.vue'
import Estimation from '~comp/cart/Estimation.vue'
import Submit from '~comp/cart/Submit.vue'


export default {
  components: {
    CartHeader: Header,
    CartList,
    DiscountEntry,
    Estimation,
    Submit
  },
  props: {},
  data () {
    return {}
  },
  computed: {
    isCheckoutEmpty () {
      return _.isEmpty(this.checkout)
    },


    ...mapState({
      checkout: state => state.checkout
    })
  },
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-cart


.cart
  width: 75%
  max-width: 1024px
  margin: $unit*10 auto 0 auto
  display: grid
  grid-template-rows: repeat(5, auto)
  grid-gap: $unit*10 0

  &__header
    grid-row: 1 / 2

  &__list
    grid-row: 2 / 3

  &__discount-entry
    grid-row: 3 / 4

  &__estimation
    grid-row: 4 / 5

  &__submit
    grid-row: 5 / 6

</style>
