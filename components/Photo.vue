<template lang='pug'>
div(class='container-image-ratio-sizer')

  div(
    class='image-ratio-sizer'
  )
    svg(
      :viewBox='image.aspectRatio'
      class='image-ratio-sizer__svg'
    )
    transition(mode='in-out')
      img(
        :key='image.src'
        v-lazy='image.src'
        class='image-ratio-sizer__image'
      )
</template>


<script>


export default {
  components: {},
  props: {
    image: {
      type: Object,
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
