<template lang='pug'>
div(class='container')

  div(class='')
    h2 {{ settings.collection.title }}
    ProductsGrid(
      :products='settings.collection.products'
      class=''
    )
</template>


<script>
import ProductsGrid from '~comp/modules/ProductsGrid.vue'


export default {
  components: {
    ProductsGrid
  },
  props: {
    settings: {
      type: Object,
      required: true
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
.container

</style>
