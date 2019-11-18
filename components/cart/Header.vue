<template lang='pug'>
div(class='container-header')

  header(class='header')
    h2(class='header__title') Cart
    div(class='header__copy')
      p 0 Items
      span |
      p $0.00

</template>


<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-header

.header
  display: grid
  grid-gap: $unit 0
  justify-items: center
  +mq-m
    justify-items: start

  &__title
    font-size: $fs1
    font-weight: $fw-bold

  &__copy
    +mq-m
      display: none

</style>
