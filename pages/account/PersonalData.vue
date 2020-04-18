<template lang='pug'>
div(class='container-personal-data')
  ViewHeader(
    title='Personal Data'
    secondaryActionLabel='Back'
    @secondaryActionClick='routerGoBack'
  )
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
        label='Accept Marketing'
        text='Consent to be sent marketing material via email'
      )
      BaseButton(
        text='Save'
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
.container-orders

.orders

</style>
