<template lang='pug'>
div(class='container')
  ViewHeader(
    title='Address'
    secondaryActionLabel='Back'
    @secondaryActionClick='routerGoBack'
  )
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
import useRouterBack from '~/compositions/useRouterBack'
import ViewHeader from '~/components/modules/ViewHeader.vue'
import AddressForm from '~/components/modules/AddressForm.vue'

export default {
  components: {
    ViewHeader,
    AddressForm
  },
  props: {},
  setup() {
    const { routerGoBack } = useRouterBack()
    return { routerGoBack }
  },
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
