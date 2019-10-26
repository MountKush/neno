<template lang='pug'>
div(class='container-collection-block')

  div(
    :class='{ reverse }'
    class='collection-block'
  )

    header(class='collection-block__header')
      h3(class='collection-block__title') {{ collection.title }}
      //- p(class='collections__copy') {{ collection.description }}
      router-link(
        :to='{ name: "collection", params: { id: collection.id } }'
        class='collection-block__link'
      ) Shop Collection

    router-link(
      :to='{ name: "collection", params: { id: collection.id } }'
      class='collection-block__collection'
    )
      Photo(
        :image='{ src: collection.image.src, aspectRatio: "0 0 1 1" }'
        class='collection-block__image'
      )

    ProductCard(
      v-for='(product, index) in collection.products.filter((e, i) => i < 2)'
      :key='product.id + index'
      :product='product'
      class='collection-block__product'
    )

</template>


<script>
import Photo from '~comp/Photo.vue'
import ProductCard from '~comp/ProductCard.vue'


export default {
  components: {
    Photo,
    ProductCard
  },
  props: {
    collection: {
      type: Object,
      required: true
    },
    reverse: {
      type: Boolean,
      default: false
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
.container-collection-block

.collection-block
  display: grid
  grid-template-rows: repeat(4, auto)
  grid-template-columns: repeat(2, auto)
  grid-gap: $unit*3 0
  +mq-xs
    grid-template-rows: repeat(3, auto)
    grid-gap: $unit*5 $unit*3
  +mq-s
    grid-gap: $unit*5
  +mq-m
    grid-template-rows: repeat(3, auto)
    grid-template-columns: repeat(4, 1fr)

  &__header
    grid-row: 1 / 2
    grid-column: 1 / -1
    display: grid
    grid-gap: $unit*2 0
    justify-items: center

    +mq-m
      grid-row: 1 / 2
      grid-column: 1 / 3

  &__title
    font-size: $fs2
    line-height: 1
    text-align: center

  &__copy
    text-align: center

  &__link
    text-decoration: underline

  &__collection
    grid-row: 2 / 3
    grid-column: 1 / -1
    align-self: end
    +mq-m
      grid-row: 1 / 4
      grid-column: 3 / 5

  &__image


  &__product
    grid-row: 3 / 4
    grid-column: 1 / -1
    align-self: end
    +mq-xs
      grid-row: 3 / 4
      grid-column: 1 / 2
    +mq-m
      grid-row: 2 / 4
      grid-column: 1 / 2

    &:last-child
      grid-row: 4 / 5
      +mq-xs
        grid-row: 3 / 4
        grid-column: 2 / 3
      +mq-m
        grid-row: 2 / 4
        grid-column: 2 / 3


  &.reverse

    & .collection-block__header
      +mq-m
        grid-row: 1 / 2
        grid-column: 3 / 5

    & .collection-block__collection
      +mq-m
        grid-row: 1 / 4
        grid-column: 1 / 3

    & .collection-block__product
      +mq-m
        grid-row: 2 / 4
        grid-column: 3 / 4

      &:last-child
        +mq-m
          grid-row: 2 / 4
          grid-column: 4 / 5

</style>
