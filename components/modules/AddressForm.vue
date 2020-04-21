<template lang='pug'>
ValidationObserver(v-slot='{ pristine, invalid, handleSubmit }')
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
      rules='required|isAscii'
      label='Address'
      placeholder='Address'
      class='address-form__input'
    )
    BaseInput(
      v-model='address.address2'
      rules='isAscii'
      placeholder='Apartment, suite, etc (optional)'
      class='address-form__input'
    )
    BaseInput(
      v-model='address.city'
      rules='required|isAlpha'
      label='City'
      placeholder='City'
      class='address-form__input'
    )
    BaseInput(
      v-model='address.country'
      rules='required|isAlpha'
      label='Country'
      placeholder='Country'
      class='address-form__input'
    )
    BaseInput(
      v-model='address.province'
      rules='required|isAlpha'
      label='State'
      placeholder='State'
      class='address-form__input'
    )
    BaseInput(
      v-model='address.zip'
      rules='required|isNumeric'
      label='Zipcode'
      placeholder='Zipcode'
      class='address-form__input'
    )
    BaseInput(
      v-model='address.phone'
      rules='required|isNumeric'
      label='Phone Number'
      placeholder='Phone Number'
      class='address-form__input'
    )
    BaseButton(
      :disabled='invalid || pristine'
      text='Save'
      class='address-form__button'
    )
    Button(
      v-if='showDeleteButton'
      @click='$emit("delete")'
      text='Delete'
      type='button'
      class='address-form__button address-form__button--danger'
    )
</template>

<script>
import Button from '~/components/elements/Button.vue'

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
  components: {
    Button
  },
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
    },
    showDeleteButton: {
      type: Boolean,
      default: false
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

  &__button

    &--danger
      background: $error
</style>
