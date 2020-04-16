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
        class='account-navigation__link'
      )
        Icon(
          :icon='item.icon'
          class='account-navigation__icon'
        )
        | {{ item.text }}
    li(
      class='account-navigation__item'
    )
      a(
        @click='signOut'
        class='account-navigation__link'
      )
        Icon(
          :icon='signOutMenu.icon'
          class='account-navigation__icon'
        )
        | {{ signOutMenu.text }}
</template>

<script>
import { mapActions } from 'vuex'
import Icon from '~/components/elements/Icon.vue'
import IconOrders from '~/assets/svg/icon-orders.svg'
import IconLogout from '~/assets/svg/icon-logout.svg'
import IconLock from '~/assets/svg/icon-lock.svg'
import IconAddress from '~/assets/svg/icon-address.svg'
import IconPersonalInfo from '~/assets/svg/icon-personal-info.svg'
import IconHeart from '~/assets/svg/icon-heart.svg'

export default {
  components: {
    Icon
  },
  props: {},
  data () {
    return {
      menu: [
        {
          text: 'Orders',
          to: '/account/orders',
          icon: IconOrders
        },
        {
          text: 'Favorites',
          to: '/account/orders',
          icon: IconHeart
        },
        {
          text: 'Personal Data',
          to: '/account/personalData',
          icon: IconPersonalInfo
        },
        {
          text: 'Change Password',
          to: '/account/orders',
          icon: IconLock
        },
        {
          text: 'Addresses',
          to: '/account/orders',
          icon: IconAddress
        }
      ],
      signOutMenu: {
        text: 'Sign Out',
        icon: IconLogout
      }
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

  &__title
    padding: $unit*2 0
    font-size: $fs1
    font-weight: $fw-bold

  &__list
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr))
    grid-gap: $unit*2

  &__item

  &__link
    @extend %flex--column-center
    min-height: $unit*20
    padding: $unit*2
    border-radius: $unit*0.5
    background: $pri-cl
    color: $blue

    &:hover
      background: $blue
      color: $white

  &__icon
    margin-bottom: $unit
</style>
