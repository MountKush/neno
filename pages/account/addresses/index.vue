<template lang='pug'>
div(class='container')
  div(class='')
    ul(class='addresses__list')
      li(
        v-for='(address, index) in addresses'
        class='addresses__item'
      )
        span(
          v-if='address.isDefaultAddress'
          class='addresses__label'
        ) Default Address
        p(class='addresses__address')
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
import Icon from '~/components/elements/Icon.vue'
import IconAddress from '~/assets/svg/icon-address.svg'

export default {
  components: {
    Icon
  },
  props: {},
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
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))
    grid-gap: $unit*2

  &__item
    display: grid
    align-items: end
    padding: $unit*2
    background: $pri-cl

  &__label
    font-weight: $fw-bold
    margin-bottom: $unit

  &__address
    display: grid
    margin-bottom: auto

  &__edit
    justify-self: start
    margin-top: $unit
    text-decoration: underline
    color: $blue
</style>
