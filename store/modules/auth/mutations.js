import Vue from 'vue'

export default {
  SET_CUSTOMER (state, { customer }) {
    Vue.set(state, 'customer', customer)
  },


  DELETE_CUSTOMER (state) {
    Vue.delete(state, 'customer')
  }
}
