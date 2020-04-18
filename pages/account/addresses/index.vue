<template lang='pug'>
div(class='container')
  ViewHeader(
    title='Addresses'
    primaryActionLabel='Create'
    @primaryActionClick='$router.push({ name: "account-addresses-new" })'
    secondaryActionLabel='Back'
    @secondaryActionClick='routerGoBack'
  )
  div(class='')
    ul(class='addresses__list')
      li(
        v-for='(address, index) in addresses'
        class='addresses__item'
      )
        span(
          v-if='address.isDefaultAddress'
        ) Default Address
        span(
          v-for='(row, index) in address.formatted'
        ) {{ row }}
        router-link(
          :to='{ name: "account-addresses-id", params: { id: address.id }}'
          class='addresses__edit'
        ) Edit
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import useRouterBack from '~/compositions/useRouterBack'
import ViewHeader from '~/components/modules/ViewHeader.vue'
import Icon from '~/components/elements/Icon.vue'
import IconAddress from '~/assets/svg/icon-address.svg'

export default {
  components: {
    ViewHeader,
    Icon
  },
  props: {},
  setup() {
    const { routerGoBack } = useRouterBack()
    return { routerGoBack }
  },
  data () {
    return {
      iconAddress: IconAddress
    }
  },
  computed: {
    ...mapGetters({
      addresses: 'account/addresses'
    })
  },
  methods: {
    ...mapActions({
      fetchAddresses: 'account/fetchAddresses'
    })
  },
  created() {
    this.fetchAddresses()
  }
}
</script>

<style lang='sass' scoped>
.container

.addresses

  &__list
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))
    grid-gap: $unit*2

  &__item
    display: grid
    grid-gap: $unit
    padding: $unit*2
    background: $pri-cl

</style>
