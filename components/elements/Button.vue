<template lang='pug'>
button(
  v-on='listeners'
  class='base-button'
  :class='{ loading }'
)
  span(class='base-button__text') {{ text }}
  Loader(class='base-button__loader')
</template>

<script>
import Loader from '~/components/elements/Loader.vue'

export default {
  components: {
    Loader
  },
  props: {
    text: {
      type: String,
      default: 'Submit'
    },
    loading: {
      type: Boolean,
      default: false
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
  },
  methods: {}
}
</script>

<style lang='sass' scoped>
.base-button
  @extend %flex--row-center
  position: relative
  min-width: $unit*15
  height: $unit*6
  padding: 0 $unit*6
  border-radius: $unit/2
  background: $success
  color: $white
  cursor: pointer

  &__text
    color: currentColor

  &__loader
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    visibility: hidden

  &:disabled
    cursor: not-allowed
    background: $dark

  &.loading
    cursor: progress

    & .base-button__text
      visibility: hidden

    & .base-button__loader
      visibility: visible
</style>
