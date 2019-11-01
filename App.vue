<template lang='pug'>
main(class='vue-app')
  AppNavigationBar(class='vue-app__navigation-bar')
  transition(
    name='fade'
    mode='out-in'
  )
    router-view(
      class='vue-app__view'
    )
  AppFooter
</template>


<script>
import { mapActions } from 'vuex'
import AppFooter from '~comp/footer/Index.vue'
import AppNavigationBar from '~comp/app/AppNavigationBar.vue'

export default {
  components: {
    AppNavigationBar,
    AppFooter
  },
  data () {
    return {}
  },
  computed: {},
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    ...mapActions({
      initData: 'app/initData',
      fetchData: 'app/fetchData',
      themeEditor: 'shopifyThemeEditor/init'
    })
  },
  created () {
    this.initData()
    this.themeEditor()
  }
}
</script>


<style lang='sass'>
@import './assets/sass/main.sass'

.vue-app
  display: grid

  &__navigation-bar
    height: $unit*7

  &__error,
  &__view
    min-height: calc(100vh - #{$unit*7})

.fade-enter-active,
.fade-leave-active
  transition: opacity 25ms ease-in

.fade-enter,
.fade-leave-to
  opacity: 0

</style>
