<template lang='pug'>
component(
  :is='icon'
  class='icon'
)
</template>

<script>
export default {
  components: {},
  props: {
    icon: {
      type: Object,
      required: true
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
.icon
  width: $unit*3
  fill: currentColor
</style>
