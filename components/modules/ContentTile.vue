<template lang='pug'>
article(class='content-tile')
  a(
    target='_blank'
    class='content-tile__link'
  )
  HeroHeader(
    :title='tile.title'
    :text='tile.text'
    :buttons='buttons'
    class='content-tile__body'
  )

  //- display
  div(
    v-if='tile.image'
    class='content-tile__display'
  )
    figure(
      v-lazy:background-image='tile.image'
      class='content-tile__image'
    )
</template>


<script>
import HeroHeader from '~comp/modules/HeroHeader.vue'


export default {
  components: {
    HeroHeader
  },
  props: {
    tile: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {}
  },
  computed: {
    buttons () {
      return [
        {
          link: this.tile.buttonLink,
          label: this.tile.buttonLabel
        }
      ]
    }
  },
  methods: {}
}
</script>


<style lang='sass' scoped>
.content-tile
  display: grid
  grid-template-rows: auto 1fr
  grid-template-columns: 1fr
  // height: 100%
  // min-height: 520px
  background: $grey

  &__link
    grid-row: 1 / 3
    grid-column: 1 / 2
    position: relative
    z-index: 3

  &__body
    grid-row: 1 / 3
    grid-column: 1 / 2
    padding: $unit*10 0
    position: relative
    z-index: 4
    align-self: center

  &__display
    grid-row: 1 / 3
    grid-column: 1 / 2
    position: relative
    z-index: 1
    display: flex

  &__image
    display: block
    width: 100%
    height: 100%
    background-repeat: no-repeat
    background-position: center
    position: absolute
    top: 0

// override(s)
.no-shadow

  & .card__image
    box-shadow: unset


</style>
