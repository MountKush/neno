<template lang='pug'>
div(class='container-auth-settings')

  section(class='auth-settings')
    h3(class='auth-settings__title') Account

    ul(class='auth-settings__list')
      li(class='auth-settings__item')
        a(
          @click='show.name = !show.name'
          class='auth-settings__header'
        )
          h4(class='auth-settings__header-title') Name
        FormName(
          v-show='show.name'
          :name='customerDetails.name'
          @handleClose='show.name = false'
          class='auth-settings__form'
        )
      li(class='auth-settings__item')
        a(
          @click='show.email = !show.email'
          class='auth-settings__header'
        )
          h4(class='auth-settings__header-title') Email Address
        FormEmail(
          v-show='show.email'
          :emailAddress='{ email: customerDetails.email }'
          @handleClose='show.email = false'
          class='auth-settings__form'
        )

      li(class='auth-settings__item')
        a(
          @click='show.password = !show.password'
          class='auth-settings__header'
        )
          h4(class='auth-settings__header-title') Update Password
        FormPassword(
          v-show='show.password'
          @handleClose='show.password = false'
          class='auth-settings__form'
        )

      li(class='auth-settings__item')
        a(
          @click='show.address = !show.address'
          class='auth-settings__header'
        )
          h4(class='auth-settings__header-title') Shipping Address
        FormAddress(
          v-show='show.address'
          :shippingAddress='customerDetails.shippingAddress'
          @handleClose='show.address = false'
          class='auth-settings__form'
        )

      li(class='auth-settings__item')
        a(
          @click='show.phone = !show.phone'
          class='auth-settings__header'
        )
          h4(class='auth-settings__header-title') Phone Number
        FormPhoneNumber(
          v-show='show.phone'
          :phoneNumber='{ phoneNumber: customerDetails.phoneNumber }'
          @handleClose='show.phone = false'
          class='auth-settings__form'
        )

</template>


<script>
import { mapState } from 'vuex'
import FormEmail from '~comp/account/FormEmail.vue'
import FormAddress from '~comp/account/FormAddress.vue'
import FormPassword from '~comp/account/FormPassword.vue'
import FormPhoneNumber from '~comp/account/FormPhoneNumber.vue'
import FormName from '~comp/account/FormName.vue'


export default {
  components: {
    FormEmail,
    FormAddress,
    FormPassword,
    FormPhoneNumber,
    FormName
  },
  props: {},
  data () {
    return {
      show: {
        name: false,
        email: false,
        password: false,
        address: false,
        phone: false
      }
    }
  },
  computed: {
    customerDetails () {
      const {
        firstName = '',
        lastName = '',
        email = '',
        address = '',
        city = '',
        state = '',
        zipcode = '',
        country = '',
        phoneNumber = ''
      } = this.customer
      console.log('address: ', { address, city, state, zipcode, country })

      return {
        name: { firstName, lastName },
        email,
        shippingAddress: { address, city, state, zipcode, country },
        phoneNumber
      }
    },


    ...mapState({
      customer: state => state.account.customer
    })
  },
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-auth-settings

.auth-settings

  &__title
    padding: $unit*3 0
    font-size: $fs1

  &__header
    display: block
    padding: $unit*3 $unit*2
    user-select: none

  &__list
    width: 100%
    max-width: 320px
    display: grid
    grid-gap: $unit*3 0

  &__item
    box-shadow: 0 0 $unit*3 rgba(34, 34, 34, 0.05)

</style>
