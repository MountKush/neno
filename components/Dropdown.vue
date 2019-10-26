<template lang='pug'>
div(class='container-dropdown')

  div(
    class='dropdown'
  )

    ul(class='dropdown__list')
      li(
        tabindex='0'
        class='dropdown__item'
      )
        IconSortBy(class='dropdown__icon')
        a(
          class='dropdown__option dropdown__option--selected'
        ) {{ dropdown.selected }}

      li(
        v-for='(option, index) in dropdown.options'
        :key='option + index'
        class='dropdown__item'
      )
        a(
          @click='$emit("select", option)'
          class='dropdown__option'
        ) {{ option }}
        IconCheckMark(
          v-show='option === dropdown.selected'
          class='dropdown__icon'
        )


</template>


<script>
import IconSortBy from '~/assets/svg/icon-sort-by.svg'
import IconCheckMark from '~/assets/svg/icon-check-mark.svg'


export default {
  components: {
    IconSortBy,
    IconCheckMark
  },
  props: {
    dropdown: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      open: false
    }
  },
  computed: {},
  methods: {
    toggleOpen () {
      this.open = !this.open
    }
  }
}
</script>


<style lang='sass' scoped>
.container-dropdown

.dropdown
  background: $white

  &__list
    display: grid
    grid-auto-rows: $unit*5
    grid-gap: $unit*2 0
    align-items: stretch

  &__item
    display: flex
    align-items: center
    cursor: pointer

  &__item:not(:first-child)
    opacity: 0
    visibility: hidden
    transition: visibility 50ms 50ms, opacity 50ms 50ms
    justify-content: space-between

  &__icon
    width: $unit*2
    height: $unit*2
    pointer-events: none

  &__option
    width: 100%
    height: 100%
    display: flex
    align-items: center

    &--selected
      margin: 0 0 0 $unit*2

  &__item:focus
    outline: none
    pointer-events: none
    cursor: pointer

  &__item:focus ~ &__item
    opacity: 1
    visibility: visible


</style>
