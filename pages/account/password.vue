<template lang='pug'>
div(class='password')
  form(class='password__form')
    BaseInput(
      label='New Password'
      type='password'
      class='password__input'
    )
    BaseInput(
      label='Confirm New Password'
      type='password'
      class='password__input'
    )
    BaseButton(
      text='Change Password'
    )
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      password: ''
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang='sass' scoped>
.password
  margin: 0 auto
  max-width: 600px

  &__form
    display: grid
    grid-gap: $unit*2
    grid-template-columns: 1fr
    padding: $unit*2
    +mq-m
      grid-template-columns: repeat(2, 1fr)

  &__input

    &:nth-child(n+1):nth-child(-n+3)
      grid-column: 1 / -1
</style>
