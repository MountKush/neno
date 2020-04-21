<template lang='pug'>
ValidationProvider(
  :rules='rules'
  v-slot='{ failed }'
)
  label(class='base-label')
    span(
      v-if='label'
      class='base-label__text'
    ) {{ label }}
    input(
      v-bind='$attrs'
      v-on='listeners'
      type='checkbox'
      class='base-input'
    )
    p {{ text }}
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    rules: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.checked)
      }
    }
  }
}
</script>

<style lang='sass' scoped>
.base-label
  display: grid
  grid-gap: $unit/2 $unit
  grid-template-columns: auto 1fr
  align-items: center

  &__text
    grid-column: 1 / -1

.base-input
  height: $unit*6
  padding: 0 $unit*2
  border: 1px solid #fafafa
  border-radius: $unit/2
  background: #fafafa

  &:focus,
  &:hover
    background: transparent
    border-color: $grey

  &:focus
    border-color: $success
</style>
