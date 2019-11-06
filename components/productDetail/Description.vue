<template lang='pug'>
div(class='container-description')

  div(
    v-html='product.description'
    class='description'
  )

</template>


<script>

export default {
  components: {},
  props: {
    product: {
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

</style>
