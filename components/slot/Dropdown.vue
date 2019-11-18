<template lang='pug'>
div(
  v-show='showDropdown'
  :class='{ active: showDropdown }'
  class='container-dropdown'
)
  div(class='dropdown')
    slot
</template>


<script>


export default {
  components: {},
  props: {
    showDropdown: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      eventType: 'click'
    }
  },
  computed: {},
  methods: {
    eventHandler (e) {
      const el = this.$refs.dropdown
      const isClickInside = el.contains(e.target)
      if (!isClickInside && this.showDropdown) this.$emit('closeDropdown')
    }
  },
  mounted () {
    // document.addEventListener(this.eventType, this.eventHandler)
  },
  beforeDestroy () {
    // document.removeEventListener(this.eventType, this.eventHandler)
  }
}
</script>


<style lang='sass' scoped>
.container-dropdown
  background: $white
  display: none

  &.active
    display: block


.dropdown

</style>
