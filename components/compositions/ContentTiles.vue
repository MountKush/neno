<template lang='pug'>
div(class='container-content-tiles')
  div(class='content-tiles')

    ul(class='content-tiles__list')
      li(
        v-for='(tile, index) in tiles'
        :key='tile + index'
        class='content-tiles__item'
      )
        ContentTile(
          :tile='tile'
          class='content-tiles__tile'
        )
</template>


<script>
import ContentTile from '~comp/modules/ContentTile.vue'


export default {
  components: {
    ContentTile
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
    tiles () {
      return this.blocks.filter(block => block.type === 'tile')
    }
  },
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-content-tiles
  padding: $unit*4
  // background: $pri-cl

.content-tiles
  // @extend %content

  &__list
    display: grid
    grid-gap: $unit*4
    +mq-m
      grid-auto-flow: dense
      grid-template-columns: 1fr 1fr
      grid-auto-columns: 1fr 1fr

  &__item

  &__tile
    color: white
    height: 500px
    +mq-m
      // height: unset
      // min-height: 736px

</style>
