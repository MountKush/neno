<template lang='pug'>
div(class='swatches')
  ul(
    class='swatches__list'
  )
    li(
      v-for='(value, index) in values'
      :key='value + index'
      class='swatches__item'
    )
      button(
        @click='$emit("selectValue", { value, position })'
        :class='{ active: value === selectedValue }'
        class='swatches__button'
      ) {{ value }}
</template>


<script>


export default {
  components: {},
  props: {
    values: {
      type: Array,
      required: true
    },
    selectedValue: {
      type: String,
      default: ''
    },
    position: {
      type: Number,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.swatches

  &__list
    display: grid
    grid-auto-flow: column
    grid-auto-rows: 1fr
    grid-gap: $unit


  &__item

  &__button
    padding: $unit
    min-width: $unit*10
    min-height: $unit*7
    border: 2px solid $pri-cl

    &.active
      border: 2px solid $blue
</style>
