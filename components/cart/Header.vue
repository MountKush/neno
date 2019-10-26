<template lang='pug'>
div(class='container-header')

  header(class='header')
    h2(class='header__title') Shopping Bag
    p(class='header__copy') Review of {{ lineItemsQuantityTotal }} item(s)

</template>


<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      lineItemsQuantityTotal: 'checkout/lineItemsQuantityTotal'
    })
  },
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-header

.header
  display: grid
  grid-gap: $unit 0
  justify-items: center

  &__title
    font-size: $fs1
    +mq-m
      font-size: $fs2

  &__copy

</style>
