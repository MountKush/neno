<template lang='pug'>
div(class='container-login')
  div(class='login')

    header(class='login__header')
      h2(class='login__title') ACTIVATE ACCOUNT

    form(
      @submit.prevent='activateAccount'
      class='login__form'
    )
      BaseInput(
        v-model='password'
        label='Password'
        placeholder='Password'
        type='password'
      )
      BaseButton(
        text='ACTIVATE ACCOUNT'
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
    async activateAccount () {
      try {
        const { customerId: id, activationToken } = this.$route.params
        const res = await this.customerActivate({
          id,
          activationToken,
          password: this.password
        })
        console.log('activate account')
      }
      catch (e) {
        // console.error(e)
        // this.handleError({ errorMessage: e })
      }
    },


    ...mapActions({
      customerActivate: 'auth/customerActivate'
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
