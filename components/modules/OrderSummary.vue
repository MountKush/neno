<template lang='pug'>
section(class='order-summary')
  h2(class='order-summary__title') Summary
  ul(class='order-summary__line-items')
    li(
      v-for='(lineItem, index) in lineItems'
      :key='lineItem + index'
      class='order-summary__item'
    )
      img(
        v-lazy='lineItem.variant.image.originalSrc'
        :alt='lineItem.variant.image.altText'
        class='order-summary__item-image'
      )
      div(class='order-summary__item-title')
        p(class='order-summary__item-product-title') {{ lineItem.title }}
        p(class='order-summary__item-variant-title') {{ lineItem.variant.title }}
      p(class='order-summary__item-quantity') x{{ lineItem.quantity }}
      p(class='order-summary__item-price') {{ lineItem.originalTotalPrice }}

  footer(class='order-summary__footer')
    p(
      v-for='(fin, index) in list'
      :key='fin + index'
      class='order-summary__footer-item'
    )
      span(class='order-summary__footer-text') {{ fin.label }}
      span(class='order-summary__footer-text') {{ fin.value }}
</template>

<script>
export default {
  components: {},
  props: {
    subtotalPrice: {
      type: String,
      required: true
    },
    totalPrice: {
      type: String,
      required: true
    },
    totalShippingPrice: {
      type: String,
      required: true
    },
    totalTax: {
      type: String,
      required: true
    },
    lineItems: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      list: [
        { label: 'Subtotal', value: this.subtotalPrice },
        { label: 'Shipping', value: this.totalShippingPrice },
        { label: 'Tax', value: this.totalTax },
        { label: 'Total', value: this.totalPrice },
      ]
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang='sass' scoped>
.order-summary
  padding: $unit*2 0
  background: $white

  &__title
    margin: 0 $unit*2 $unit*2 $unit*2
    font-size: $fs1
    font-weight: $fw-bold

  &__line-items
    display: grid
    grid-gap: $unit*2
    padding-bottom: $unit*4
    margin: 0 $unit*2 $unit $unit*2
    border-bottom: 1px solid $pri-cl

  &__item
    display: grid
    grid-template-columns: min-content 1fr auto auto
    grid-gap: $unit*2

    &-image
      width: $unit*10
      height: $unit*10
      object-fit: cover
      object-position: center

    &-title

    &-product-title

    &-variant-title
      color: $dark

    &-quantity
      margin: 0 $unit*2
      color: $dark

    &-price

  &__footer

    &-item
      display: grid
      grid-auto-flow: column
      grid-auto-columns: 1fr auto
      grid-gap: $unit*2
      padding: $unit*2
      border-radius: $unit

      &:last-child
        padding: $unit*2 $unit
        margin: 0 $unit
        font-weight: $fw-bold
        background: $pri-cl

    &-text
      font-weight: inherit
</style>
