<template lang='pug'>
div(class='container')
  ViewHeader(
    title='Change Password'
    secondaryActionLabel='Back'
    @secondaryActionClick='routerGoBack'
  )
  div(class='')
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
import useRouterBack from '~/compositions/useRouterBack'
import ViewHeader from '~/components/modules/ViewHeader.vue'

export default {
  components: {
    ViewHeader
  },
  props: {},
  setup() {
    const { routerGoBack } = useRouterBack()
    return { routerGoBack }
  },
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang='sass' scoped>
.container

</style>
