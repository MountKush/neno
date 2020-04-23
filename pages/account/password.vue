<template lang='pug'>
div(class='password')
  ValidationObserver(v-slot='{ pristine, invalid, handleSubmit }')
    form(
      @submit.prevent='handleSubmit(onSubmit)'
      class='password__form'
    )
      Input(
        v-model='password'
        rules='required|matchValue:@confirm'
        label='New Password'
        placeholder='Password'
        type='password'
        class='password__input'
      )
      Input(
        v-model='passwordConfirmation'
        name='confirm'
        rules='required'
        label='Confirm New Password'
        placeholder='Confirm Password'
        type='password'
        class='password__input'
      )
      Button(
        :disabled='invalid || pristine || isSubmitInProgress'
        :loading='isSubmitInProgress'
        text='Change Password'
      )
</template>

<script>
import { mapActions } from 'vuex'
import Button from '~/components/elements/Button.vue'
import Input from '~/components/elements/Input.vue'

export default {
  components: {
    Input,
    Button
  },
  props: {},
  data () {
    return {
      password: '',
      passwordConfirmation: '',
      isSubmitInProgress: false
    }
  },
  computed: {},
  methods: {
    async onSubmit() {
      try {
        this.isSubmitInProgress = true
        await this.updatePassword(this.password)
        this.$toasted.global.success({
          title: 'Success',
          message: `Password has been updated.`
        })
      } catch (e) {
        console.error(e)
        this.$toasted.global.error({
          title: 'Error',
          message: `${e.message}`
        })
      } finally {
        this.isSubmitInProgress = false
      }
    },

    ...mapActions({
      updatePassword: 'account/updatePassword'
    })
  }
}
</script>

<style lang='sass' scoped>
.password
  margin: 0 auto
  max-width: 600px

  &__form
    display: grid
    grid-gap: $unit*2
    grid-template-columns: 1fr
    padding: $unit*2
    +mq-m
      grid-template-columns: repeat(2, 1fr)

  &__input

    &:nth-child(n+1):nth-child(-n+3)
      grid-column: 1 / -1
</style>
