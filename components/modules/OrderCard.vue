<template lang='pug'>
aside(class='order-card')
  header(class='order-card__header')
    p(class='order-card__header-label')
      IconClock(class='order-card__header-icon')
      | {{ order.processedAt }}
    p(
      v-if='!order.canceledAt'
      class='order-card__header-label'
    )
      IconTruck(class='order-card__header-icon')
      | {{ order.fulfillmentStatus }}
    p(
      v-if='order.canceledAt'
      class='order-card__header-label'
    )
      IconCancel(class='order-card__header-icon')
      | Canceled
    p(class='order-card__header-label')
      IconCreditCard(class='order-card__header-icon')
      | {{ order.financialStatus }}


  ul(class='order-card__gallery')
    li(
      v-for='(lineItem, index) in order.lineItems.filter((l, i) => i < lineItemsLimit)'
      class='order-card__gallery-item'
    )
      img(
        v-lazy='lineItem.variant.image.originalSrc'
        class='order-card__gallery-image'
      )
    li(
      v-if='additonalLineItemsCount > 0'
      class='order-card__gallery-item'
    )
      a(class='order-card__gallery-image order-card__gallery-additional') +{{ additonalLineItemsCount }}


  footer(class='order-card__footer')
    p(class='order-card__total')
      span(class='order-card__total-label') Total
      span(class='order-card__total-value') {{ order.totalPrice }}
    router-link(
      :to='{ name: "account-orders-id", params: { id: order.id }}'
      class='order-card__footer-action'
    ) View order
</template>

<script>
import IconClock from '~/assets/svg/icon-clock.svg'
import IconTruck from '~/assets/svg/icon-truck.svg'
import IconCancel from '~/assets/svg/icon-cancel.svg'
import IconCreditCard from '~/assets/svg/icon-credit-card.svg'

export default {
  components: {
    IconClock,
    IconTruck,
    IconCancel,
    IconCreditCard
  },
  props: {
    order: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      lineItemsLimit: 2
    }
  },
  computed: {
    additonalLineItemsCount() {
      return this.order.lineItems.length - this.lineItemsLimit
    }
  },
  methods: {}
}
</script>

<style lang='sass' scoped>
$image-size: $unit*10

.order-card
  padding: $unit*2
  // background: $pri-cl

  &__header
    display: flex
    flex-wrap: wrap

    &-label
      @extend %flex--row-center
      margin: 0 $unit*4 $unit 0
      border-radius: $unit*2
      white-space: nowrap

    &-icon
      height: $unit*3
      margin-right: $unit

  &__gallery
    display: grid
    grid-template-columns: repeat(auto-fill, $image-size)
    grid-gap: $unit*2
    margin: $unit 0 $unit*2 0

    &-item
      width: $image-size
      height: $image-size

    &-image
      width: inherit
      height: inherit
      object-fit: cover
      object-position: center

    &-additional
      @extend %flex--row-center
      border: 1px solid $grey
      color: $dark

  &__footer
    display: flex
    align-items: center

    &-action
      margin-left: auto
      padding: $unit*2
      background: $blue
      color: $white

  &__total
    display: grid

    &-label
      font-weight: $fw-bold

    &-value
</style>
