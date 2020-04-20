<template lang='pug'>
div(class='account')
  ViewHeader(
    v-show='$route.name !== "account"'
    :title='viewNames[$route.name]'
    secondaryActionLabel='Back'
    @secondaryActionClick='routerGoBack'
    class='account__header'
  )
  div(class='account__content-container')
    AccountNavigation(
      v-if='$route.name === "account"'
      class='account__navigation'
    )
    router-view(
      class='account__view'
    )
</template>

<script>
import { mapGetters } from 'vuex'
import useRouterBack from '~/compositions/useRouterBack'
import ViewHeader from '~/components/modules/ViewHeader.vue'
import AccountNavigation from '~comp/account/Navigation.vue'

export default {
  components: {
    ViewHeader,
    AccountNavigation
  },
  setup() {
    const { routerGoBack } = useRouterBack()
    return { routerGoBack }
  },
  data () {
    return {
      viewNames: {
        'account-addresses': 'Addresses',
        'account-addresses-new': 'New Address',
        'account-addresses-id': 'Address',
        'account-orders': 'Orders',
        'account-orders-id': 'Order',
        'account-password': 'New Password',
        'account-personal-data': 'Personal Data'
      }
    }
  },
  computed: {
    ...mapGetters({
      isAuthUser: 'auth/isAuthUser'
    })
  },
  watch: {
    isAuthUser () {
      this.isAuthUser ? null : this.$router.replace({ name: 'auth' })
    }
  },
  mounted () {
    this.isAuthUser ? null : this.$router.replace({ name: 'auth' })
  }
}
</script>

<style lang='sass' scoped>
.account
  @extend %container
  padding-top: 0
  display: grid
  grid-template-rows: auto 1fr

  &__header
    padding: 0 $unit

  &__content-container
    max-width: 1080px
    width: 100%
    margin: $unit*5 auto

  &__navigation

  &__view
</style>
