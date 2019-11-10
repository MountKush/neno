<template lang='pug'>
div(
  class='image-ratio-sizer'
)
  svg(
    :viewBox='`0 0 ${aspectRatio} 1`'
    class='image-ratio-sizer__svg'
  )
  transition(mode='in-out')
    img(
      v-lazy='src'
      :key='src'
      class='image-ratio-sizer__image'
    )
</template>


<script>


export default {
  components: {},
  props: {
    src: {
      type: String,
      required: true
    },
    aspectRatio: {
      type: Number,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>


<style lang='sass' scoped>
.container-image-ratio-sizer


.image-ratio-sizer
  display: grid
  background: rgba(252, 252, 252, 1)
  background: $pri-cl

  &__svg,
  &__image
    grid-area: 1 / 1 / 2 / 2
    max-height: inherit

  &__image
    width: 100%
    height: auto
    object-fit: contain
    opacity: 0
    transition: opacity 25ms

    &[lazy=loaded]
      opacity: 1

</style>
