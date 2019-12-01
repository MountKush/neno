<template lang='pug'>
div(class='container-login')
  div(class='login')

    header(class='login__header')
      h2(class='login__title') BECOME A MEMBER

    form(
      @submit.prevent='signUp'
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
      BaseInput(
        v-model='firstName'
        label='First Name'
        placeholder='First name'
      )
      BaseInput(
        v-model='lastName'
        label='Last Name'
        placeholder='Last name'
      )
      BaseInput(
        v-model='dateOfBirth'
        label='Date of Birth'
        placeholder='Date of birth'
      )
      div
        input(
          type='checkbox'
        )
        p Sign up for emails to hear all the lastest from Feed Me Sugar.

      BaseButton(
        text='CREATE ACCOUNT'
      )

    footer(class='login__footer')
      p Already a member?&nbsp;
        router-link(
          to='/account/login'
        ) Sign in.
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
      firstName: '',
      lastName: '',
      dateOfBirth: ''
    }
  },
  computed: {},
  methods: {
    async signUp () {
      try {
        await this.createUserWithEmailAndPassword({
          email: this.email,
          password: this.password
        })
      }
      catch (e) {
        // console.error(e)
        // const errorMessage = 'Sign up failed'
        // this.handleError({ errorMessage })
      }
    },


    ...mapActions({
      createUserWithEmailAndPassword: 'auth/createCustomer'
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

  &__footer
    text-align: center
</style>
