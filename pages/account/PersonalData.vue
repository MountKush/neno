<template lang='pug'>
div(class='container-personal-data')
  div(class='personal-data')
    form
      BaseInput(
        label='First Name'
      )
      BaseInput(
        label='Last Name'
      )
      BaseInput(
        label='Email'
      )
      BaseInput(
        label='Phone Number'
      )
      BaseCheckbox(
        text='Consent to be sent marketing material via email'
      )
      BaseButton(
        text='Save'
      )
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang='sass' scoped>
.container-orders

.orders

.personal-data
  margin: 0 auto
  max-width: 600px

</style>
