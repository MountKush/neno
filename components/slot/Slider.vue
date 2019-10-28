<template lang='pug'>
div(class='container-slider')
  div(
    v-dragscroll.x='!isTouchDevice'
    v-on:dragscrollstart='isDragging = true'
    v-on:dragscrollend='isDragging = false'
    :class='{ "is-dragging": isDragging }'
    class='slider'
  )
    div(
      :class='{ "is-dragging": isDragging }'
      class='slider__track'
    )
      slot

  div(class='slider__hint')
    p Drag to Scroll
</template>


<script>
import { dragscroll } from 'vue-dragscroll'


export default {
  directives: {
    'dragscroll': dragscroll
  },
  components: {},
  props: {},
  data () {
    return {
      isTouchDevice: false,
      isDragging: false
    }
  },
  computed: {},
  methods: {},
  created () {
    this.isTouchDevice = 'ontouchstart' in document.documentElement
  }
}
</script>


<style lang='sass' scoped>
.container-slider
  display: grid
  position: relative

.slider
  background: inherit
  cursor: grab
  overflow-x: auto
  -webkit-overflow-scrolling: touch

  &.is-dragging
    cursor: grabbing

  &__track
    display: grid
    grid-auto-flow: column
    grid-gap: $unit*4
    width: fit-content
    padding: 0 5% $unit*5 5%
    position: relative
    z-index: 1
    +mq-s
      padding: 0 12.5% $unit*5 12.5%

    &.is-dragging
      pointer-events: none

  &__hint
    @extend %flex--row-center
    background: inherit
    height: $unit*5
    position: absolute
    bottom: 0
    width: 100%
    z-index: 6
    pointer-events: none

    & p
      font-size: $fs-1

</style>
