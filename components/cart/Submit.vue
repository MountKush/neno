<template lang='pug'>
div(class='container-submit')

  form(
    @submit.prevent='goToCheckout'
    class='submit'
  )
    input(
      :class='{ valid: checkout.lineItems.length }'
      type='submit'
      value='Checkout'
      class='submit__checkout'
    )

    p(class='submit__disclosure') Taxes calculated at checkout

</template>


<script>
import IconOrder from '~/assets/svg/icon-order.svg'


export default {
  components: {
    IconOrder
  },
  props: {
    checkout: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {
    discount () {
      const { totalPrice, subtotalPrice } = this.checkout
      const discount = Math.round((subtotalPrice - totalPrice) * 100) / 100
      return discount ? `- $${discount}` : `$0.00`
    }
  },
  methods: {
    goToCheckout () {
      const { webUrl, lineItems } = this.checkout
      lineItems.length ? window.open(webUrl, '_blank') : null
    }
  }
}
</script>


<style lang='sass' scoped>
.container-submit

.submit
  display: grid
  grid-gap: $unit*2 0
  // justify-items: end

  &__checkout
    // width: 240px
    height: $unit*8
    padding: 0 $unit*5
    // border-radius: $unit*3
    text-transform: uppercase
    background: $grey
    color: $white

    &.valid
      background: $success
      cursor: pointer
      box-shadow: 0 24px 32px rgba(33, 206, 156, 0.25)

  &__disclosure
    text-align: right
    font-size: 12px
    color: $grey

</style>
