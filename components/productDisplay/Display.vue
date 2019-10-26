<template lang='pug'>
div(class='container-display')

  div(class='display')

    Photo(
      :image='{ src: variant.image.src, aspectRatio: "0 0 268 357" }'
      class='display__image'
    )


</template>


<script>
import Photo from '~comp/Photo.vue'

export default {
  components: {
    Photo
  },
  props: {
    variant: {
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
.container-display

.display
  box-shadow: 0 $unit*3 $unit*4 rgba(34, 34, 34, 0.075)
  padding: $unit

</style>
