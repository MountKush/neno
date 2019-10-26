<template lang='pug'>
div(class='container-hero')

  BackgroundShimmer(class='hero--background-shimmer')

  div(class='hero')

    header(class='hero__header')

      div(class='hero__logo')
        IconLogo(class='hero__logo-svg')

      h1(
        v-if='header.title'
        class='hero__title'
      ) {{ header.title }}

      p(
        v-if='header.copy'
        class='hero__copy'
      ) {{ header.copy }}
</template>


<script>
import IconLogo from '~/assets/svg/icon-logo.svg'
import BackgroundShimmer from '~comp/BackgroundShimmer.vue'

export default {
  components: {
    IconLogo,
    BackgroundShimmer
  },
  props: {
    header: {
      type: Object
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
.container-hero
  @extend %container
  position: relative

.hero--background-shimmer
  position: absolute
  width: 100%
  height: 100%
  top: 0
  left: 0


.hero
  @extend %content
  min-height: 50vh
  display: grid
  align-items: center

  &__header
    display: grid
    justify-items: center
    align-items: center
    grid-gap: $unit

  &__logo

    &-svg
      width: $unit*4
      height: $unit*4

  &__title
    font-size: $fs1
    white-space: nowrap
    +mq-s
      font-size: $fs2

</style>
