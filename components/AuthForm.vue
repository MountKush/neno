<template lang='pug'>
div(class='container-auth-form')

  form(
    @submit.prevent='validateForm'
    class='auth-form'
  )

    header(
      class='auth-form__header'
    )
      a(
        @click='setActiveView("sign up")'
        :class='{ active: activeView === "sign up" }'
        class='auth-form__sign-up'
      ) Sign Up
      a(
        @click='setActiveView("sign in")'
        :class='{ active: activeView === "sign in" }'
        class='auth-form__sign-in'
      ) Sign In


    //- sign in card
    div(class='auth-form__wrapper')

      //- email
      div(class='auth-form__email')
        IconEmail(
          :class='{ invalid: errors.has("email") }'
          class='auth-form__svg'
        )
        input(
          v-model='email'
          v-validate='"required|email"'
          name='email'
          placeholder='Email'
          class='auth-form__input'
        )

      //- password
      div(
        :class='{ visible: activeView === "sign in" || activeView === "sign up"  }'
        class='auth-form__password'
      )
        IconPassword(
          :class='{ invalid: errors.has("password") }'
          class='auth-form__svg'
        )
        input(
          v-model='password'
          v-validate='activeView === "reset password" ? "" : "required|min:6"'
          name='password'
          type='password'
          placeholder='Password'
          class='auth-form__input'
        )

      //- recaptcha
      div(
        :class='{ visible: activeView === "reset password" }'
        class='auth-form__recaptcha'
      )
        a(
          @click='toggleRecaptcha'
          class='auth-form__recaptcha-checkbox'
        )
          IconCheckMark(
            v-show='recaptcha'
            class='auth-form__svg'
          )
        p(class='auth-form__recaptcha-copy') I'm Not A Robot
        IconRecaptcha(class='auth-form__svg')

      //- forgot password
      a(
        @click='setActiveView("reset password")'
        :class='{ visible: activeView === "sign in" }'
        class='auth-form__password-reset'
      ) Forgot password?

      //- submit
      input(
        :class='{ valid: (email && recaptcha && activeView === "reset password" && !errors.has("email")) || (email && password && !errors.has("email") && !errors.has("password")) }'
        value='enter'
        type='submit'
        class='auth-form__submit'
      )

      //- providers
      div(
        :class='{ visible: activeView === "sign in" || activeView === "sign up" }'
        class='auth-form__providers'
      )
        p(class='auth-form__copy') or
        a(
          @click='signInWithFacebook'
          class='auth-form__icon'
        )
          IconFacebook(class='auth-form__svg')
        a(
          @click='signInWithGoogle'
          class='auth-form__icon'
        )
          IconGoogle(class='auth-form__svg')
        a(
          @click='signInWithTwitter'
          class='auth-form__icon'
        )
          IconTwitter(class='auth-form__svg')


    //- send status
    div(
      :class='{ visible: sending }'
      class='auth-form__send-status'
    )


    //- error status
    div(
      :class='{ visible: error }'
      class='auth-form__error-status'
    )
      h3(class='auth-form__error-status-title') Error Message
      p(class='auth-form__error-status-copy') {{ errorMessage }}


</template>


<script>
import { mapActions } from 'vuex'
import IconEmail from '~/assets/svg/icon-email.svg'
import IconPassword from '~/assets/svg/icon-password.svg'
import IconGoogle from '~/assets/svg/icon-google.svg'
import IconFacebook from '~/assets/svg/icon-facebook.svg'
import IconTwitter from '~/assets/svg/icon-twitter.svg'
import IconRecaptcha from '~/assets/svg/icon-recaptcha.svg'
import IconCheckMark from '~/assets/svg/icon-check-mark.svg'


export default {
  components: {
    IconEmail,
    IconPassword,
    IconGoogle,
    IconFacebook,
    IconTwitter,
    IconRecaptcha,
    IconCheckMark
  },
  props: {},
  data () {
    return {
      email: '',
      password: '',
      activeView: 'sign up',
      recaptcha: false,
      sending: false,
      error: false,
      errorMessage: ''
    }
  },
  computed: {},
  methods: {
    setActiveView (view) {
      this.activeView = view
    },


    toggleRecaptcha () {
      this.recaptcha = !this.recaptcha
    },


    async validateForm () {
      try {
        const email = this.email
        const password = this.password
        const isValid = await this.$validator.validateAll()
        console.log('isValid: ', isValid)
        if (!isValid) return
        if (this.activeView === 'sign in') this.signIn({ email, password })
        if (this.activeView === 'sign up') this.signUp({ email, password })
        if (this.activeView === 'reset password' && this.recaptcha) this.passwordReset({ email })
      }
      catch (e) { console.error(e) }
    },


    async signUp ({ email, password }) {
      try {
        console.log('signUp')
        this.sending = true
        const res = await this.createUserWithEmailAndPassword({ email, password })
        this.sending = false
        console.log('res: ', res)
      }
      catch (e) {
        console.error(e)
        const errorMessage = 'Sign up failed'
        this.handleError({ errorMessage })
      }
    },


    async signIn ({ email, password }) {
      try {
        console.log('signIn')
        this.sending = true
        await this.signInWithEmailAndPassword({ email, password })
        this.sending = false
      }
      catch (e) {
        console.error(e)
        this.handleError({ errorMessage: e })
      }
    },


    async passwordReset ({ email }) {
      try {
        console.log('passwordReset')
        this.sending = true
        await this.sendPasswordResetEmail({ email })
        this.sending = false
      }
      catch (e) {
        console.error(e)
        this.handleError({ errorMessage: e })
      }
    },


    handleError ({ errorMessage }) {
      console.log('handleError: ', errorMessage)
      this.sending = false
      this.error = true
      this.errorMessage = errorMessage
      setTimeout(() => {
        this.error = false
        this.errorMessage = ''
      }, 5000)
    },

    ...mapActions({
      signInWithEmailAndPassword: 'auth/signInWithEmailAndPassword',
      createUserWithEmailAndPassword: 'auth/createUserWithEmailAndPassword',
      sendPasswordResetEmail: 'auth/sendPasswordResetEmail',
      signInWithFacebook: 'auth/signInWithFacebook',
      signInWithGoogle: 'auth/signInWithGoogle',
      signInWithTwitter: 'auth/signInWithTwitter'
    })
  }
}
</script>


