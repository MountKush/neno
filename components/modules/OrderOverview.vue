<template lang='pug'>
section(class='order-overview')
  h2(class='order-overview__title') Overview

  aside(
    v-for='(item, index) in overviewItems'
    v-show='item.text'
  )
    h3(class='order-overview__label')
      Icon(
        :icon='item.icon'
      )
      span(class='order-overview__label-text') {{ item.label }}
    p(v-html='item.text')
</template>

<script>
import Icon from '~/components/elements/Icon.vue'
import IconClock from '~/assets/svg/icon-clock.svg'
import IconTruck from '~/assets/svg/icon-truck.svg'
import IconCancel from '~/assets/svg/icon-cancel.svg'
import IconCreditCard from '~/assets/svg/icon-credit-card.svg'
import IconAddress from '~/assets/svg/icon-address.svg'

export default {
  components: {
    Icon
  },
  props: {
    cancelReason: {
      type: String,
      required: true
    },
    fulfillmentStatus: {
      type: String,
      required: true
    },
    financialStatus: {
      type: String,
      required: true
    },
    processedAt: {
      type: String,
      required: true
    },
    shippingAddress: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      overviewItems: [
        {
          label: 'Date of order',
          icon: IconClock,
          text: this.processedAt
        },
        {
          label: 'Fulfillment status',
          icon: IconTruck,
          text: this.fulfillmentStatus
        },
        {
          label: 'Financial status',
          icon: IconCreditCard,
          text: this.financialStatus
        },
        {
          label: 'Canceled',
          icon: IconCancel,
          text: this.cancelReason
        },
        {
          label: 'Address',
          icon: IconAddress,
          text: this.shippingAddress.address1 ?
            `${this.shippingAddress.name}<br>
            ${this.shippingAddress.address1}<br>
            ${this.shippingAddress.formattedArea}` :
            ''
        }
      ]
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang='sass' scoped>
.order-overview
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr))
  grid-gap: $unit*2
  padding: $unit*2

  &__title
    grid-column: 1 / -1
    font-size: $fs1
    font-weight: $fw-bold

  &__label
    display: flex
    align-items: center
    margin-bottom: $unit

    &-text
      margin-left: $unit
      font-weight: $fw-bold
</style>
