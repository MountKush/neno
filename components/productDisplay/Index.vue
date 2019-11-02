<template lang='pug'>
div(class='container-product-display')

  div(class='product-display')

    Display(
      v-if='activeVariant'
      :images='product.images'
      class='product-display__product'
    )

    Detail(
      :product='product'
      :variant='activeVariant'
      class='product-display__detail'
    )

    Controller(
      :product='product'
      :variants='product.variants'
      :options='product.options_with_values'
      @setActiveVariant='setActiveVariant'
      @quantity='setQuantity'
      class='product-display__controller'
    )

    Submit(
      :variant='activeVariant'
      :quantity='quantity'
      class='product-display__submit'
    )

    //- div(class='product-display__divider divider-2')
    //-
    //- Share(
    //-   class='product-display__share'
    //- )
</template>


<script>
import Detail from './Detail.vue'
import Controller from './Controller.vue'
import Display from './Display.vue'
import Submit from './Submit.vue'
import Share from './Share.vue'


export default {
  components: {
    Detail,
    Controller,
    Display,
    Submit,
    Share
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      activeVariant: {},
      quantity: 1
    }
  },
  computed: {
  },
  methods: {
    setActiveVariant (position) {
      const { variants } = this.product
      const variant = variants.find(variant => {
        const optionPosition = `option${position}`
        return variant['option1'] === position['1'] &&
          variant['option2'] === position['2'] &&
          variant['option3'] === position['3']
      })
      this.activeVariant = variant
    },


    setQuantity (value) {
      this.quantity = value
    }
  },
  created () {
    const init = () => {
      const variant = this.product.variants.find(variant => variant.id === this.product.selectedOrFirstAvailableVariant)
      if (variant) this.activeVariant = variant
    }
    init()
  }
}
</script>


<style lang='sass' scoped>

.container-product-display
  @extend %container

.product-display
  @extend %content
  display: grid
  grid-gap: $unit*5 0
  +mq-s
    grid-template-rows: min-content auto min-content
    grid-template-columns: 1.5fr 1fr
    grid-gap: 0 $unit*5
  +mq-m
    grid-template-rows: min-content auto min-content
    grid-template-columns: 1.25fr 1fr
    grid-gap: 0 $unit*10

  &__product
    +mq-xs
      grid-row: 1 / -1
      grid-column: 1 / 2

  &__wrapper
    display: grid
    grid-gap: $unit*5 0
    +mq-s
      grid-template-rows: repeat(5, auto)
      grid-gap: $unit*5 0



  &__detail
    +mq-m
      // grid-row: 1 / 2
      // grid-column: 2 / 3

  &__controller
    +mq-m
      // grid-row: 3 / 4
      // grid-column: 2 / 3

  &__submit
    +mq-m
      // grid-row: 5 / 6
      // grid-column: 2 / 3

  &__share
    +mq-m
      // grid-row: 7 / 8
      // grid-column: 2 / 3

  &__divider
    height: 1px
    background: $grey

    &.divider-0
      +mq-m
        // grid-row: 2 / 3
        // grid-column: 2 / 3

    &.divider-1
      +mq-m
        // grid-row: 4 / 5
        // grid-column: 2 / 3

    &.divider-2
      +mq-m
        // grid-row: 6 / 7
        // grid-column: 2 / 3



</style>
