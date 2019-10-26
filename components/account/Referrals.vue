<template lang='pug'>
div(class='container-referrals')

  section(class='referrals')
    h3(class='referrals__title') Referrals

    div(class='referrals__promo')
      p(class='referrals__promo-copy') Invite Friends. <br> Earn Points.
      IconGift(class='referrals__promo-svg')


    div(class='referrals__detail')
      label(class='referrals__detail-label') Your Referral Link
      input(
        @click='selectReferralCode'
        :value='referralCode'
        ref='referralCode'
        readonly
        class='referrals__detail-input'
      )

      a(
        @click='copyReferralCode'
        class='referrals__detail-button'
      ) Copy Link

      a(
        @click='shareOnFacebook'
        class='referrals__detail-button referrals__detail-button--facebook'
      )
        IconFacebook(class='referrals__detail-button-svg')
        span(class='referrals__detail-button-copy') Share on Facebook

      a(
        @click='shareOnTwitter'
        class='referrals__detail-button referrals__detail-button--twitter'
      )
        IconTwitter(class='referrals__detail-button-svg')
        span(class='referrals__detail-button-copy') Share on Twitter


</template>


<script>
import { mapState } from 'vuex'
import IconFacebook from '~/assets/svg/icon-facebook.svg'
import IconTwitter from '~/assets/svg/icon-twitter.svg'
import IconGift from '~/assets/svg/icon-gift.svg'


export default {
  components: {
    IconFacebook,
    IconTwitter,
    IconGift
  },
  props: {},
  data () {
    return {
      referralDiscount: '10%'
    }
  },
  computed: {
    referralCode () {
      const { host } = window.location
      const { referralCode } = this.customer
      return `${host}/share/${referralCode}`
    },


    ...mapState({
      customer: state => state.account.customer
    })
  },
  methods: {
    selectReferralCode () {
      const referralCode = this.$refs.referralCode
      referralCode.select()
    },


    copyReferralCode () {
      this.selectReferralCode()
      // copy input value to clipboard
      document.execCommand('copy')
      // deselect input
      if (document.selection) document.selection.empty()
      else if (window.getSelection) window.getSelection().removeAllRanges()
    },


    shareOnFacebook () {
      const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.referralCode)}`
      window.open(url, '_blank')
    },


    shareOnTwitter () {
      const tweetText = `Shop @Feed_Me_Sugar and receive ${this.referralDiscount} OFF. Make sure to use my link. ${this.referralCode}`
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`
      window.open(url, '_blank')
    }
  }
}
</script>


<style lang='sass' scoped>
.container-referrals

.referrals
  width: 100%
  max-width: 320px

  &__title
    padding: $unit*3 0
    font-size: $fs1

  &__promo
    display: grid
    grid-template-rows: repeat(3, 1fr)
    grid-template-columns: repeat(3, 1fr)
    padding: $unit*3 $unit*2
    margin-bottom: $unit*4
    border: 1px solid rgba(34, 34, 34, 0.05)

    &-copy
      grid-row: 1 / 3
      grid-column: 1 / 3

    &-svg
      width: $unit*15
      height: $unit*15
      grid-row: 1 / 4
      grid-column: 3 / 4
      fill: $black

  &__detail
    display: grid
    grid-gap: $unit*2 0
    padding: $unit*3 $unit*2
    box-shadow: 0 0 $unit*3 rgba(34, 34, 34, 0.05)

    &-label


    &-input,
    &-button
      width: 100%
      height: $unit*5
      display: flex
      justify-content: center
      align-items: center

    &-input
      background: #e8eaed
      padding: 0 $unit
      overflow: hidden
      text-overflow: ellipsis

    &-button
      padding: 0 $unit*3
      background: $success
      color: $white

      &--facebook
        background: rgba(59, 89, 152, 1)

      &--twitter
        background: rgba(29, 161, 242, 1)

      &-svg
        width: $unit*2
        height: $unit*2
        fill: $white

      &-copy
        padding-right: $unit
        margin: 0 auto
        color: inherit

</style>
