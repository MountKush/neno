<template lang='pug'>
header(class='hero-header')
  h3(class='hero-header__title') {{ title }}
  div(
    v-html='text'
    class='hero-header__text'
  )
  router-link(
    v-if='showViewAll'
    :to='buttonLink'
    class='hero-header__link'
  ) {{ buttonLabel }}
</template>


<script>


export default {
  components: {},
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    showViewAll: {
      type: Boolean,
      default: false
    },
    buttonLabel: {
      type: String,
      default: ''
    },
    buttonLink: {
      type: String,
      default: ''
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
.hero-header
  @extend %content
  display: grid
  grid-template-columns: 1fr auto
  grid-gap: $unit*.5
  max-width: unset

  &__title
    grid-row: 1 / 2
    grid-column: 1 / 2
    font-size: $fs1
    font-weight: $fw-bold

  &__text
    grid-row: 2 / 3
    grid-column: 1 / 2

  &__link
    grid-row: 1 / 2
    grid-column: 2 / 3
    background: $pri-cl
    padding: $unit $unit*2
    border-radius: $unit*2
    color: $blue
</style>
