<template lang='pug'>
div(class='container-submit')

  form(
    @submit.prevent='goToCheckout'
    class='submit'
  )
    input(
      :class='{ valid: cart.items.length }'
      type='submit'
      value='Checkout'
      class='submit__checkout'
    )
</template>


<script>


export default {
  components: {},
  props: {
    cart: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  methods: {
    goToCheckout () {

    }
  }
}
</script>


<style lang='sass' scoped>
.container-submit
  position: fixed
  bottom: 0
  left: 0
  width: 100%
  z-index: 10
  padding: $unit*3 $unit*2
  background: $white
  +mq-m
    position: static
    padding: 0

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
