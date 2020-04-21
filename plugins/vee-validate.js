import Vue from 'vue'
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  setInteractionMode
} from 'vee-validate'
import {
  alpha_spaces,
  required
} from 'vee-validate/dist/rules'
import {
  isAlpha,
  isAlphanumeric,
  isAscii,
  isBoolean,
  isEmail,
  isMobilePhone,
  isNumeric
} from 'validator'

/**
 * Strategy regarding when to validate
 * @see https://logaretm.github.io/vee-validate/guide/interaction-and-ux.html#interaction-modes
 */
setInteractionMode('eager')

/**
 * Check if the string contains only letters (a-zA-Z)
 */
extend('isAlpha', alpha_spaces)

/**
 * Check if the string contains only letters and numbers
 */
extend('isAlphanumeric', (value) => isAlphanumeric(value))

/**
 * Check if the string contains ASCII chars only
 */
extend('isAscii', (value) => isAscii(value))

/**
 * Check if a string is a boolean
 */
extend('isBoolean', (value) => isBoolean(value.toString()))

/**
 * Check if the string is an email
 */
extend('isEmail', (value) => isEmail(value))

/**
 * Check if the string is a mobile phone number
 */
extend('isMobilePhone', (value) => isMobilePhone(value))

/**
 * Check if the string contains only numbers
 */
extend('isNumeric', (value) => isNumeric(value))

/**
 * Check if the string is present
 */
extend('required', required)

/**
 * Registers component globally
 */
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
