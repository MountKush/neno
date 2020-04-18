<template lang='pug'>
form(
  class='address-form'
)
  BaseInput(
    v-model='firstName'
    label='First Name'
    placeholder='First Name'
    class='address-form__input'
  )
  BaseInput(
    v-model='lastName'
    label='Last Name'
    placeholder='Last Name'
    class='address-form__input'
  )
  BaseInput(
    v-model='address1'
    label='Address'
    placeholder='Address'
    class='address-form__input'
  )
  BaseInput(
    v-model='address2'
    placeholder='Apartment, suite, etc (optional)'
    class='address-form__input'
  )
  BaseInput(
    v-model='city'
    label='City'
    placeholder='City'
    class='address-form__input'
  )
  BaseInput(
    v-model='countryCode'
    label='Country'
    placeholder='Country'
    class='address-form__input'
  )
  BaseInput(
    v-model='provinceCode'
    label='State'
    placeholder='State'
    class='address-form__input'
  )
  BaseInput(
    v-model='zip'
    label='Zipcode'
    placeholder=''
    class='address-form__input'
  )
  BaseInput(
    v-model='phone'
    label='Phone Number'
    placeholder='Phone Number'
    class='address-form__input'
  )
  BaseCheckbox(
    text='Make this your default shipping address?'
    class='address-form__input'
  )
  BaseButton(
    text='Create'
    class='address-form__button'
  )
</template>

<script>
const addressData = {
  address1: '',
  address2: '',
  city: '',
  countryCode: '',
  firstName: '',
  id: '',
  lastName: '',
  phone: '',
  provinceCode: '',
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
    countryCode: {
      type: String,
      default: ''
    },
    firstName: {
      type: String,
      default: ''
    },
    id: {
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
    provinceCode: {
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
  methods: {}
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
