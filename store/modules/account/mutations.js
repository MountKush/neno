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

  SET_ADDRESSES (state, { addresses }) {
    Vue.set(state, 'addresses', addresses)
  },

  SET_DEFAULT_ADDRESS (state, { defaultAddress }) {
    Vue.set(state, 'defaultAddress', defaultAddress)
  },

  DELETE_CUSTOMER (state) {
    state.customer = {}
  }
}
