<template lang='pug'>
div(class='container-order-detail')

  div(class='order-detail')
    div(class='order-detail__wrapper')
      h4(class='order-detail__title') Number
      p(class='order-detail__copy') #000111000444
    div(class='order-detail__wrapper')
      h4(class='order-detail__title') Date
      p(class='order-detail__copy') Sept 24, 2018
    div(class='order-detail__wrapper')
      h4(class='order-detail__title') Status
      p(class='order-detail__copy') In transit
    div(class='order-detail__wrapper')
      h4(class='order-detail__title') Item(s)
      p(class='order-detail__copy') Wavy Dress
      p(class='order-detail__copy') Summer Tee Shirt
    div(class='order-detail__wrapper')
      h4(class='order-detail__title') Subtotal
      p(class='order-detail__copy') $1,100
    a(class='order-detail__customer-service') Cancel Order

</template>


<script>


export default {
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-order-detail

.order-detail
  display: grid
  grid-gap: $unit*2 0
  padding: $unit*2

  &__wrapper

  &__title
    font-weight: bold

  &__copy


  &__customer-service
    justify-self: end
    width: $unit*15
    height: $unit*5
    display: flex
    justify-content: center
    align-items: center
    background: transparent
    color: $success

</style>
