<template lang='pug'>
div(class='container-image-ratio-sizer')

  div(
    class='image-ratio-sizer'
  )
    svg(
      :viewBox='`0 0 ${aspectRatio} 1`'
      class='image-ratio-sizer__svg'
    )
    transition(mode='in-out')
      img(
        :key='src'
        v-lazy='src'
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

  &__svg,
  &__image
    grid-area: 1 / 1 / 2 / 2

  &__image
    width: 100%
    height: auto
    object-fit: cover
    opacity: 0
    transition: opacity 25ms

    &[lazy=loaded]
      opacity: 1

</style>
