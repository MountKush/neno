<template lang='pug'>
div(class='container-login')
  div(class='login')

    header(class='login__header')
      h2(class='login__title') LOG IN

    form(
      @submit.prevent='signIn'
      class='login__form'
    )
      BaseInput(
        v-model='email'
        label='Email'
        placeholder='Email address'
      )
      BaseInput(
        v-model='password'
        label='Password'
        placeholder='Password'
        type='password'
      )
      router-link(
        to='/account/reset'
        class='login__form-forgot-password'
      ) Forgot password?
      BaseButton(
        text='LOG IN'
      )

    footer(class='login__footer')
      p Not a member?&nbsp;
        router-link(
          to='/account/register'
        ) Join now.
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
  mounted () {
    this.isAuthUser ? this.$router.replace({ name: 'account' }) : null
  },
  methods: {
    async signIn () {
      try {
        const res = await this.signInWithEmailAndPassword({
          email: this.email,
          password: this.password
        })
        this.$router.push({ name: 'account' })
      }
      catch (e) {
        // console.error(e)
        // this.handleError({ errorMessage: e })
      }
    },

    ...mapActions({
      signInWithEmailAndPassword: 'auth/signIn'
    })
  }
}
</script>


<style lang='sass' scoped>
.container-login


.login
  max-width: $unit*50
  display: grid
  grid-gap: $unit*3
  margin: $unit*5 auto

  &__header
    text-align: center

  &__title
    font-size: $fs1
    font-weight: $fw-bold

  &__form
    display: grid
    grid-gap: $unit*2

    &-forgot-password
      text-align: right
      color: $dark

  &__footer
    text-align: center
</style>
