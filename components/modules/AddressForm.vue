<template lang='pug'>
ValidationObserver(v-slot='{ invalid, handleSubmit }')
  form(
    @submit.prevent='handleSubmit(onSubmit)'
    class='address-form'
  )
    BaseInput(
      v-model='address.firstName'
      rules='required|isAlpha'
      label='First Name'
      placeholder='First Name'
      class='address-form__input'
    )
    BaseInput(
      v-model='address.lastName'
      rules='required|isAlpha'
      label='Last Name'
      placeholder='Last Name'
      class='address-form__input'
    )
    BaseInput(
      v-model='address.address1'
      label='Address'
      placeholder='Address'
      class='address-form__input'
    )
    BaseInput(
      v-model='address.address2'
      placeholder='Apartment, suite, etc (optional)'
      class='address-form__input'
    )
    BaseInput(
      v-model='address.city'
      label='City'
      placeholder='City'
      class='address-form__input'
    )
    BaseInput(
      v-model='address.country'
      label='Country'
      placeholder='Country'
      class='address-form__input'
    )
    BaseInput(
      v-model='address.province'
      label='State'
      placeholder='State'
      class='address-form__input'
    )
    BaseInput(
      v-model='address.zip'
      label='Zipcode'
      placeholder=''
      class='address-form__input'
    )
    BaseInput(
      v-model='address.phone'
      label='Phone Number'
      placeholder='Phone Number'
      class='address-form__input'
    )
    BaseCheckbox(
      text='Make this your default shipping address?'
      class='address-form__input'
    )
    BaseButton(
      :disabled='invalid'
      text='Save'
      class='address-form__button'
    )
</template>

<script>
const addressData = {
  address1: '',
  address2: '',
  city: '',
  country: '',
  firstName: '',
  lastName: '',
  phone: '',
  province: '',
  zip: ''
}

export default {
  components: {},
  props: {
    address1: {
      type: String,
      default: ''
    },
    address2: {
      type: String,
      default: ''
    },
    city: {
      type: String,
      default: ''
    },
    country: {
      type: String,
      default: ''
    },
    error: {
      type: Object,
      default: () => null
    },
    firstName: {
      type: String,
      default: ''
    },
    lastName: {
      type: String,
      default: ''
    },
    phone: {
      type: String,
      default: ''
    },
    province: {
      type: String,
      default: ''
    },
    zip: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      address: { ...addressData }
    }
  },
  computed: {},
  created() {
    Object.keys(this.address).forEach(
      (addressKey) => this.address[addressKey] = this[addressKey]
    )
  },
  methods: {
    onSubmit() {
      this.$emit('submit', this.address)
    }
  }
}
</script>

<style lang='sass' scoped>
.address-form
  display: grid
  grid-gap: $unit*2
  grid-template-columns: 1fr
  padding: $unit*2
  +mq-m
    grid-template-columns: repeat(2, 1fr)

  &__input

    &:nth-child(n+3):nth-child(-n+5),
    &:nth-child(10)
      grid-column: 1 / -1
</style>
