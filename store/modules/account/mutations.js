import Vue from 'vue'


export default {
  SET_ACTIVE_ORDER (state, { order }) {
    Vue.set(state, 'activeOrder', order)
  },

  SET_ORDERS (state, { orders }) {
    Vue.set(state, 'orders', orders)
  },

  SET_ACTIVE_ADDRESS (state, { address }) {
    Vue.set(state, 'activeAddress', address)
  },

  DELETE_ACTIVE_ADDRESS (state) {
    Vue.delete(state, 'activeAddress')
  },

  SET_ADDRESSES (state, { addresses }) {
    Vue.set(state, 'addresses', addresses)
  },

  SET_DEFAULT_ADDRESS (state, { defaultAddress }) {
    Vue.set(state, 'defaultAddress', defaultAddress)
  },

  SET_PERSONAL_DATA (state, { customer }) {
    Vue.set(state, 'personalData', customer)
  }
}
