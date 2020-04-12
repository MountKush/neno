import Vue from 'vue'


export default {
  SET_ORDERS (state, { orders }) {
    Vue.set(state, 'orders', orders)
  },


  DELETE_CUSTOMER (state) {
    state.customer = {}
    console.log('DELETE_CUSTOMER_DETAILS: ')
  }
}
