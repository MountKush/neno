<template lang='pug'>
div(class='container-form-email')

  form(
    @submit.prevent='validateForm'
    class='form'
  )
    label(class='label') Phone Number
    input(
      v-model='phone'
      v-validate='"required"'
      name='phone'
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
    phoneNumber: {
      type: Object
    }
  },
  data () {
    return {
      phone: ''
    }
  },
  computed: {},
  watch: {
    phoneNumber () {
      this.setPhone()
    }
  },
  methods: {
    setPhone () {
      const { phoneNumber } = this.phoneNumber
      this.phone = phoneNumber
    },


    async validateForm () {
      try {
        const phoneNumber = this.phone

        const isValid = await this.$validator.validateAll()
        console.log('isValid: ', isValid)
        if (!isValid) return
        await this.writePhoneNumber({ phoneNumber })
        this.$emit('handleClose')
      }
      catch (e) {
        console.error(e)
      }
    },


    cancel () {
      this.setPhone()
      this.$emit('handleClose')
    },


    ...mapActions({
      writePhoneNumber: 'account/writePhoneNumber'
    })
  }
}
</script>


<style lang='sass' scoped>
.container-form-email

.form
  @extend %account-form


</style>
