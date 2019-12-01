<template lang='pug'>
section(class='account-navigation')
  h2(class='account-navigation__title') Your Account
  ul(class='account-navigation__list')
    li(
      v-for='(item, index) in menu'
      :key='item + index'
      class='account-navigation__item'
    )
      router-link(
        :to='item.to'
        :class='{ active: index === 1 }'
        class='account-navigation__link'
      ) {{ item.text }}
    li(
      class='account-navigation__item'
    )
      a(
        @click='signOut'
        class='account-navigation__link'
      ) Sign Out
</template>


<script>
import { mapActions } from 'vuex'


export default {
  components: {},
  props: {},
  data () {
    return {
      menu: [
        {
          text: 'Orders',
          to: '/account/order'
        },
        {
          text: 'Favorites',
          to: '/account/order'
        },
        {
          text: 'Personal data',
          to: '/account/order'
        },
        {
          text: 'Change password',
          to: '/account/order'
        },
        {
          text: 'Addresses',
          to: '/account/order'
        }
      ]
    }
  },
  computed: {},
  methods: {
    ...mapActions({
      signOut: 'auth/signOut'
    })
  }
}
</script>


<style lang='sass' scoped>
.account-navigation
  padding: 0 $unit*2
  background: $white

  &__title
    padding: $unit*2 0
    font-weight: $fw-bold

  &__list
    display: grid
    grid-gap: $unit 0

  &__item

  &__link
    display: flex
    padding: $unit $unit*2
    border-radius: $unit*0.5

    &:hover
      background: $pri-cl

    &.active
      background: $pri-cl
      color: $blue

</style>
