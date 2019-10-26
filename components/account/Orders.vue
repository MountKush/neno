<template lang='pug'>
div(class='container-orders')

  section(class='orders')
    h3(class='orders__title') Orders

    ul(class='orders__list')
      li(class='orders__item')
        a(
          @click='show.order = !show.order'
          class='orders__header'
        )
          h4(class='orders__header-title') #0001112444444
          p(class='orders__header-copy') Sept 24, 2018
        OrderDetail(
          v-show='show.order'
          class='orders__detail'
        )

</template>


<script>
import OrderDetail from '~comp/account/OrderDetail.vue'


export default {
  components: {
    OrderDetail
  },
  props: {},
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
  max-width: 320px

  &__title
    padding: $unit*3 0
    font-size: $fs1

  &__header
    display: block
    padding: $unit*3 $unit*2
    user-select: none

  &__item
    box-shadow: 0 0 $unit*3 rgba(34, 34, 34, 0.05)

</style>
