<template lang='pug'>
div(class='container')

  div(class='featured-collection')
    SectionHeader(
      :title='settings.title'
      :text='settings.collection.description'
      :showViewAll='settings.showViewAll'
      buttonLabel='See all'
      :buttonLink='settings.collection.url'
    )
    Slider(class='featured-collection__slider')
      ProductCard(
        v-for='(product, index) in settings.collection.products'
        :key='product + index'
        :product='product'
        class='featured-collection__card'
      )
</template>


<script>
import SectionHeader from '~comp/modules/SectionHeader.vue'
import ProductsGrid from '~comp/modules/ProductsGrid.vue'
import Slider from '~comp/slot/Slider.vue'
import ProductCard from '~comp/ProductCard.vue'


export default {
  components: {
    SectionHeader,
    ProductsGrid,
    Slider,
    ProductCard
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
  padding: $unit*7 0

.featured-collection
  display: grid
  grid-gap: $unit*5

  &__slider
    background: $white

  &__card
    width: 320px

</style>
