<template lang='pug'>
div(class='container-image-ratio-sizer')

  div(
    class='image-ratio-sizer'
  )
    svg(
      :viewBox='image.aspectRatio'
      class='image-ratio-sizer__svg'
    )
    img(
      v-show='status.loaded'
      :src='src'
      class='image-ratio-sizer__image'
    )
</template>


<script>
import { loadImage } from '~/utils/load-image'


export default {
  components: {},
  props: {
    image: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      observer: null,
      intersected: false,
      status: { loading: false, loaded: false, error: false },
      src: '',
    }
  },
  computed: {

  },
  watch: {
    intersected (value) {
      this.status.loaded && value ? null : this.loadImage()
    }
  },
  methods: {
    async loadImage () {
      try {
        this.setStatus({ state: 'loading' })
        const { url, ratio } = await loadImage({ url: this.image.src })
        this.src = url
        this.setStatus({ state: 'loaded' })
      }
      catch (e) {
        this.setStatus({ state: 'error' })
        console.error(e)
      }
    },


    setStatus ({ state }) {
      this.status.loading = false
      this.status.loaded = false
      this.status.error = false
      this.status[state] = true
    },


    initObserver () {
      this.observer = new IntersectionObserver(entries => {
        const image = entries[0]
        if (image.isIntersecting) {
          this.intersected = true
          this.observer.disconnect()
        }
      })
      this.observer.observe(this.$el)
    }
  },
  mounted () {
    this.initObserver()
  },
  updated () {
    this.src !== this.image.src ? this.loadImage() : null
  },
  destroyed () {
    this.observer.disconnect()
  }
}
</script>


<style lang='sass' scoped>
.container-image-ratio-sizer


.image-ratio-sizer
  display: grid
  background: rgba(249, 249, 249, 1)

  &__svg,
  &__image
    grid-area: 1 / 1 / 2 / 2

  &__image
    width: 100%
    height: 100%
    object-fit: cover
</style>
