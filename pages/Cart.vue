<template lang='pug'>
div(class='container-cart')

  Cart

</template>


<script>
import { mapGetters } from 'vuex'
import Cart from '~comp/cart/Index.vue'

export default {
  components: {
    Cart
  },
  props: {},
  data () {
    return {}
  },
  computed: {
    settings () {
      const section = this.themeData.find(section => section.type === 'static-cart')
      return section && section.settings
    },


    ...mapGetters({
      themeData: 'app/themeData'
    })
  },
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-cart

.cart

</style>
