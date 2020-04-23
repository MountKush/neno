import Vue from 'vue'
import Toasted from 'vue-toasted'

/**
 * Default Toast options
 * @see https://github.com/shakee93/vue-toasted for Toast documentation
 */
const defaultOptions = {
  action: {
    text: '',
    icon: 'close',
    class: 'toasted__close',
    onClick: (e, toastObject) => toastObject.goAway(0)
  },
  duration: 5000,
  keepOnHover: true,
  singleton: true,
  theme: '',
  /** @see https://material.io/resources/icons/ for icon options */
  iconPack: 'material'
}

Vue.use(Toasted, defaultOptions)

/**
 * Generic message handler
 * @param {Object} payload Toast message content
 * @param {string} payload.title Toast title content
 * @param {string} payload.message Toast body content
 */
const handleMessage = ({ title, message }) => `
  <div class='toasted__content'>
    <h4 class='toasted__title'>${title}</h4>
    <p class='toasted__message'>${message}</p>
  </div>
`

/**
 * Success state
 */
Vue.toasted.register(
  // name
  'success',
  // message handler
  handleMessage,
  // options
  {
    type: 'success',
    icon: 'check_circle_outline'
  }
)

/**
 * Error state
 */
Vue.toasted.register(
  // name
  'error',
  // message handler
  handleMessage,
  // options
  {
    type: 'error',
    icon: 'error_outline'
  }
)
