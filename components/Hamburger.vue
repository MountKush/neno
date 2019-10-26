<template lang='pug'>
div(class='container-hamburger')
  a(
    @click='$emit("handleClick")'
    :class='{ active }'
    class='hamburger'
  )
</template>


<script>


export default {
  components: {},
  props: {
    active: {
      type: Boolean
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
.container-hamburger
  position: relative

.hamburger
  position: relative
  width: $unit*5
  height: $unit*5
  display: block
  border-radius: 50%
  background: transparent

  &::after,
  &::before
    content: ''
    position: absolute
    top: 50%
    left: 50%
    width: $unit*3
    height: 2px
    background: $black
    transition: transform 500ms

  &::after
    transform: translate(-50%, -#{$unit/2})

  &::before
    transform: translate(-50%, #{$unit/2})

  &.active

    &::after,
    &::before
      transform: translate(-50%, 0)
</style>
