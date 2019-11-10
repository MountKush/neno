<template lang='pug'>
div(class='container-footer')

  footer(class='footer')

    //- social media links
    ul(class='footer__social-list')
      li(class='footer__social-item')
        a(class='footer__social-link')

    //- site navigation
    //- ul(class='footer__nav-list')
    //-   li(
    //-     v-for='(nav, index) in navLinks'
    //-     :key='nav.text + index'
    //-     class='footer__nav-item'
    //-   )
    //-     router-link(
    //-       :to='{ name: nav.name }'
    //-       class='footer__nav-link'
    //-     ) {{ nav.text }}

    //- copyright
    p(class='footer__copyright') &copy; {{ currentYear }} Feed Me Sugar
</template>


<script>
// import moment from 'moment'


export default {
  components: {},
  props: {},
  data () {
    return {
      navLinks: [
        { text: 'Contact Us', name: 'contactUs' },
        { text: 'Blog', name: 'blog' },
        { text: 'FAQ', name: 'faq' },
        { text: 'Privacy Policy', name: 'privacyPolicy' }
      ]
    }
  },
  computed: {
    currentYear () { return '' }
  },
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-footer
  @extend %container
  background: $black

.footer
  @extend %content
  display: grid
  grid-template-rows: repeat(3, auto)
  grid-gap: $unit*5
  justify-items: center

  &__social-list,
  &__nav-list
    display: grid
    grid-template-rows: auto
    grid-auto-flow: column
    grid-gap: $unit*2


  &__nav-list

  &__copyright
    margin-top: $unit*5
    font-size: 12px
    color: $white
</style>
