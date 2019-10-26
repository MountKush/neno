<template lang='pug'>
div(class='container-controller')

  div(class='controller')

    a(
      v-for='(item, index) in sections'
      :key='item + index'
      @click='$emit("handleClick", item)'
      :class='{ active: activeSection === item }'
      class='controller__button'
    ) {{ item }}


</template>


<script>

export default {
  components: {},
  props: {
    activeSection: {
      type: String
    },
    sections: {
      type: Array,
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
.container-controller

.controller
  display: grid
  grid-auto-flow: column

  &__button
    position: relative
    padding: $unit*2 0
    text-align: center

    &::before
      content: ''
      position: absolute
      width: 100%
      height: 1px
      top: 100%
      left: 0
      background: $grey

    &.active

      &::before
        background: $black


</style>
