<template lang='pug'>
div(class='container-account')

  div(class='account')

    header(class='account__header')
      h2(class='account__header-title') Your Account
      p(class='account__header-copy') Referral Credit: {{ referralCredit }}

    Referrals(class='account__referrals')

    AuthSettings(class='account__auth-settings')

    //- Orders(class='account__orders')

    //-  Reviews

    a(
      @click='logout'
      class='account__logout'
    ) Log Out

</template>


<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import IconChevron from '~/assets/svg/icon-chevron.svg'
import AuthSettings from '~comp/account/AuthSettings.vue'
import Orders from '~comp/account/Orders.vue'
import Referrals from '~comp/account/Referrals.vue'



export default {
  components: {
    IconChevron,
    AuthSettings,
    Orders,
    Referrals
  },
  data () {
    return {

    }
  },
  computed: {
    referralCredit () {
      const { referralCredit } = this.customer
      return referralCredit
    },


    ...mapState({
      customer: state => state.account.customer
    }),


    ...mapGetters({
      displayName: 'auth/getCurrentUserDisplayName'
    })
  },
  methods: {
    async logout () {
      try {
        await this.signOut()
        this.$router.push({ name: 'index' })
      }
      catch (e) { console.error(e) }
    },


    ...mapMutations({
      deleteCustomer: 'account/DELETE_CUSTOMER'
    }),


    ...mapActions({
      signOut: 'auth/signOut',
      watchCustomer: 'account/watchCustomer'
    })
  },
  beforeMount () {
    this.watchCustomer()
  },
  beforeDestroy () {
    this.deleteCustomer()
  }
}
</script>


<style lang='sass' scoped>
.container-account

.account
  width: 75%
  margin: 0 auto
  display: grid
  grid-gap: $unit*5 0

  &__header
    display: grid
    justify-items: center

    &-title
      font-size: $fs2

    &-copy


  &__auth-settings,
  &__orders


  &__orders

  &__referrals

  &__logout
    width: $unit*15
    height: $unit*5
    justify-self: center
    display: flex
    justify-content: center
    align-items: center
    color: $success

</style>
