<template lang='pug'>
div(class='container-user-detail')

  div(class='user-detail')
    Photo(
      :image='image'
    )

</template>


<script>
import Photo from '~comp/Photo.vue'
import profileImage from '~/assets/images/featured-profile.jpg'


export default {
  components: {
    Photo
  },
  props: {},
  data () {
    return {
      image: {
        src: profileImage,
        aspectRatio: '0 0 1 1'
      }
    }
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-user-detail

.user-detail

</style>
