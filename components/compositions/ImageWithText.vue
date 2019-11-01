<template lang='pug'>
section(class='container-text-columns')
  div(class='text-columns')
    HeroHeader(
      :title='settings.title'
      class='text-columns__header'
    )
    ul(class='text-columns__list')
      li(
        v-for='(block, index) in blocks'
        :key='block + index'
        class='text-columns__item'
      )
        div(class='text-columns__column')
          img(
            v-lazy='block.image'
            class='column__image'
          )
          h3(class='column__title') {{ block.title }}
          div(
            v-html='block.text'
            class='column__text'
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
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-text-columns

.text-columns
  @extend %content
  display: grid
  // grid-gap: $unit*10
  padding: $unit*7 0

  &__header
    display: none

  &__list
    display: grid
    grid-gap: $unit*5
    grid-template-columns: repeat(3, 1fr)

  &__item

  &__column
    max-width: 320px


.column

  &__image
    width: $unit*7
    height: $unit*7
    background: $pri-cl
    padding: $unit

  &__title
    font-weight: $fw-bold
    margin: $unit*2 0

  &__text


</style>
