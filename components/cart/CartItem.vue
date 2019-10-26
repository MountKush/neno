<template lang='pug'>
div(class='container-cart-item')

  li(class='cart-item')

    router-link(
      :to='{ name: "product", params: { id: products[item.id] ? products[item.id].id : "" } }'
      class='cart-item__image-wrapper'
    )
      Photo(
        :image='image'
        class='cart-item__image'
      )

    router-link(
      :to='{ name: "product", params: { id: products[item.id] ? products[item.id].id : "" } }'
      class='cart-item__title'
    ) {{ item.title }}

    p(class='cart-item__price') ${{ price }}

    p(
      v-show='color'
      class='cart-item__color'
    )
      IconColor(class='cart-item__color-icon')
      | {{ color }}

    p(
      v-show='size'
      class='cart-item__size'
    )
      IconSize(class='cart-item__size-icon')
      | {{ size }}

    div(class='cart-item__quantity')
      a(
        class='cart-item__quantity-button'
        @click='quantity--'
      ) -
      p(
        class='cart-item__quantity-count'
      ) {{ quantity }}
      a(
        class='cart-item__quantity-button'
        @click='quantity++'
      ) +


</template>


<script>
import { mapGetters, mapActions } from 'vuex'
import _ from 'lodash'
import Photo from '~comp/Photo.vue'
import IconColor from '~/assets/svg/icon-color.svg'
import IconSize from '~/assets/svg/icon-size.svg'


export default {
  components: {
    Photo,
    IconColor,
    IconSize
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      quantity: this.item.quantity
    }
  },
  computed: {
    variant () {
      this.products
      return this.item.variant
    },


    image () {
      return { src: this.variant.image.src, aspectRatio: '0 0 268 357' }
    },


    color () {
      const option = this.variant.selectedOptions.find(option => option.name.match(/color/i))
      return option ? option.value : ''
    },


    size () {
      const option = this.variant.selectedOptions.find(option => option.name.match(/size/i))
      return option ? option.value : ''
    },


    price () {
      return Math.round(this.variant.price * this.quantity * 100) / 100
    },


    ...mapGetters({
      products: 'checkout/lineItemsProducts'
    })
  },
  watch: {
    quantity (value) {
      if (value < 0) this.quantity = 0
      this.updateLineItemsDebounce()
    }
  },
  methods: {
    updateLineItemsDebounce: _.debounce(function() {
      const lineItems = [{ id: this.item.id, quantity: this.quantity }]
      this.updateLineItems({ lineItems })
    }, 1000),


    ...mapActions({
      updateLineItems: 'checkout/updateLineItems'
    })
  }
}
</script>


<style lang='sass' scoped>
.container-cart-item

.cart-item
  display: grid
  grid-template-rows: repeat(5, min-content)
  grid-template-columns: repeat(2, min-content) 1fr
  grid-gap: $unit $unit*2
  padding: $unit
  box-shadow: 0 0 $unit*3 rgba(34, 34, 34, 0.05)
  background: $white
  +mq-xs
    grid-template-rows: repeat(3, auto) 1fr
    grid-template-columns: auto auto 1fr


  &__image-wrapper
    grid-row: 1 / 2
    grid-column: 1 / 4
    +mq-xs
      grid-row: 1 / -1
      grid-column: 1 / 2
      width: $unit*16

  &__title
    grid-row: 2 / 3
    grid-column: 1 / 4
    margin-top: $unit*2
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    // font-weight: bold
    +mq-xs
      grid-row: 1 / 2
      grid-column: 2 / 4
      margin-top: unset

  &__price
    grid-row: 3 / 4
    grid-column: 1 / 4
    +mq-xs
      grid-row: 2 / 3
      grid-column: 2 / 4

  &__color
    grid-row: 4 / 5
    text-transform: capitalize
    display: flex
    +mq-xs
      grid-row: 3 / 4

    &-icon
      width: $unit*2
      height: $unit*2
      margin-right: $unit

  &__size
    grid-row: 4 / 5
    text-transform: capitalize
    display: flex
    +mq-xs
      grid-row:  3 / 4

    &-icon
      width: $unit*2
      height: $unit*2
      margin-right: $unit

  &__quantity
    width: min-content
    grid-row: 5 / 6
    grid-column: 1 / 4
    display: grid
    grid-auto-flow: column
    +mq-xs
      grid-row: 4 / 5
      grid-column: 2 / 4
      align-self: end

    &-button,
    &-count
      display: flex
      justify-content: center
      align-items: center
      width: $unit*5
      height: $unit*5

    &-button
      border-radius: 50%
      // border: 1px solid $grey
      user-select: none

  &__price,
  &__color,
  &__size,
  &__quantity
    color: $dark

</style>
