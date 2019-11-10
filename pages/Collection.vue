<template lang='pug'>
div(
  class='container-collection'
)
  div(
    v-if='settings'
    class='collection'
  )
    Products(
      :settings='settings'
      class='collection__products'
    )
</template>


<script>
import { mapGetters } from 'vuex'
import Products from '~comp/compositions/Products.vue'

export default {
  components: {
    Products
  },
  props: {},
  data () {
    return {}
  },
  computed: {
    settings () {
      const section = this.themeData.find(section => section.type === 'static-collection')
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
.container-collection

.collection
  display: grid
  grid-gap: $unit*5 0

  &__sort-filter
    grid-column: 1 / -1
    +mq(520)
      grid-column: unset
</style>
