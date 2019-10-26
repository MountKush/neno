<template lang='pug'>
div(class='container-account-promotion')

  div(class='account-promotion')
    h3(class='account-promotion__title') Join the Community

    ul(class='account-promotion__list')
      li(
        v-for='(item, index) in benefits'
        :key='item + index'
        class='account-promotion__item'
      )
        p(class='account-promotion__copy') {{ item }}

    AuthForm(class='account-promotion__auth-form')

</template>


<script>
import AuthForm from '~comp/AuthForm.vue'


export default {
  components: {
    AuthForm
  },
  props: {},
  data () {
    return {
      benefits: [
        'Earn rewards for purchases and leaving product reviews.',
        'Be notified when products you want go on sale.',
        'Receive exclusive offers.',
        'Enjoy faster checkouts—save shipping details.'
      ]
    }
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-account-promotion
  @extend %container
  // background: rgba(248, 248, 248, 1)

.account-promotion
  @extend %content
  display: grid
  grid-gap: $unit*3 0
  +mq-s
    grid-template-rows: repeat(3, min-content)
    grid-template-columns: repeat(2, 1fr)
    grid-gap: $unit*3 $unit*4

  &__title
    font-size: $fs
    font-weight: bold
    grid-row: 1 / 2
    grid-column: 1 / -1
    +mq-s
      font-size: $fs1

  &__list
    display: grid
    grid-auto-rows: min-content
    grid-gap: $unit*2 0
    margin-left: $unit*2
    +mq-s
      grid-row: 2 / 3
      grid-column: 1 / 2

  &__item
    list-style: disc

  &__copy


  &__auth-form
    margin-top: $unit*2
    justify-self: center
    +mq-s
      grid-row: 1 / 4
      grid-column: 2 / 3
      margin-top: unset



</style>
