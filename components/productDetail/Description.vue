<template lang='pug'>
div(class='container-description')

  div(class='description')
    p(class='description__copy') {{ product.description }}

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
