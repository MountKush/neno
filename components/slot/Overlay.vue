<template lang='pug'>
div(
  :class='{ "is-open": isOpen }'
  class='container-overlay'
)
  slot(name='header')
  div(
    v-scroll-lock='isOpen'
    class='overlay__content'
  )
    div(
      @click='closeDrawer'
      class='overlay__backdrop'
    )
    div(class='overlay__default-slot')
      slot
</template>


<script>
import { mapState, mapMutations } from 'vuex'

export default {
  components: {},
  props: {
    drawerId: {
      type: String,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {
    isOpen () {
      return this.drawer === this.drawerId
    },


    ...mapState({
      drawer: state => state.app.drawer
    })
  },
  methods: {
    ...mapMutations({
      closeDrawer: 'app/CLOSE_DRAWER'
    })
  }
}
</script>


<style lang='sass' scoped>
.container-overlay
  position: fixed
  z-index: 200
  top: 100%
  left: 0
  width: 100vw
  height: 100%
  display: flex
  flex-direction: column
  overflow: hidden
  background: $white
  transition: transform 150ms ease-out

  &.is-open
    transform: translateY(-100%)

.overlay

  &__content
    position: relative
    overflow-y: auto
    width: 100%
    flex: 1 1 auto

  &__backdrop
    position: absolute
    z-index: 1
    top: 0
    left: 0
    right: 0
    bottom: 0

  &__default-slot
    z-index: 2

</style>
