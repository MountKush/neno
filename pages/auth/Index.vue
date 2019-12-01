<template lang='pug'>
div(class='container-auth')
  div(class='auth')

    router-view(class='auth__view')
</template>


<script>
import { mapGetters, mapActions } from 'vuex'


export default {
  components: {},
  props: {},
  data () {
    return {
      email: '',
      password: '',
    }
  },
  computed: {
    ...mapGetters({
      isAuthUser: 'auth/isAuthUser'
    })
  },
  watch: {
    isAuthUser () {
      this.isAuthUser ? this.$router.replace({ name: 'account' }) : null
    }
  },
  methods: {},
  mounted () {
    this.isAuthUser ? this.$router.replace({ name: 'account' }) : null
  }
}
</script>


<style lang='sass' scoped>
.container-auth

.auth

  &__view


</style>
