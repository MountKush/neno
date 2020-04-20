import Vue from 'vue'
import Toasted from 'vue-toasted'

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
  theme: ''
}

Vue.use(Toasted, defaultOptions)

/**
 * Error state
 */
Vue.toasted.register(
  // name
  'error',
  // message handler
  (payload) => {
    const { title, message } = payload
    return `
      <div class='toasted__content'>
        <h4 class='toasted__title'>${title}</h4>
        <p class='toasted__message'>${message}</p>
      </div>
    `
  },
  // options
  {
    type: 'error',
    icon: 'error_outline'
  }
)
