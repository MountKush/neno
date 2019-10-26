<template lang='pug'>
div(class='container-faq')

  div(class='faq')
    Hero(
      :header='header'
      class='faq__hero'
    )

    ul(class='faq__list')
      li(
        v-for='(item, index) in faq'
        :key='item + index'
        class='faq__item'
      )
        h2(class='faq__title') {{ item.title }}
        p(class='faq__copy') {{ item.copy }}

</template>


<script>
import Hero from '~comp/Hero.vue'


export default {
  components: {
    Hero
  },
  props: {},
  data () {
    return {
      header: {
        title: 'FAQ',
        copy: 'You got questions, we got answers.'
      },
      faq: [
        {
          title: 'What currency do you charge?',
          copy: 'All of our products are priced in United States Dollar (USD).'
        },
        {
          title: 'How can I contact you?',
          copy: 'Feed Me Sugar operates through a mobile office. The most efficient and quickest way to contact us is by sending an email (support@feedmesugar.com). We will get back to you as soon as possible.'
        },
        {
          title: 'What are your operating hours?',
          copy: 'Our office hours are 9:00am - 5:00pm, Monday - Friday (Eastern Daylight Time). Any enquiries that are made outside of our office hours or over the weekend will be responded to as soon as possible upon our return to the office.'
        },
        {
          title: 'What payment methods do you accept?',
          copy: 'We accept all major credit card payment providers.'
        },
        {
          title: 'What if I need to change or cancel my order?',
          copy: 'Contact customer support (support@feedmesugar.com) as soon as possible. Once an order is shipped, we\'re unable to make any alterations. Should you no longer want your purchase after the fact, you will need to request a refund and send the unwanted items back once received.'
        },
        {
          title: 'What if I\'m not satified with the product(s) received?',
          copy: 'No worries! We offer full refunds, up to the order total, no questions asked. Request a refund (support@feedmesugar.com) and send the unwanted items back. Once we receive the product(s), a refund will be issued. The product(s) must be returned within 30 days of receiving the order.'
        },
        {
          title: 'When will my order arrive?',
          copy: 'After an order has been processed, please check your email for your Package Tracking ID to track the location of your package. Please note that shipping time can range between 7 to 20 days.'
        },
        {
          title: 'Will I have to pay any taxes or duties on top of my order?',
          copy: 'Regulations for import duties and taxes as they relate to international purchases made online vary from country to country. Please be aware that Feed Me Sugar will not be held liable for any fee, duties and taxes which may be applied to your order by customs in the country where delivery is made, or if your product is seized by customs. The responsibility for any custom duties, foreign taxes or other fees, which may be imposed to your order, will rest with the customer and will not be reimbursed. Import duties and taxes are not included in the item price.'
        },
        {
          title: 'Is it safe to order from your online store?',
          copy: 'Yes. Our system does NOT store any credit card details nor do we share your personal information with any third party.'
        },
      ]
    }
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-faq


.faq
  display: grid
  grid-gap: $unit*5 0

  &__list
    @extend %container
    display: grid
    grid-gap: $unit*10 0


  &__item
    @extend %content
    display: grid
    grid-gap: $unit 0

  &__title
    font-size: $fs1

  &__copy

</style>
