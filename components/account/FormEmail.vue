<template lang='pug'>
div(class='container-form-email')

  form(
    @submit.prevent='validateForm'
    class='form-email'
  )
    label(class='label') Email
    input(
      v-model='email'
      v-validate='"required|email"'
      name='email'
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
  props: {
    emailAddress: {
      type: Object
    }
  },
  data () {
    return {
      email: ''
    }
  },
  computed: {},
  watch: {
    emailAddress () {
      this.setEmail()
    }
  },
  methods: {
    setEmail () {
      const { email } = this.emailAddress
      console.log('email: ', email)
      this.email = email
    },


    async validateForm () {
      try {
        const email = this.email

        const isValid = await this.$validator.validateAll()
        console.log('isValid: ', isValid)
        if (!isValid) return
        await this.writeEmail({ email })
        this.$emit('handleClose')
      }
      catch (e) {
        console.error(e)
      }
    },


    cancel () {
      this.setEmail()
      this.$emit('handleClose')
    },


    ...mapActions({
      writeEmail: 'account/writeEmail'
    })
  }
}
</script>


<style lang='sass' scoped>
.container-form-email

.form-email
  @extend %account-form


</style>
