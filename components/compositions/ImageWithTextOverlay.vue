<template lang='pug'>
section(class='container-hero')
  div(
    v-lazy:background-image='settings.image'
    :style='{ backgroundPosition: settings.alignment }'
    :class='classObject'
    class='hero'
  )
    HeroHeader(
      :title='settings.title'
      :text='settings.text'
      :buttons='buttons'
      class=''
    )
</template>


<script>
import { mapGetters } from 'vuex'
import HeroHeader from '~comp/modules/HeroHeader.vue'


export default {
  components: {
    HeroHeader
  },
  props: {
    settings: {
      type: Object,
      required: true
    },
    blocks: {
      type: Array,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {
    buttons () {
      return this.blocks.filter(block => block.type === 'button')
    },
    classObject () {
      return {
        [`u-height--${this.settings.heroSize}`]: true,
        [`u-layout--${this.settings.heroLayout}`]: true
      }
    }
  },
  methods: {}
}
</script>


<style lang='sass' scoped>
.container

.hero
  @extend %flex--column-center
  background: $pri-cl

.u-height

  &--x-small
    height: $unit*20

  &--small
    height: $unit*40

  &--medium
    height: $unit*60

  &--large
    height: $unit*80

  &--x-large
    height: $unit*100

.u-layout

  &--full_width


  &--fixed_width
    @extend %content

</style>
