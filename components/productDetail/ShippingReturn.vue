<template lang='pug'>
div(class='container-shipping-return')

  ul(class='shipping-return')
    li(
      v-for='(item, index) in policy'
      :key='item + index'
      class='shipping-return__item'
    )
      h3(class='shipping-return__title') {{ item.title }}
      p(class='shipping-return__copy') {{ item.copy }}
</template>


<script>

export default {
  components: {},
  props: {},
  data () {
    return {
      policy: [
        {
          title: 'Shipping',
          copy: 'Please allow between 7-20 days for your order to arrive. If more than 20 days have passed please email us (support@feedmesugar.com) to review the status of your order. Refunds will be handled through email if necessary.'
        },
        {
          title: 'Returns',
          copy: 'Our policy lasts 30 days. If 30 days have gone by since your order was received, unfortunately we cannot offer you a refund or exchange. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.'
        }
      ]
    }
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-shipping-return

.shipping-return
  display: grid
  grid-gap: $unit*5 0

  &__item
    display: grid
    grid-gap: $unit 0

  &__title
    font-weight: bold

  &__copy

</style>
