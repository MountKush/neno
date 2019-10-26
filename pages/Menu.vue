<template lang='pug'>
div(class='container-menu')

  div(class='menu')

    ul(class='menu__list')
      li(
        v-for='(item, index) in menuLinks'
        :key='item.name + index'
        class='menu__item'
      )
        a(
          @click='handleNavigation({ name: item.name })'
          @mouseover.native='changePaletteColor(item.color)'
          class='menu__link'
        ) {{ item.text }}
          span(
            :style='{ backgroundColor: paletteColor }'
            class='menu__link-strike'
          )
</template>


<script>


export default {
  components: {},
  props: {},
  data () {
    return {
      menuLinks: [
        { text: 'Home', name: 'index', color: '#5a7fe6' },
        { text: 'Products', name: 'products', color: '#ff87a0' },
        { text: 'Collections', name: 'collections', color: '#ece671' },
        // { text: 'The Culture', name: 'index', color: '#ffcfe2' },
        { text: 'FAQ', name: 'faq', color: '#ff7caa' }
      ],
      paletteColor: '#ffe1e7'
    }
  },
  computed: {},
  methods: {
    changePaletteColor (color) {
      this.paletteColor = color
    },


    handleNavigation ({ name }) {
      console.log('name: ', name)
      this.$router.replace({ name })
    }
  }
}
</script>


<style lang='sass' scoped>
.container-menu
  margin-left: 12.5%

.menu
  height: calc(100vh - 40px)
  display: grid
  grid-template-rows: 1fr
  grid-template-columns: minmax(auto, 1fr) 1fr
  grid-gap: 0 $unit*3
  align-items: center
  +mq-m
    height: 100vh

  &__list
    grid-row: 1 / 2
    grid-column: 1 / 3
    display: grid
    grid-gap: $unit*5
    +mq-m
      grid-column: 1 / 2

  &__item
    overflow: hidden

  &__link
    position: relative
    z-index: 2
    padding-right: $unit
    font-size: $fs2
    background: $white
    +mq-m
      background: unset

    &-strike
      position: absolute
      z-index: 3
      width: 105%
      height: $unit
      top: 50%
      left: 0
      opacity: 0
      pointer-events: none
      transform: translate(-100%, -50%)
      transition: transform 150ms ease-out
      +mq-m
        z-index: -1

    &:hover &-strike
      opacity: 0.5
      transform: translate(10%, -50%)
</style>
