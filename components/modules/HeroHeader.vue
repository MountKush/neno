<template lang='pug'>
header(class='hero-header')
  h3(class='hero-header__title') {{ title }}
  div(
    v-html='text'
    class='hero-header__text'
  )
  div(
    v-for='(button, index) in buttons'
  )
    router-link(
      v-if='button.link'
      :to='button.link'
      class='hero-header__link'
    ) {{ button.label }}
</template>


<script>


export default {
  components: {},
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    buttons: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.hero-header
  text-align: center

  &__title
    font-size: $fs2
    font-weight: $fw-bold

  &__text

  &__link

</style>
