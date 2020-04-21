<template lang='pug'>
div(class='container')
  div(class='')
    ul(class='addresses__list')
      li(class='addresses__item')
        router-link(
          :to='{ name: "account-addresses-new" }'
          class='addresses__link-new'
        )
          Icon(
            :icon='iconAddress'
            class='addresses__icon'
          )
          | New Address

      li(
        v-for='(address, index) in addresses.sort((a, b) => b.isDefaultAddress - a.isDefaultAddress)'
        class='addresses__item'
      )
        p(class='addresses__address')
          span(
            v-for='(row, index) in address.formatted'
          ) {{ row }}
        router-link(
          :to='{ name: "account-addresses-id", params: { id: address.id }}'
          class='addresses__link'
        ) Edit
        button(
          v-if='!address.isDefaultAddress'
          @click='updateDefaultAddress(address.id)'
          class='addresses__link'
        ) Make Default
        p(
          v-else
          class='addresses__label'
        ) Default Address
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
      fetchAddresses: 'account/fetchAddresses',
      updateDefaultAddress: 'account/updateDefaultAddress'
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
    min-height: $unit*20
    position: relative
    display: grid
    grid-template-rows: 1fr auto
    grid-template-columns: auto 1fr
    grid-gap: $unit*2
    justify-items: start
    padding: $unit*2
    background: $pri-cl

  &__label
    font-weight: $fw-bold

  &__address
    grid-column: 1 / -1
    display: grid

  &__link-new
    @extend %flex--column-center
    position: absolute
    width: 100%
    height: 100%
    color: $blue

    &:hover
      color: $white
      background: $blue

  &__icon
    margin-bottom: $unit

  &__link
    background: transparent
    color: $blue

    &:hover
      text-decoration: underline
</style>
