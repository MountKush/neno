<template lang='pug'>
main(class='vue-app')
  AppNavigationBar(class='vue-app__navigation-bar')
  AppPredictiveSearch
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
import { mapState, mapMutations, mapActions } from 'vuex'
import AppFooter from '~comp/app/Footer.vue'
import AppNavigationBar from '~comp/app/NavigationBar.vue'
import AppPredictiveSearch from '~comp/compositions/PredictiveSearch.vue'


export default {
  components: {
    AppNavigationBar,
    AppPredictiveSearch,
    AppFooter
  },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      drawer: state => state.app.drawer
    })
  },
  watch: {
    $route (to, from) {
      if (to.path !== from.path) {
        this.fetchData()
        this.closeDrawer()
      }
    }
  },
  methods: {
    ...mapMutations({
      closeDrawer: 'app/CLOSE_DRAWER'
    }),


    ...mapActions({
      initData: 'app/initData',
      fetchData: 'app/fetchData',
      themeEditor: 'shopifyThemeEditor/init'
    })
  },
  created () {
    this.initData()
    this.themeEditor()
  },
  beforeRouteUpdate (to, from, next) {
    this.closeDrawer()
    console.log('????')
    next()
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
