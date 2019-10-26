<template lang='pug'>
div(class='container-shimmer')

  div(
    @click='active = !active'
    :class='{ active }'
    :style='shimmerStyles'
    class='shimmer'
  )
    span(
      v-for='(item, index) in (settings.rows * settings.columns)'
      :style='{ animationDelay: `${10 * index}ms` }'
      class='shimmer__cell'
    )

</template>


<script>


export default {
  components: {},
  props: {},
  data () {
    return {
      settings: {
        rows: 5,
        columns: 10,
      },
      active: false
    }
  },
  computed: {
    shimmerStyles () {
      return {
        gridTemplateRows: `repeat(${this.settings.rows}, 1fr)`,
        gridTemplateColumns: `repeat(${this.settings.columns}, 1fr)`
      }
    },


    shimmerCellStyles () {
      return {

      }
    }
  },
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-shimmer

.shimmer
  width: inherit
  height: inherit
  display: grid
  grid-gap: $unit*2

  &__cell
    position: relative
    opacity: 0

    &::before,
    &::after
      content: ''
      position: absolute
      left: 0
      bottom: 0
      width: 100%
      height: calc(100% - #{$unit*2})
      clip-path: polygon(0 0, 100% 100%, 0 100%)
      background: linear-gradient(to right, pink, orange, yellow)

    &::after
      top: 0
      bottom: unset
      background: linear-gradient(to right, pink, orange, yellow)
      clip-path: polygon(0 0, 100% 100%, 100% 0)


  &.active &__cell
    animation-name: shimmer
    animation-duration: 100ms
    animation-fill-mode: both
    animation-iteration-count: 1
    animation-timing-function: ease


@keyframes shimmer
  0%, 100%
    opacity: 0
  75%
    opacity: 0.15
</style>
