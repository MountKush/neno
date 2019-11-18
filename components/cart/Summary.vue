<template lang='pug'>
div(class='container-summary')
  div(class='summary')

    div(class='summary__row')
      h3(class='summary__copy summary__title') Summary

    div(class='summary__row')
      p(class='summary__copy') Subtotal
      span(class='summary__copy') ${{ cart.items_subtotal_price }}

    div(class='summary__row')
      p(class='summary__copy') Shipping &amp; Handling
      span(class='summary__copy') $0.00

    div(class='summary__row')
      p(class='summary__copy') Discount
      span(class='summary__copy') {{ cart.total_discount }}

    div(class='summary__row')
      h3(class='summary__copy summary__total') Total
      p(class='summary__copy summary__total-value') ${{ cart.total_price }}

    Submit(
      :cart='cart'
    )

</template>


<script>
import Submit from '~comp/cart/Submit.vue'
import DiscountEntry from '~comp/cart/DiscountEntry.vue'


export default {
  components: {
    Submit
  },
  props: {
    cart: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {}
}
</script>


<style lang='sass' scoped>
.container-summary

.summary
  display: grid
  grid-gap: $unit*2 0
  +mq-m
    background: $black
    padding: $unit*2
    color: $white

  &__row
    display: grid
    grid-auto-flow: column
    grid-auto-columns: 1fr auto
    grid-gap: 0 $unit*2
    color: inherit

  &__copy
    color: inherit

  &__title,
  &__total,
  &__total-value
    font-weight: $fw-bold
    text-transform: uppercase

  &__title
    font-size: $fs1
</style>
