<template lang='pug'>
div(class='container-form-email')

  form(
    @submit.prevent='validateForm'
    class='form-password'
  )
    label(class='label') Current Password
    input(
      v-validate='"required|min:6"'
      v-model='currentPassword'
      name='currentPassword'
      type='password'
      class='input'
    )
    label(class='label') New Password
    input(
      v-validate='"required|min:6"'
      v-model='newPassword'
      ref='newPassword'
      name='newPassword'
      type='password'
      class='input'
    )
    label(class='label') Confirm Password
    input(
      v-validate='"required|min:6|confirmed:newPassword"'
      v-model='confirmPassword'
      name='confirmPassword'
      type='password'
      class='input'
    )
    div(class='buttons')
      a(
        @click='cancel'
        class='cancel'
      ) Cancel
      input(
        type='submit'
        value='save'
        class='submit'
      )

</template>


<script>
import { mapActions } from 'vuex'


export default {
  components: {},
  props: {},
  data () {
    return {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    }
  },
  computed: {},
  methods: {
    clearPasswords () {
      this.currentPassword = ''
      this.newPassword = ''
      this.confirmPassword = ''
    },


    async validateForm () {
      try {
        const currentPassword = this.currentPassword
        const newPassword = this.newPassword

        const isValid = await this.$validator.validateAll()
        console.log('isValid: ', isValid)
        if (!isValid) return
        await this.updatePassword({ currentPassword, newPassword })
        this.cancel()
      }
      catch (e) {
        console.error(e)
      }
    },


    cancel () {
      this.clearPasswords()
      this.$emit('handleClose')
    },


    ...mapActions({
      updatePassword: 'auth/updatePassword'
    })
  }
}
</script>


<style lang='sass' scoped>
.container-form-email

.form-password
  @extend %account-form


</style>