<style lang='sass' scoped>
.container-auth-form
  min-width: $unit*30
  min-height: $unit*42
  background: $white
  box-shadow: 0 0 $unit*3 rgba(34, 34, 34, 0.05)

.auth-form
  height: 100%
  display: grid
  grid-template-rows: repeat(2, auto)
  grid-template-columns: auto
  grid-gap: $unit*3 0

  &__header,
    grid-row: 1 / 2
    grid-column: 1 / 2
    display: grid
    grid-template-columns: repeat(2, min-content)
    grid-gap: 0 $unit*2
    padding: $unit*2

  &__sign-in,
  &__sign-up
    white-space: nowrap
    font-size: 12px
    text-transform: uppercase
    color: $grey

    &.active
      color: $black

  &__wrapper
    grid-row: 2 / 3
    grid-column: 1 / 2
    display: grid
    grid-template-rows: repeat(5, auto)
    grid-template-columns: 1fr
    grid-gap: $unit*3 0
    padding: 0 $unit*2 $unit*2 $unit*2

  &__icon
    width: $unit*5
    height: $unit*5
    display: flex
    justify-content: center
    align-items: center

  &__svg
    width: $unit*2
    height: $unit*2

    &.invalid
      fill: $error

  &__email,
  &__password,
  &__recaptcha
    grid-row: 2 / 3
    grid-column: 1 / 2
    display: grid
    grid-template-columns: min-content 1fr
    grid-gap: 0 $unit
    align-items: center
    visibility: hidden

  &__email
    grid-row: 1 / 2
    visibility: visible

  &__recaptcha
    grid-template-rows: $unit*3
    grid-template-columns: min-content 1fr min-content

    &-checkbox
      width: $unit*2
      height: $unit*2
      display: flex
      justify-content: center
      align-items: center
      border: 1px solid $black

      & > .auth-form__svg
        width: 10px
        height: 10px

    &-copy
      font-size: 12px
      vertical-align: middle

  &__input
    height: $unit*3
    background: transparent
    border-bottom: 1px solid $grey
    font-size: 12px

  &__submit
    height: $unit*4
    grid-row: 4 / 5
    grid-column: 1 / 2
    display: flex
    justify-content: center
    align-items: center
    border-radius: $unit*3
    background: $grey
    color: $white
    font-size: 12px
    text-transform: uppercase

    &.valid
      background: $success
      cursor: pointer


  &__password-reset
    font-size: 12px
    justify-self: end
    visibility: hidden
    color: $blue

  &__providers
    display: grid
    grid-template-rows: repeat(2, min-content)
    grid-template-columns: repeat(3, min-content)
    grid-gap: 0 $unit
    justify-self: center
    visibility: hidden !important

  &__copy
    position: relative
    grid-row: 1 / 2
    grid-column: 1 / 4
    font-size: 12px
    text-align: center
    color: $grey

    &::before,
    &::after
      content: ''
      position: absolute
      top: 50%
      left: 50%
      width: 50%
      height: 1px
      background: $grey
      transform: translate(-50%, -50%)

    &::after
      content: 'or'
      height: 100%
      width: 25%
      background: $white


  &__send-status,
  &__error-status
    position: relative
    z-index: 3
    width: 100%
    height: 100%
    grid-row: 1 / 3
    grid-column: 1 / 2
    background: $white
    visibility: hidden

  &__send-status

    &::before,
    &::after
      content: ''
      position: absolute
      top: 50%
      left: 50%
      width: $unit*5
      height: $unit*5
      border-radius: 50%
      border: $unit/4 solid $blue
      animation: sending 750ms linear infinite alternate

    &::after
      width: $unit*6
      height: $unit*4
      border-radius: unset
      border: unset
      background: $white


  &__error-status
    display: grid
    grid-template-rows: min-content 1fr
    grid-gap: $unit*3 0
    padding: $unit*2

    &-title
      text-align: center
      text-transform: uppercase

    &-copy
      color: $dark
      font-size: 12px


.visible
  visibility: visible


@keyframes sending
  0%
    transform: translate(-50%, -50%) rotate(0deg)
  100%
    transform: translate(-50%, -50%) rotate(360deg)
</style>
