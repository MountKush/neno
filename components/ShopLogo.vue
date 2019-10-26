<template lang='pug'>
div(
  class='container-logo'
)

  div(
    class='logo'
  )

    router-link(
      :to='{ name: "index" }'
      class='logo__link'
    )
      p(
        class='logo__text'
      ) FEED ME SUGAR

</template>


<script>


export default {
  components: {},
  data () {
    return {}
  },
  methods: {}
}
</script>


<style lang='sass' scoped>

.container-logo

.logo

  &__link
    display: flex
    align-items: center
    height: 40px

  &__text
    font-size: $fs
    font-weight: bold

</style>
