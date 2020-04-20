import Vue from 'vue'
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  setInteractionMode
} from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
import {
  isAlpha,
  isEmail
} from 'validator'

/**
 * Strategy regarding when to validate
 * @see https://logaretm.github.io/vee-validate/guide/interaction-and-ux.html#interaction-modes
 */
setInteractionMode('eager')

/**
 * Check if the string contains only letters (a-zA-Z)
 */
extend('isAlpha', (value) => isAlpha(value))

/**
 * Check if the string is an email
 */
extend('isEmail', (value) => isEmail(value))

/**
 * Check if the string is present
 */
extend('required', required)

/**
 * Registers component globally
 */
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
