<template lang='pug'>
div(class='container-login')
  div(class='login')

    header(class='login__header')
      h2(class='login__title') RESET PASSWORD

    form(
      @submit.prevent='resetPassword'
      class='login__form'
    )
      BaseInput(
        v-model='password'
        label='Password'
        placeholder='Password'
        type='password'
      )
      BaseButton(
        text='CREATE PASSWORD'
      )

    footer(class='login__footer')
      p Or return to&nbsp;
        router-link(
          to='/account/login'
        ) Log in.
</template>


<script>
import { mapActions } from 'vuex'


export default {
  components: {},
  props: {},
  data () {
    return {
      password: ''
    }
  },
  computed: {},
  methods: {
    async resetPassword () {
      try {
        const res = await this.customerResetByUrl({
          resetUrl: window.location.href,
          password: this.password
        })
        console.log('reset password')
      }
      catch (e) {
        // console.error(e)
        // this.handleError({ errorMessage: e })
      }
    },


    ...mapActions({
      customerResetByUrl: 'auth/customerResetByUrl'
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
