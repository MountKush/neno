<template lang='pug'>
div(class='container-form-address')

  form(
    @submit.prevent='validateForm'
    class='form-address'
  )
    label(class='label') Address
    input(
      v-model='address'
      v-validate='"required"'
      name='address'
      class='input'
    )
    label(class='label') City
    input(
      v-model='city'
      v-validate='"required|alpha_spaces"'
      name='city'
      class='input'
    )
    label(class='label') State
    input(
      v-model='state'
      v-validate='"required|alpha"'
      name='state'
      class='input'
    )
    label(class='label') Zip
    input(
      v-model='zipcode'
      v-validate='"required|numeric"'
      name='zipcode'
      class='input'
    )
    label(class='label') Country
    input(
      v-model='country'
      v-validate='"required|alpha_spaces"'
      name='country'
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
    shippingAddress: {
      type: Object
    }
  },
  data () {
    return {
      address: '',
      city: '',
      state: '',
      zipcode: '',
      country: ''
    }
  },
  computed: {},
  watch: {
    shippingAddress () {
      console.log('name: ', this.shippingAddress)
      this.setShippingAddress()
    }
  },
  methods: {
    setShippingAddress () {
      const { address = '', city = '', state = '', zipcode = '', country = '' } = this.shippingAddress
      this.address = address
      this.city = city
      this.state = state
      this.zipcode = zipcode
      this.country = country
    },


    async validateForm () {
      try {
        const address = this.address
        const city = this.city
        const state = this.state
        const zipcode = this.zipcode
        const country = this.country

        const isValid = await this.$validator.validateAll()
        console.log('isValid: ', isValid)
        if (!isValid) return
        await this.writeShippingAddress({ address, city, state, zipcode, country })
        this.$emit('handleClose')
      }
      catch (e) {
        console.error(e)
      }
    },


    cancel () {
      this.setShippingAddress()
      this.$emit('handleClose')
    },


    ...mapActions({
      writeShippingAddress: 'account/writeShippingAddress'
    })
  }
}
</script>


<style lang='sass' scoped>
.container-form-email

.form-address
  @extend %account-form


</style>
