<template lang='pug'>
main(class='vue-app')
  NavigationBar
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
import NavigationBar from '~comp/navigationBar/Index.vue'

export default {
  components: {
    NavigationBar,
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
      fetchData: 'app/fetchData'
    })
  },
  created () {
    this.initData()
  }
}
</script>


<style lang='sass'>
@import './assets/sass/main.sass'

.vue-app
  display: grid

  &__nav-bar
    height: $unit*6

  &__error,
  &__view
    min-height: calc(100vh - #{$unit*6})

.fade-enter-active,
.fade-leave-active
  transition: opacity 25ms ease-in

.fade-enter,
.fade-leave-to
  opacity: 0

</style>
