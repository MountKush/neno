<template lang='pug'>
div(class='container')

  div(class='')
    h1 Register
    div(
      v-for='(section, index) in themeData'
      :key='section + index'
    )
      div(
        v-if='section.type === "static-account-auth"'
        v-html='section.settings.form.customerLogin'
      )

</template>


<script>
import { mapState, mapGetters } from 'vuex'


export default {
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      themeData: 'app/themeData'
    })
  },
  methods: {}
}
</script>


<style lang='sass' scoped>
.container

</style>
