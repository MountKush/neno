<template lang='pug'>
div(class='container-orders')
  ViewHeader(
    title='Orders'
    secondaryActionLabel='Back'
    @secondaryActionClick='routerGoBack'
  )
  div(class='orders')
    Orders(
      :orders='orders'
    )
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
import Orders from '~comp/account/Orders.vue'
import ViewHeader from '~/components/modules/ViewHeader.vue'
import useRouterBack from '~/compositions/useRouterBack'

export default {
  components: {
    ViewHeader,
    Orders
  },
  props: {},
  setup() {
    const { routerGoBack } = useRouterBack()
    return { routerGoBack }
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      orders: 'account/orders'
    })
  },
  methods: {
    ...mapActions({
      fetchOrders: 'account/fetchOrders'
    })
  },
  created() {
    this.fetchOrders()
  }
}
</script>


<style lang='sass' scoped>
.container-orders

.orders

</style>
