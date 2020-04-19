<template lang='pug'>
div(class='container')
  div(class='password')
    form()
      BaseInput(
        label='New Password'
        type='password'
      )
      BaseInput(
        label='Confirm New Password'
        type='password'
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
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang='sass' scoped>
.container

.password
  margin: 0 auto
  max-width: 600px

</style>
