<template lang='pug'>
div(class='container-discount')

  div(class='discount')

    IconDiscount(class='discount__icon')
    h3(class='discount__title') Discount Code
    p(class='discount__copy') Don't have any yet? Check out our discount programs.

    form(
      @submit.prevent='applyDiscount'
      :class='{ invalid: errors.has("discount") || discountCode === "" }'
      class='discount__form'
    )
      input(
        v-model='discountCode'
        v-validate='"required|alpha_dash|min:4|max:9"'
        name='discount'
        minlength='4'
        maxlength='9'
        placeholder='Discount'
        class='discount__form-input'
      )
      input(
        :class='{ invalid: errors.has("discount") || discountCode === "" }'
        type='submit'
        value='Apply'
        class='discount__form-submit'
      )

</template>


<script>
import { mapActions } from 'vuex'
import IconDiscount from '~/assets/svg/icon-discount.svg'


export default {
  components: {
    IconDiscount
  },
  props: {},
  data () {
    return {
      discountCode: ''
    }
  },
  computed: {},
  methods: {
    async applyDiscount () {
      try {
        const discountCode = this.discountCode
        const isValid = await this.$validator.validateAll()
        if (!isValid) return
        await this.addDiscount({ discountCode })
      }
      catch (e) {
        console.error(e)
      }
      finally {
        this.discountCode = ''
      }
    },


    ...mapActions({
      addDiscount: 'checkout/addDiscount'
    })
  }
}
</script>


<style lang='sass' scoped>
.container-discount

.discount
  display: grid
  grid-template-rows: repeat(3, min-content)
  grid-template-columns: auto
  grid-gap: $unit*2 $unit*2
  +mq-xs
    grid-template-columns: min-content auto
  +mq-s
    grid-template-rows: repeat(2, min-content)
    grid-template-columns: min-content auto auto


  &__icon
    display: none
    +mq-xs
      display: unset
      width: $unit*3
      grid-row: 1 / -1
      grid-column: 1 / 2

  &__title
    grid-row: 1 / 2
    grid-column: 1 / 2
    font-weight: bold
    +mq-xs
      grid-column: 2 / 3


  &__copy
    max-width: 280px
    grid-row: 2 / 3
    grid-column: 1 / 2
    color: $dark
    +mq-xs
      grid-column: 2 / 3


  &__form
    justify-self: start
    height: min-content
    display: grid
    grid-template-rows: $unit*5
    grid-template-columns: 1fr min-content
    border: 1px solid $success
    overflow: hidden
    +mq-s
      grid-row: 2 / 3
      justify-self: end

    &.invalid
      border: 1px solid $grey

    &-input
      width: 100%
      height: 100%
      padding-left: $unit

    &-submit
      height: 100%
      padding: 0 $unit*2
      background: transparent
      color: $success
      cursor: pointer

      &.invalid
        color: $dark
        cursor: default


</style>
