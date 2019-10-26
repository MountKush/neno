<template lang='pug'>
div(class='container-submit')

  form(
    @submit.prevent=''
    class='submit'
  )

    input(
      @click='addToCart'
      :class='{ valid: variant.available, sending, error }'
      :value='buttonText'
      type='submit'
      class='submit__add-to-cart'
    )

</template>


<script>
import { mapActions } from 'vuex'


export default {
  components: {},
  props: {
    variant: {
      type: Object,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      sending: false,
      error: false,
      buttonText: 'Add To Cart'
    }
  },
  computed: {},
  methods: {
    async addToCart () {
      if (!this.variant.available || this.sending || this.error) return

      try {
        this.sending = true
        this.buttonText = 'Adding...'

        const lineItems = [{ variantId: this.variant.id, quantity: this.quantity }]
        await this.addLineItems({ lineItems })
        await this.handleSuccess()
      }
      catch (e) {
        console.log(e)
        await this.handleError()
      }
      finally {
        this.sending = false
        this.error = false
        this.buttonText = this.variant.available ? 'Add To Cart' : 'Unavailable'
      }
    },


    handleSuccess () {
      return new Promise(resolve => {
        this.buttonText = 'Success 👍'
        setTimeout(() => resolve(), 1000)
      })
    },


    handleError () {
      return new Promise(resolve => {
        this.sending = false
        this.error = true
        this.buttonText = 'Error, Try Again 😢'
        setTimeout(() => resolve(), 3000)
      })
    },


    ...mapActions({
      addLineItems: 'checkout/addLineItems'
    })
  }
}
</script>


<style lang='sass' scoped>
.container-submit

.submit

  &__add-to-cart
    width: 100%
    height: $unit*8
    display: flex
    justify-content: center
    align-items: center
    background: $grey
    color: $white

    &.valid
      background: $success
      cursor: pointer
      box-shadow: 0 24px 32px rgba(33, 206, 156, 0.25)

    &.sending
      cursor: default

    &.error
      background: $error
      cursor: default
      box-shadow: 0 24px 32px rgba(255, 0, 0, 0.25)


</style>
