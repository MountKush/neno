<template lang='pug'>
main(class='container-index')

  div(class='index')
    div(
      v-for='(section, index) in themeData'
      :key='section + index'
    )
      ImageWithText(
        v-if='section.type === "dynamic-feature-row"'
        :settings='section.settings'
      )
      ImageWithTextOverlay(
        v-if='section.type === "dynamic-hero"'
        :settings='section.settings'
        :blocks='section.blocks'
      )
      FeaturedCollection(
        v-if='section.type === "dynamic-collection"'
        :settings='section.settings'
      )
</template>


<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import ImageWithText from '~comp/compositions/ImageWithText.vue'
import ImageWithTextOverlay from '~comp/compositions/ImageWithTextOverlay.vue'
import FeaturedCollection from '~comp/compositions/FeaturedCollection.vue'


export default {
  components: {
    ImageWithText,
    ImageWithTextOverlay,
    FeaturedCollection
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      themeData: 'app/themeData'
    })
  },
  methods: {}
}
</script>

<style lang='sass' scoped>
.container-index

.index
  display: grid
  grid-gap: $unit*5 0
  +mq-m
    // grid-gap: $unit*20 0

</style>
