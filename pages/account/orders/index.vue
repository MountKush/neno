<template lang='pug'>
div(class='container-orders')
  div(class='orders')
    Orders(
      :orders='orders'
    )
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
import Orders from '~comp/account/Orders.vue'

export default {
  components: {
    Orders
  },
  props: {},
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
