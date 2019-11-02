<template lang='pug'>
div(class='container-controller')
  div(class='controller')

    div(
      v-for='(option, index) in options'
      :key='option + index'
    )
      header()
        h3 {{ option.name }}:&nbsp;
        p {{ position[option.position] }}
      Swatches(
        :values='option.values'
        :position='option.position'
        :selectedValue='position[option.position]'
        @selectValue='setValue'
      )

    //- quantity select
    div(class='controller__quantity')
      a(
        class='controller__quantity-button'
        @click='quantity--'
      ) -
      p(
        class='controller__quantity-count'
      ) {{ quantity }}
      a(
        class='controller__quantity-button'
        @click='quantity++'
      ) +

</template>


<script>
import Swatches from '~comp/productDisplay/Swatches.vue'


export default {
  components: {
    Swatches
  },
  props: {
    options: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      quantity: 1,
      position: {
        1: null,
        2: null,
        3: null
      }
    }
  },
  computed: {

  },
  watch: {
    quantity (value) {
      if (value < 1) this.quantity = 1
      this.emitQuantity()
    }
  },
  methods: {
    setValue({ position, value }) {
      this.position[position] = value
      this.setActiveVariant()
    },

    emitQuantity () {
      this.$emit('quantity', this.quantity)
    },

    setActiveVariant () {
      this.$emit('setActiveVariant', this.position)
    }
  },
  created () {
    this.options.forEach(option => {
      const { position, selectedValue } = option
      this.position[position] = selectedValue
    })
  }
}
</script>


<style lang='sass' scoped>
header
  display: flex

  & h3
  & p


.container-controller

.controller
  width: min-content
  display: grid
  grid-gap: $unit*3 0
  // padding: $unit*2 0

  &__value
    padding: $unit

    &.active
      border: 2px solid blue

  &__size,
  &__color
    width: min-content
    display: grid
    grid-template-rows: repeat(2, auto)
    grid-template-columns: min-content
    grid-gap: $unit*2 $unit

    &-label
      grid-row: 1 / 2
      grid-column: 1 / 3

    &-button
      grid-row: 2 / 3
      width: $unit*5
      height: $unit*5
      display: flex
      justify-content: center
      align-items: center
      border-radius: 50%
      // border: 1px solid $grey
      user-select: none
      color: $grey
      transition: transform 250ms ease

      &.active
        // box-shadow: 0 $unit $unit*3 rgba(34, 34, 34, 0.15)
        color: $black
        transform: scale(0.75)

  &__size

    &-button

      &.active
        transform: unset


  &__quantity
    width: min-content
    display: grid
    grid-template-columns: repeat(3, min-content)
    grid-gap: 0 $unit


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

    &-count

</style>
