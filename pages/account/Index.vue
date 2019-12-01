<template lang='pug'>
div(class='container-account')
  div(class='account')
    AccountNavigation(class='account__navigation')
    router-view(class='account__view')
</template>


<script>
import AccountNavigation from '~comp/account/Navigation.vue'
import { mapGetters } from 'vuex'


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
.container-account
  background: $pri-cl

.account
  display: grid
  grid-auto-flow: column
  grid-template-columns: $unit*30 1fr

  &__navigation
    position: sticky
    top: $unit*8
    height: calc(100vh - #{$navigation-bar} - #{$unit*2})
    margin: $unit

  &__view
    min-height: calc(100vh - #{$navigation-bar} - #{$unit*2})
    margin: $unit $unit $unit 0
    background: $white

</style>
