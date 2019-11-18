import Vue from 'vue'


export default {
  SET_CART (state, { data }) {
    Vue.set(state, 'cart', data)
  },


  DELETE_CART (state) {
    Vue.delete(state, 'cart')
  }
}
