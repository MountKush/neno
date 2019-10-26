<template lang='pug'>
div(class='container-collection-products')

  section(class='collection-products')

    h2(class='collection-products__title') {{ collection.title }}

    router-link(
      :to='{ name: "collection", params: { id: collection.id } }'
      class='collection-products__link'
    ) See More

    Carousel(
      class='collection-products__list'
      :paginationEnabled='false'
      :perPageCustom='[[0, 2], [520, 3], [1024, 4]]'
      :scrollPerPage='false'
      :speed='500'
    )
      Slide(
        v-for='(product, index) in collection.products.filter((a, i) => i <= 8)'
        :key='product.id'
        class='collection-products__item'
      )
        ProductCard(
          :product='product'
          class='collection-products__product'
        )
</template>


<script>
import { Carousel, Slide } from 'vue-carousel'
import ProductCard from '~comp/ProductCard.vue'


export default {
  components: {
    ProductCard,
    Carousel,
    Slide
  },
  props: {
    collection: {
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
.container-collection-products
  @extend %container

.collection-products
  @extend %content
  display: grid
  grid-template-rows: repeat(2, auto)
  grid-template-columns: auto min-content
  grid-gap: $unit*3

  &__title
    font-size: $fs
    font-weight: bold
    white-space: nowrap
    line-height: 1
    +mq-s
      font-size: $fs1

  &__link
    align-self: end
    color: $blue
    white-space: nowrap
    font-size: 14px
    +mq-s
      font-size: $fs

  &__list
    grid-column: 1 / -1

  &__item
    padding: 0 $unit
</style>
