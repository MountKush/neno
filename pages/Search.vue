<template lang='pug'>
div(
  class='container-search'
)
  div(
    v-if='settings'
    class='search'
  )
    Search(
      :settings='settings'
      class='search__products'
    )
</template>


<script>
import { mapGetters } from 'vuex'
import Search from '~comp/compositions/Search.vue'


export default {
  components: {
    Search
  },
  props: {},
  data () {
    return {}
  },
  computed: {
    settings () {
      const section = this.themeData.find(section => section.type === 'static-search')
      return section && section.settings
    },


    ...mapGetters({
      themeData: 'app/themeData'
    })
  },
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-search

.search
  display: grid
  grid-gap: $unit*5 0

  &__sort-filter
    grid-column: 1 / -1
    +mq(520)
      grid-column: unset
</style>
