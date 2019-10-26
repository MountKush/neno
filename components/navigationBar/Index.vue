<template lang='pug'>
div(
  class='container-navigation-bar'
)

  div(
    class='navigation-bar'
  )

    div(class='links')
      div(
        v-for='(link, index) in mainMenu'
        :key='link + index'
      )
        router-link(
          :to='{ path: link.url }'
          class='navigation-bar__search'
        )
          div {{ link.title }}

    //- //- hamburger
    //- Hamburger(
    //-   @handleClick='handleHamburgerClick'
    //-   :active='isHamburgerActive'
    //-   v-show='!isBack'
    //-   class='navigation-bar__hamburger'
    //- )
    //-
    //- //- go back
    //- a(
    //-   @click='handleGoBack'
    //-   :class='{ active: isBack }'
    //-   class='navigation-bar__back'
    //- )
    //-   IconChevron(class='navigation-bar__back-icon')
    //-   span(class='navigation-bar__back-copy') Back
    //-
    //- //- search
    //- router-link(
    //-   :to='{ name: "search" }'
    //-   class='navigation-bar__search'
    //- )
    //-   IconSearch(class='navigation-bar__search-icon')
    //-
    //- //- account
    //- router-link(
    //-   :to='{ name: "account" }'
    //-   class='navigation-bar__account'
    //- )
    //-   IconAccount(
    //-     class='navigation-bar__account-icon'
    //-   )
    //-
    //- //- shopping cart
    //- Bag(
    //-   class='navigation-bar__bag'
    //- )


</template>


<script>
import { mapGetters } from 'vuex'
// import Hamburger from '~comp/Hamburger.vue'
// import ShopLogo from '~comp/ShopLogo.vue'
// import Bag from '~comp/Bag.vue'
// import Account from '~comp/Account.vue'
// import IconSearch from '~/assets/svg/icon-search.svg'
// import IconAccount from '~/assets/svg/icon-account.svg'
// import IconChevron from '~/assets/svg/icon-chevron.svg'


export default {
  components: {
    // Hamburger,
    // ShopLogo,
    // Bag,
    // Account,
    // IconSearch,
    // IconAccount,
    // IconChevron
  },
  data () {
    return {}
  },
  computed: {
    // isHamburgerActive () {
    //   const { name } = this.route
    //   return name === 'menu'
    // },


    // isBack () {
    //   const { name } = this.route
    //   return name !== 'menu' && name !== 'index'
    // },
    //
    //
    ...mapGetters({
      mainMenu: 'app/mainMenu'
    })
  },
  methods: {
    // handleHamburgerClick () {
    //   const { name } = this.route
    //   name === 'menu' ? this.$router.push({ name: 'index' }) : this.$router.push({ name: 'menu' })
    // },
    //
    //
    // handleGoBack () {
    //   window.history.length > 1 ? this.$router.go(-1) : this.$router.push({ name: 'index' })
    // }
  }
}
</script>


<style lang='sass' scoped>
.container-navigation-bar
  position: sticky
  top: 0
  left: 0
  z-index: 99
  width: 100%
  background: rgba(255, 255, 255, 0.98)

.navigation-bar
  width: 90%
  height: inherit
  display: grid
  // grid-template-rows: auto
  // grid-template-columns: auto 1fr repeat(3, auto)
  align-items: center
  margin: 0 auto

  &__hamburger
    grid-row: 1 / 2
    grid-column: 1 / 2

  &__back
    position: relative
    grid-row: 1 / 2
    grid-column: 1 / 2
    width: $unit*5
    height: $unit*5
    display: flex
    // justify-content: center
    align-items: center
    visibility: hidden

    &-icon
      width: $unit*2
      height: $unit*2
      transform: rotate(-90deg)

    &-copy
      position: absolute
      top: 50%
      left: 75%
      transform: translate(-20%, -50%)
      opacity: .5
      transition: transform 150ms ease-in, opacity 150ms 100ms

    &.active
      visibility: visible

    &.active &-copy
      opacity: 1
      transform: translate(0, -50%)



  &__search,
  &__account
    width: $unit*5
    height: $unit*5
    grid-column: 3 / 4
    display: flex
    justify-content: center
    align-items: center

    &-icon
      width: $unit*3
      height: $unit*3

  &__account
    grid-column: 4 / 5

    &-icon
      width: 18px

  &__bag
    grid-column: 5 / 6

.links
  @extend %flex

</style>
