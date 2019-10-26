<template lang='pug'>
div(
  class='container-account'
)

  div(
    class='account'
  )

    router-link(
      :to='{ name: "account" }'
      class='account__link'
    )
      IconAccount(
        class='account__icon'
      )

</template>


<script>
import IconAccount from '~/assets/svg/icon-account.svg'

export default {
  components: {
    IconAccount
  },
  props: {},
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>

.container-account

.account

  &__link
    position: relative
    width: $unit*5
    height: $unit*5
    display: block
    border-radius: 50%
    background: rgba(255, 255, 255, 0.5)

  &__icon
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)

</style>
