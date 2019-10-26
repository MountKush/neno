<template lang='pug'>
div(class='container-product-detail')

  div(class='product-detail')

    Controller(
      :sections='sections'
      :activeSection='activeSection'
      @handleClick='setActiveSection'
      class='product-detail__controller'
    )

    a(
      @click='setActiveSection("Description")'
      :class='{ active: activeSection === "Description" }'
      class='product-detail__section'
    ) Description

    Description(
      v-show='activeSection === "Description"'
      :product='product'
      class='product-detail__description'
    )

    //- a(
    //-   @click='setActiveSection("Reviews")'
    //-   :class='{ active: activeSection === "Reviews" }'
    //-   class='product-detail__section'
    //- ) Reviews
    //-
    //- Reviews(
    //-   v-show='activeSection === "Reviews"'
    //-   :product='product'
    //-   class='product-detail__reviews'
    //- )

    a(
      @click='setActiveSection("Shipping & Return")'
      :class='{ active: activeSection === "Shipping & Return" }'
      class='product-detail__section'
    ) Shipping &amp; Return

    ShippingReturn(
      v-show='activeSection === "Shipping & Return"'
      :product='product'
      class='product-detail__shipping-return'
    )


</template>


<script>
import Controller from './Controller.vue'
import Description from './Description.vue'
import Reviews from './Reviews.vue'
import ShippingReturn from './ShippingReturn.vue'


export default {
  components: {
    Controller,
    Description,
    Reviews,
    ShippingReturn
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      sections: [
        'Description',
        // 'Reviews',
        'Shipping & Return'
      ],
      activeSection: 'Description',
    }
  },
  computed: {},
  methods: {
    setActiveSection (section) {
      this.activeSection = section
    }
  }
}
</script>


<style lang='sass' scoped>
.container-product-detail
  @extend %container


.product-detail
  @extend %content
  display: grid
  grid-gap: $unit*3
  +mq-m
    grid-template-rows: auto minmax($unit*34, auto)
    grid-gap: $unit*4 0

  &__controller
    display: none
    +mq-m
      display: unset
      grid-row: 1 / 2

  &__description,
  &__reviews,
  &__shipping-return
    height: $unit*34
    overflow: auto
    +mq-m
      height: unset
      overflow: unset
      grid-row: 2 / 3

  &__section
    position: relative

    +mq-m
      display: none

    &::after
      content: '+'
      position: absolute
      right: $unit*3

    &.active

      &::after
        content: ''


</style>
