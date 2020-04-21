<template lang='pug'>
div(
  :key='$route.params.id'
  class='container'
)
  div(
    v-if='!!address'
    class='address-new__content'
  )
    AddressForm(
      @submit='handleSubmit'
      @delete='handleDelete'
      :showDeleteButton='true'
      :address1='address.address1'
      :address2='address.address2'
      :city='address.city'
      :country='address.countryCode'
      :firstName='address.firstName'
      :lastName='address.lastName'
      :phone='address.phone'
      :province='address.provinceCode'
      :zip='address.zip'
    )
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
import AddressForm from '~/components/modules/AddressForm.vue'

export default {
  components: {
    AddressForm
  },
  props: {},
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      address: 'account/activeAddress'
    })
  },
  methods: {
    async handleSubmit(address) {
      try {
        console.log('address: ', address)
        await this.updateCustomerAddress({ address, id: this.address.id })
        this.$router.push({ name: 'account-addresses' })
      } catch (e) {
        console.error(e)
        this.$toasted.global.error({
          title: 'Error',
          message: `${e.message}`
        })
      }
    },

    async handleDelete() {
      try {
        await this.deleteCustomerAddress(this.$route.params.id)
        this.$router.push({ name: 'account-addresses' })
      } catch (e) {
        console.error(e)
      }
    },

    ...mapMutations({
      deleteActiveAddress: 'account/DELETE_ACTIVE_ADDRESS'
    }),

    ...mapActions({
      fetchCustomerAddress: 'account/fetchAddress',
      deleteCustomerAddress: 'account/deleteAddress',
      updateCustomerAddress: 'account/updateAddress'
    })
  },
  created() {
    const { id } = this.$route.params
    this.fetchCustomerAddress(id)
  },
  beforeDestroy() {
    this.deleteActiveAddress()
  }
}
</script>

<style lang='sass' scoped>
.container

.address-new__content
  margin: 0 auto
  max-width: 600px
</style>
