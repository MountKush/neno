<template lang='pug'>
div(class='container-orders')

  section(class='orders')
    //- h3(class='orders__title') Orders

    ul(class='orders__list')
      li(
        v-for='(order, index) in orders'
        class='orders__item'
      )
        OrderCard(
          :order='order'
        )
</template>


<script>
import OrderCard from '~comp/modules/OrderCard.vue'
import OrderDetail from '~comp/account/OrderDetail.vue'


export default {
  components: {
    OrderCard
  },
  props: {
    orders: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      show: {
        order: false
      }
    }
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-orders

.orders
  width: 100%
  // max-width: 320px

  &__title
    padding: $unit*3 0
    font-size: $fs1

  &__header
    display: block
    padding: $unit*3 $unit*2
    user-select: none

  &__gallery
    display: grid
    grid-auto-flow: column
    grid-gap: $unit

    &-item
      box-shadow: 0 0 $unit*3 rgba(34, 34, 34, 0.05)

    &-image
      width: 40px

</style>
