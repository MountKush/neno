import Vue from 'vue'


export default {
  SET_ORDERS (state, { orders }) {
    Vue.set(state, 'orders', orders)
  },

  SET_ACTIVE_ORDER (state, { order }) {
    Vue.set(state, 'activeOrder', order)
  },

  DELETE_CUSTOMER (state) {
    state.customer = {}
    console.log('DELETE_CUSTOMER_DETAILS: ')
  }
}
