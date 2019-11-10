import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  observer: true,
  observerOptions: {
    rootMargin: '0px',
    threshold: 0.1
  },
  filter: {
    shopify (listener, options) {
      const { src, el } = listener
      const { clientWidth } = el
      const isShopifyCDN = /cdn.shopify.com/

      if (!isShopifyCDN.test(src)) return

      const srcStart = src.substring(0, src.indexOf('.jpg'))
      const srcEnd = src.substring(src.indexOf('.jpg'), src.length)
      const imageWidth = Math.round(window.devicePixelRatio > 1 ? clientWidth * window.devicePixelRatio : clientWidth * 1.25)
      srcStart && srcEnd ? listener.src = `${srcStart}_${imageWidth}x${srcEnd}` : null
    }
  }
})
