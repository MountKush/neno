<template lang='pug'>
div(class='container-featured-profile')

  div(class='featured-profile')

    h2(class='featured-profile__title') This week's inspo / The Culture's Featured Inspo

    div(class='featured-profile__card')

      Photo(
        :image='userDetail.image'
        class='featured-profile__user-image'
      )

      div(class='featured-profile__user-detail')
        p(class='featured-profile__name') {{ userDetail.name }}
        p(class='featured-profile__posts') {{ userDetail.posts }} Posts
        p(class='featured-profile__followers') {{ userDetail.posts }} Followers

      p(class='featured-profile__copy') {{ userDetail.copy }}

      h3(class='featured-profile__posts-title') Our Favorites

      div(class='featured-profile__post-images')

        Photo(
          v-for='(image, index) in userPost.images'
          :key='image.src + index'
          :image='image'
          class='featured-profile__post-image'
        )


</template>


<script>
import Photo from '~comp/Photo.vue'
import profileImage from '~/assets/images/featured-profile.jpg'
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
      userDetail: {
        image: {
          src: profileImage,
          aspectRatio: '0 0 1 1'
        },
        name: 'Lana Dey Rey',
        posts: '932',
        followers: '20k',
        copy: 'A fashion editor supervises the process of creating, developing and presenting content for the fashion department of a magazine, Web site, newspaper or television program. The work of a fashion editor can be quite varied and may hold several responsibilities.'
      },
      userPost: {
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
    }
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-featured-profile

.featured-profile
  display: grid
  grid-template-rows: repeat(4, auto)
  grid-template-columns: auto

  &__title
    grid-row: 1 / 2

  &__card
    display: grid
    grid-template-rows: repeat(4, auto)
    grid-template-columns: repeat(2, auto)

  &__user-image
    grid-row: 1 / 3
    grid-column: 1 / 2

  &__user-detail
    grid-row: 1 / 2
    grid-column: 2 / 3
    display: grid
    grid-template-rows: repeat(2, min-content)
    grid-template-columns: repeat(2, min-content)

  &__name
    grid-row: 1 / 2
    grid-column: 1 / 3

  &__posts
    white-space: nowrap

  &__followers
    white-space: nowrap

  &__copy
    grid-row: 2 / 3
    grid-column: 2 / 3

  &__post-title
    grid-row: 3 / 4
    grid-column: 1 / 2

  &__post-images
    grid-row: 4 / 5
    grid-column: 2 / 3
    display: grid
    grid-auto-flow: column
    grid-gap: $unit*3

  &__post-image



</style>
