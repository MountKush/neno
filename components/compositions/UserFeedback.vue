<template lang='pug'>
div(class='container-feedback')
  div(class='feedback')
    h3 Rate your Experience
    ul(class='list')
      li(
        v-for='(rating, index) in ratings'
        :key='rating + index'
        class='item'
      )
        div(class='rating') {{ rating }}

</template>


<script>


export default {
  components: {},
  props: {},
  data () {
    return {
      ratings: [
        '🙁',
        '😐',
        '🙂',
        '😃'
      ]
    }
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-feedback
  padding: $unit*7 0
  background: $pri-cl

.feedback

  & h3
    font-size: $fs1
    font-weight: $fw-bold
    text-align: center
    margin-bottom: $unit*2

.list
  display: grid
  grid-auto-flow: column
  grid-gap: $unit*2
  width: min-content
  margin: 0 auto

.item

.rating
  font-size: $fs3

</style>
