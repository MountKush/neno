<template lang='pug'>
div(class='container-controller')

  div(class='controller')

    //- size select
    div(
      v-if='options.size.length'
      class='controller__size'
    )
      p(class='controller__size-label') Size
      a(
        v-for='(size, index) in options.size'
        :key='size + index'
        @click='setActiveVariant({ optionValue: size })'
        :class='{ active: activeVariant.options.includes(size) }'
        class='controller__size-button'
      ) {{ size }}

    //- color select
    //- div(
    //-   v-if='options.color.length'
    //-   class='controller__color'
    //- )
    //-   p(class='controller__color-label') Color
    //-   a(
    //-     v-for='(color, index) in options.color'
    //-     :key='color + index'
    //-     @click='setActiveVariant({ optionValue: color })'
    //-     :style='{ background: colorOptionHex[color.toLowerCase()] ? colorOptionHex[color.toLowerCase()] : null }'
    //-     :class='{ active: activeVariant.options.includes(color) }'
    //-     class='controller__color-button'
    //-   )

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


export default {
  components: {},
  props: {
    product: {
      type: Object,
      required: true
    },
    variants: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      quantity: 1,
      activeVariant: {}
    }
  },
  computed: {
    options () {
      console.log('color value: ', this.extractProductOptions({ name: 'color' }))
      console.log('color hex: ', this.product.tags)
      return {
        size: this.extractProductOptions({ name: 'size' }),
        color: this.extractProductOptions({ name: 'color' })
      }
    },


    colorOptionHex () {
      const key = { color: 'color_', hex: '#' } // example product tag: color_yellow_#F8EB59
      const colorHex = {}

      this.product.tags.forEach(tag => {
        const index = { color: tag.value.indexOf(key.color), hex: tag.value.indexOf(key.hex) }
        if (index.color < 0 || index.hex < 0) return

        const color = tag.value.substring(key.color.length, index.hex - 1).split('_').join(' ')
        const hex = tag.value.substring(index.hex)
        colorHex[color] = hex
      })
      return colorHex
    }
  },
  watch: {
    quantity (value) {
      if (value < 1) this.quantity = 1
      this.emitQuantity()
    },


    activeVariant () {
      this.emitActiveVariant()
    }
  },
  methods: {
    setActiveVariant ({ optionValue }) {
      const options = Object.keys(this.options).map(key => this.options[key])

      // find array that optionValue belongs, replace comparable value
      const newOptions = this.activeVariant.options.map(option => {
        let newOption = option
        options.forEach(o => {
          if (o.includes(option) && o.includes(optionValue)) newOption = optionValue
        })
        return newOption
      })

      // find variant that newOptions values match
      const variant = this.variants.find(variant => {
        return variant.options.every(option => newOptions.includes(option))
      })

      variant ? this.activeVariant = variant : null
    },


    initActiveVariant () {
      const activeVariant = this.variants.find(variant => variant.available)
      this.activeVariant = activeVariant ? activeVariant : this.variants[0]
    },


    emitActiveVariant () {
      this.$emit('activeVariant', this.activeVariant)
    },


    emitQuantity () {
      this.$emit('quantity', this.quantity)
    },


    extractProductOptions ({ name }) {
      const reg = new RegExp(name, 'i')
      const { options } = this.product
      const values = options.find(option => option.name.match(reg))
      return values ? values.values.map(value => value.value) : []
    }
  },
  created () {
    this.initActiveVariant()
  }
}
</script>


<style lang='sass' scoped>

.container-controller

.controller
  width: min-content
  display: grid
  grid-gap: $unit*3 0
  // padding: $unit*2 0

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
