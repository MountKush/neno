<template lang='pug'>
div(class='container')
  ViewHeader(
    title='New Address'
    secondaryActionLabel='Back'
    @secondaryActionClick='routerGoBack'
  )
  div(class='address-new__content')
    h1 New Address
    AddressForm
</template>

<script>
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
  computed: {},
  methods: {}
}
</script>

<style lang='sass' scoped>
.container

.address-new__content
  margin: 0 auto
  max-width: 600px

</style>
