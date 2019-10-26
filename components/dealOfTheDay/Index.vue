<template lang='pug'>
div(class='container-promotion')

  div(class='promotion')

    h3(class='promotion__title') Deals of the Day

    Carousel(
      :paginationEnabled='false'
      :perPageCustom='[[0, 2], [520, 3], [1024, 4]]'
      :scrollPerPage='false'
      class='promotion__list'
    )
      Slide(
        class='promotion__item'
      )
        div(class='promotion__countdown')
          h3(class='promotion__countdown-title') Time Remaining
          p(
            :style='{ opacity: countDownOpacity ? 1 : 0.25 }'
            class='promotion__countdown-time'
          ) {{ countDown.hours }}:{{ countDown.minutes }}:{{ countDown.seconds }}

      Slide(
        v-for='(product, index) in products.filter((a, i) => i <= 8)'
        :key='product.id'
        class='promotion__item'
      )
        ProductCard(
          :product='product'
          class='promotion__product'
        )
</template>


<script>
// import moment from 'moment'
import { Carousel, Slide } from 'vue-carousel'
import ProductCard from '~comp/ProductCard.vue'


export default {
  components: {
    ProductCard,
    Carousel,
    Slide
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      countDown: {
        hours: '00',
        minutes: '00',
        seconds: '00'
      },
      countDownOpacity: false
    }
  },
  computed: {},
  methods: {
    // handleCountDown () {
    //   const updatedAt = moment(this.products[0].updatedAt)
    //   const end = moment().endOf('day')
    //   const timeLeft = moment(end.diff(moment() - updatedAt))
    //
    //   setInterval(() => {
    //     timeLeft.subtract(1, 'seconds')
    //     this.countDown.hours = timeLeft.format('HH')
    //     this.countDown.minutes = timeLeft.format('mm')
    //     this.countDown.seconds = timeLeft.format('ss')
    //     this.countDownOpacity = !this.countDownOpacity
    //   }, 1000)
    // }
  },
  created () {
    // this.handleCountDown()
  }
}
</script>


<style lang='sass' scoped>
.container-promotion
  @extend %container
  // background: rgba(248, 248, 248, 1)

.promotion
  @extend %content
  display: grid
  grid-template-rows: repeat(2, auto)
  grid-template-columns: 1fr
  grid-gap: $unit*3 0

  &__title
    font-size: $fs
    font-weight: bold
    white-space: nowrap
    +mq-s
      font-size: $fs1

  &__countdown
    height: 100%
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    border: 1px solid $grey

    &-title,
    &-time
      font-size: 12px
      color: $dark
      +mq-s
        font-size: $fs

    &-time
      transition: opacity 750ms ease-out

  &__list

  &__item
    padding: 0 $unit

</style>
