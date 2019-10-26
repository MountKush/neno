<template lang='pug'>
div
  account
</template>


<script>
import Account from '~comp/account/Index.vue'
import { auth } from '~/firebase'


export default {
  components: {
    Account
  },
  data () {
    return {}
  },
  beforeRouteEnter (to, from, next) {
    const authUser = auth().currentUser
    authUser && !authUser.isAnonymous ? next() : next({ name: 'auth' })
  }
}
</script>


<style lang='sass' scoped>
.container



</style>
