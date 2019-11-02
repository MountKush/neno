<template lang='pug'>
div(class='container-display')

  div(
    v-dragscroll.x='!isTouchDevice'
    class='display'
  )

    Photo(
      v-for='(image, index) in images'
      :key='image + index'
      :src='image.src'
      :aspectRatio='image.aspect_ratio'
      class='display__image'
    )


</template>


<script>
import { dragscroll } from 'vue-dragscroll'
import Photo from '~comp/Photo.vue'


export default {
  directives: {
    'dragscroll': dragscroll
  },
  components: {
    Photo
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      isTouchDevice: false,
    }
  },
  computed: {},
  methods: {},
  created () {
    this.isTouchDevice = 'ontouchstart' in document.documentElement
  }
}
</script>


<style lang='sass' scoped>
.container-display

.display
  // box-shadow: 0 $unit*3 $unit*4 rgba(34, 34, 34, 0.075)
  // padding: $unit
  // scroll-snap-type: x mandatory
  display: grid
  grid-auto-flow: column
  grid-auto-columns: 33vw
  overflow-x: auto
  width: 33vw

  &__image
    // scroll-snap-align: start
    width: 100%

</style>
