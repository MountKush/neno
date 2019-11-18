<template lang='pug'>
header(class='products-header')

  h1(class='products-header__title') {{ title }}

  div(class='products-header__buttons-container')
    //- button(class='products-header__filter-button')
    //-   span(class='products-header__filter-button-label') Filter
    //-   IconFilter(class='products-header__filter-button-icon')

    button(
      @click='$emit("openDrawer")'
      class='products-header__sort-by-button'
    )
      span(class='products-header__sort-by-button-label') Sort By
      IconSortBy(class='products-header__sort-by-button-icon')
</template>


<script>
import { mapMutations } from 'vuex'
import IconSortBy from '~/assets/svg/icon-sort-by.svg'
import IconFilter from '~/assets/svg/icon-filter.svg'


export default {
  components: {
    IconSortBy,
    IconFilter
  },
  props: {
    title: {
      type: String,
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
.products-header
  @extend %content
  display: flex
  justify-content: space-between
  align-items: center

  &__title
    font-weight: $fw-bold
    font-size: $fs1


  &__buttons-container
    display: flex

  &__filter-button,
  &__sort-by-button
    display: flex
    align-items: center
    min-height: $unit*5
    padding: 0 $unit
    background: transparent

    &-label
      margin-right: $unit

    &-icon
      width: $unit*2
      height: $unit*2
      user-select: none

  // &__filter-button-label
  //   display: none
  //   +mq-m
  //     display: block

  // &__sort-by-button
  //   display: none
  //   +mq-m
  //     display: flex
  //     margin-left: $unit*2
</style>
