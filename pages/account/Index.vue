<template lang='pug'>
div(class='account')
  AccountNavigation(class='account__navigation')
</template>

<script>
import { mapGetters } from 'vuex'
import AccountNavigation from '~comp/account/Navigation.vue'

export default {
  components: {
    AccountNavigation
  },
  data () {
    return {}
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
  background: $white

  &__announcement
    min-height: $unit*50
    background: $pri-cl

  &__navigation
</style>
