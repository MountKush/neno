<template lang='pug'>
div(class='new-address')
  AddressForm(
    :error='error'
    @submit='handleSubmit'
  )
</template>

<script>
import { mapActions } from 'vuex'
import AddressForm from '~/components/modules/AddressForm.vue'

export default {
  components: {
    AddressForm
  },
  props: {},
  data () {
    return {
      error: null
    }
  },
  computed: {},
  methods: {
    async handleSubmit(address) {
      try {
        console.log('address: ', address)
        await this.createCustomerAddress(address)
        this.$router.push({ name: 'account-addresses' })
      } catch (e) {
        console.error(e)
        this.error = e
        this.$toasted.global.error({
          title: 'Error',
          message: `${e.message}`
        })
      }
    },

    ...mapActions({
      createCustomerAddress: 'account/createAddress'
    })
  }
}
</script>

<style lang='sass' scoped>
.new-address
  margin: 0 auto
  max-width: 600px
</style>
