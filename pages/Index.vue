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
        :blocks='section.blocks'
        :class='`shopify-section-${section.id}`'
      )
      ImageWithTextOverlay(
        v-if='section.type === "dynamic-hero"'
        :settings='section.settings'
        :blocks='section.blocks'
        :class='`shopify-section-${section.id}`'
      )
      FeaturedCollection(
        v-if='section.type === "dynamic-collection"'
        :settings='section.settings'
        :class='`shopify-section-${section.id}`'
      )
      ContentTiles(
        v-if='section.type === "dynamic-content-tiles"'
        :settings='section.settings'
        :blocks='section.blocks'
        :class='`shopify-section-${section.id}`'
      )
      Newsletter(
        v-if='section.type === "dynamic-newsletter"'
        :settings='section.settings'
        :class='`shopify-section-${section.id}`'
      )

  UserFeedback
</template>


<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import ImageWithText from '~comp/compositions/ImageWithText.vue'
import ImageWithTextOverlay from '~comp/compositions/ImageWithTextOverlay.vue'
import FeaturedCollection from '~comp/compositions/FeaturedCollection.vue'
import UserFeedback from '~comp/compositions/UserFeedback.vue'
import ContentTiles from '~comp/compositions/ContentTiles.vue'
import Newsletter from '~comp/compositions/Newsletter.vue'

export default {
  components: {
    ImageWithText,
    ImageWithTextOverlay,
    FeaturedCollection,
    UserFeedback,
    ContentTiles,
    Newsletter
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

</style>
