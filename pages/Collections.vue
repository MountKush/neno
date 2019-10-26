<template lang='pug'>
div(class='container-collections')

  div(class='collections')

    Hero(
      :header='hero.header'
      class='collections__hero'
    )

    ul(class='collections__list')
      li(
        v-for='(collection, key, index) in collections'
        :key='collection.id'
        class='collections__item'
      )
        CollectionProducts(
          :collection='collection'
          class='collections__collection-products'
        )

</template>


<script>
import { mapState } from 'vuex'
import Hero from '~comp/Hero.vue'
import CollectionProducts from '~comp/CollectionProducts.vue'


export default {
  components: {
    Hero,
    CollectionProducts
  },
  props: {},
  data () {
    return {
      hero: {
        header: {
          title: 'Shop All Collections',
          copy: 'Curated pieces, just for you'
        }
      }
    }
  },
  computed: {
    ...mapState({
      collections: state => state.catalog.collections
    })
  },
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-collections


.collections,
.collections__list
  display: grid
  grid-gap: $unit*5

</style>
