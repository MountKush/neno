<template lang='pug'>
ValidationProvider(
  :rules='rules'
  :name='name'
  v-slot='{ failed, required }'
)
  label(class='base-label')
    span(
      v-if='label'
      class='base-label__text'
    ) {{ label }}
      span(
        v-if='required'
        class='base-label__required'
      ) &nbsp;*
    input(
      v-bind='$attrs'
      v-on='listeners'
      :class='{ failed }'
      class='base-input'
    )
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    },
    rules: {
      type: String,
      default: ''
    },
    name: {
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
        input: event => this.$emit('input', event.target.value)
      }
    }
  }
}
</script>

<style lang='sass' scoped>
.base-label
  display: grid
  grid-gap: $unit/2 0

  &__label

  &__required
    color: $error

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

  &.failed
    border-color: $error
</style>
