<template lang='pug'>
div(class='container-detail')

  div(class='detail')

    h2(class='detail__title') {{ product.title }}
    p(class='detail__price') ${{ variant.price }}
    p(
      v-show='variant.compareAtPrice > variant.price'
      class='detail__compare-at-price'
    ) ${{ variant.compareAtPrice }}


</template>


<script>

export default {
  components: {},
  props: {
    product: {
      type: Object,
      required: true
    },
    variant: {
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
.container-detail

.detail
  display: grid
  grid-template-rows: repeat(2, auto)
  grid-template-columns: min-content auto
  grid-gap: $unit*2 $unit*3

  &__title
    grid-row: 1 / 2
    grid-column: 1 / -1
    font-size: $fs1
    color: $black

  &__price
    grid-row: 2 / 3
    grid-column: 1 / 2

  &__compare-at-price
    grid-row: 2 / 3
    grid-column: 2 / -1
    text-decoration: line-through
    color: $grey


</style>
