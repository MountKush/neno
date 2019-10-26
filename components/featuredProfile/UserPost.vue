<template lang='pug'>
div(class='container-user-post')

  div(class='user-post')
    Photo(
      v-for='(image, index) in images'
      :image='image'
    )


</template>


<script>
import Photo from '~comp/Photo.vue'
import post0 from '~/assets/images/featured-profile_post_0.jpg'
import post1 from '~/assets/images/featured-profile_post_1.jpg'
import post2 from '~/assets/images/featured-profile_post_2.jpg'
import post3 from '~/assets/images/featured-profile_post_3.jpg'


export default {
  components: {
    Photo
  },
  props: {},
  data () {
    return {
      images: [
        {
          src: post0,
          aspectRatio: '0 0 1 1'
        },
        {
          src: post1,
          aspectRatio: '0 0 1 1'
        },
        {
          src: post2,
          aspectRatio: '0 0 1 1'
        },
        {
          src: post3,
          aspectRatio: '0 0 1 1'
        }
      ]
    }
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-user-post

.user-post


</style>
