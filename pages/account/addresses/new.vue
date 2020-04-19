<template lang='pug'>
div(class='container')
  div(class='address-new__content')
    h1 New Address
    AddressForm
</template>

<script>
import AddressForm from '~/components/modules/AddressForm.vue'

export default {
  components: {
    AddressForm
  },
  props: {},
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
