<template lang='pug'>
div(class='container-auth')

  div(class='auth')

    AuthForm(class='auth__form')

    //- div(
    //-   v-html='html'
    //- )
</template>


<script>
import { mapState, mapActions } from 'vuex'
import AuthForm from '~comp/AuthForm.vue'


export default {
  components: {
    AuthForm
  },
  props: {},
  data () {
    return {
      html: ''
    }
  },
  computed: {
    ...mapState({
      // authUser: state => state.auth.authUser
    })
  },
  watch: {
    authUser () {
      // this.authUser ? this.$router.replace({ name: 'account' }) : null
    }
  },
  methods: {
    ...mapActions({
      signIn: 'auth/signIn'
    })
  },
  async created () {
    this.html = await this.signIn()
  }
}
</script>


<style lang='sass' scoped>
.container-auth
  display: flex

.auth
  position: relative
  width: 100%
  display: grid
  justify-content: center
  align-content: center

  &::before
    content: ''
    position: absolute
    z-index: -1
    border-left: 100vw solid #f8f8f8
    border-bottom: calc(100vh - #{$unit*6}) solid transparent


</style>
