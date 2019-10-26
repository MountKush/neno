<template lang='pug'>
div(class='container-newsletter-subscribe')

  div(class='newsletter-subscribe')
    h3(class='newsletter-subscribe__title') Let's Party
    p(class='newsletter-subscribe__copy') Be the first to know about new arrivals and exclusive offers.

    form(
      @submit.prevent='newsletterSubscribe'
      class='newsletter-subscribe__form'
    )
      input(
        v-model='email'
        v-validate='"required|email"'
        name='email'
        type='email'
        placeholder='Your email'
        class='newsletter-subscribe__form-input'
      )
      input(
        type='submit'
        value='Subscribe'
        class='newsletter-subscribe__form-submit'
      )

</template>


<script>
import { firestore, auth } from '~/firebase'


export default {
  components: {},
  props: {},
  data () {
    return {
      email: ''
    }
  },
  computed: {},
  methods: {
    async newsletterSubscribe () {
      try {
        const { uid } = auth().currentUser

        const isValid = await this.$validator.validateAll()
        if (!isValid || !uid) return

        const dbRef = firestore.doc(`queueNewsletterSubscribe/${uid}`)
        const data = { email: this.email }
        await dbRef.set(data)
        await this.handleSuccess()
        return
      }
      catch (e) {
        console.error(e)
      }
    },


    handleSuccess () {
      this.email = 'Thank you! 😁'
      return new Promise(resolve => {
        setTimeout(() => {
          resolve()
          this.email = ''
        }, 3000)
      })
    }
  }
}
</script>


<style lang='sass' scoped>
.container-newsletter-subscribe
  @extend %container
  margin-top: $unit*5
  // background: rgba(212, 228, 241, 1)

.newsletter-subscribe
  @extend %content
  display: grid
  grid-gap: $unit*2 0
  +mq-m
    grid-template-rows: repeat(2, auto)
    grid-template-columns: repeat(2, 1fr)
    grid-gap: $unit*2 $unit*5

  &__title
    font-size: $fs
    font-weight: bold
    +mq-s
      font-size: $fs1
    +mq-m
      grid-row: 1 / 2
      grid-column: 1 / 3


  &__copy
    max-width: 320px
    +mq-m
      grid-row: 2 / 3
      grid-column: 1 / 2

  &__form
    position: relative
    width: 100%
    height: min-content
    display: flex
    flex-direction: column
    margin-top: $unit*2
    +mq-m
      grid-row: 1 / 3
      grid-column: 2 / 3
      margin-top: unset

    &::after
      content: ''
      position: absolute
      width: 90%
      height: 2px
      top: 50%
      background: $black

    &-input
      height: $unit*5
      padding: 0 $unit
      background: transparent

      &::placeholder
        color: $dark

    &-submit
      width: $unit*20
      height: $unit*5
      align-self: flex-end
      // border-radius: $unit*3
      background: $black
      color: $white

</style>
