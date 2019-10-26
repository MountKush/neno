<template lang='pug'>
section(class='container')
  div(class='hero')
    HeroHeader(
      :title='settings.title'
      :text='settings.text'
      :buttonText='settings.buttonText'
      :buttonLink='settings.buttonLink'
      class='hero__header'
    )
    img(
      v-lazy='settings.image'
      class='hero__image'
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
.container

.hero
  display: grid
  align-items: center
  +mq-m
    grid-template-columns: repeat(2, 1fr)

  &__header



  &__image
    width: 100%

</style>
