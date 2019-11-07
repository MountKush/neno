<template lang='pug'>
Overlay(
  :drawerId='"predictive-search"'
  class='container-predictive-search'
)
  template(v-slot:default)
    div(class='predictive-search')
      h3 Top Suggestions
      ul(
        class='predictive-search__list'
      )
        li(
          v-for='(product, index) in predictiveSearch.products'
          :key='product + index'
          class='predictive-search__item'
        )
          router-link(
            :to='product.url'
            class='predictive-search__product'
          )
            img(
              v-lazy='product.image'
              class='predictive-search__image'
            )
            div(class='predictive-search__content-wrapper')
              div {{ product.title }}
              div {{ product.vendor }}
              div {{ product.price }}
</template>


<script>
import { mapState } from 'vuex'
import Overlay from '~comp/slot/Overlay.vue'


export default {
  components: {
    Overlay
  },
  props: {},
  data () {
    return {}
  },
  computed: {
    ...mapState({
      predictiveSearch: state => state.app.predictiveSearch
    })
  },
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-predictive-search
  height: calc(100% - #{$unit*7})
  top: unset
  bottom: 100%
  z-index: 49
  background: rgba(34, 34, 34, 0.2)

  &.is-open
    transform: translateY(calc(100% + #{$unit*7}))

.predictive-search
  display: grid
  grid-gap: $unit*5
  background: $white
  padding: $unit*2
  margin-left: auto
  width: 75%
  max-width: 320px

  &__list
    display: grid
    grid-gap: $unit*2

  &__product
    display: flex

  &__image
    width: $unit*7
    height: $unit*7
    object-fit: cover

  &__content-wrapper


</style>
