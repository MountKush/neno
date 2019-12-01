import Vue from 'vue'

export default {
  SET_CUSTOMER (state, { accessToken, expiresAt }) {
    const customer = { accessToken, expiresAt }
    Vue.set(state, 'customer', customer)
  },


  DELETE_CUSTOMER (state) {
    Vue.set(state, 'customer', null)
  }
}
