<template lang='pug'>
div(class='order')
  OrderOverview(
    v-if='order'
    :cancelReason='order.cancelReason ? order.cancelReason : ""'
    :fulfillmentStatus='order.fulfillmentStatus'
    :financialStatus='order.financialStatus'
    :processedAt='order.processedAt'
    :shippingAddress='order.shippingAddress'
  )
  OrderSummary(
    v-if='order'
    :subtotalPrice='order.subtotalPrice'
    :totalPrice='order.totalPrice'
    :totalShippingPrice='order.totalShippingPrice'
    :totalTax='order.totalTax'
    :lineItems='order.lineItems'
    class='order__summary'
  )
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import OrderSummary from '~comp/modules/OrderSummary.vue'
import OrderOverview from '~/components/modules/OrderOverview.vue'

export default {
  components: {
    OrderSummary,
    OrderOverview
  },
  props: {},
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      order: 'account/activeOrder'
    })
  },
  methods: {
    ...mapActions({
      fetchOrder: 'account/fetchOrder'
    })
  },
  created () {
    const { id } = this.$route.params
    this.fetchOrder(id)
  }
}
</script>


<style lang='sass' scoped>
.container-orders

.orders

</style>
