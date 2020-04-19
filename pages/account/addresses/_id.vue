<template lang='pug'>
div(class='container')
  div(
    v-if='!!address'
    class='address-new__content'
  )
    AddressForm(
      :address1='address.address1'
      :address2='address.address2'
      :city='address.city'
      :countryCode='address.countryCode'
      :firstName='address.firstName'
      :id='address.id'
      :lastName='address.lastName'
      :phone='address.phone'
      :provinceCode='address.provinceCode'
      :zip='address.zip'
    )
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
    ...mapActions({
      fetchAddress: 'account/fetchAddress'
    })
  },
  created() {
    const { id } = this.$route.params
    this.fetchAddress(id)
  }
}
</script>

<style lang='sass' scoped>
.container

.address-new__content
  margin: 0 auto
  max-width: 600px

</style>
