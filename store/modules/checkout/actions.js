import { shopifyClient } from '~/utils'


export default {
  async initCheckout ({ commit, dispatch }) {
    try {
      const checkoutId = localStorage.getItem('checkoutId')
      const checkout = checkoutId ? await dispatch('fetchCheckout', { checkoutId }) : await dispatch('createCheckout')

      commit('SET_CHECKOUT', { checkout })
      localStorage.setItem('checkoutId', checkout.id)
    }
    catch (e) {
      console.error(e)
    }
  },


  async createCheckout () {
    try {
      const checkout = await shopifyClient.checkout.create()
      // console.log('createCheckout: ', checkout)
      return checkout
    }
    catch (e) {
      console.error(e)
    }
  },


  async fetchCheckout ({}, { checkoutId }) {
    try {
      const checkout = await shopifyClient.checkout.fetch(checkoutId)
      // console.log('fetchCheckout: ', checkout)
      return checkout
    }
    catch (e) {
      console.error(e)
    }
  },


  async addLineItems ({ state, commit }, { lineItems }) {
    try {
      const checkoutId = state.id
      const checkout = await shopifyClient.checkout.addLineItems(checkoutId, lineItems)
      commit('SET_CHECKOUT', { checkout })
      return checkout
    }
    catch (e) {
      console.error(e)
      throw e
    }
  },


  async removeLineItems ({ state, commit }, { lineItems }) {
    try {
      const checkoutId = state.id
      const checkout = await shopifyClient.checkout.removeLineItems(checkoutId, lineItems)
      // console.log('removeLineItems: ', checkout)
      commit('SET_CHECKOUT', { checkout })
    }
    catch (e) {
      console.error(e)
    }
  },


  async updateLineItems ({ state, commit }, { lineItems }) {
    try {
      console.log('called it')
      const checkoutId = state.id
      const checkout = await shopifyClient.checkout.updateLineItems(checkoutId, lineItems)
      // console.log('updateLineItems: ', checkout)
      commit('SET_CHECKOUT', { checkout })
    }
    catch (e) {
      console.error(e)
    }
  },


  async addDiscount ({ state, commit }, { discountCode }) {
    try {
      const checkoutId = state.id
      const checkout = await shopifyClient.checkout.addDiscount(checkoutId, discountCode)
      commit('SET_CHECKOUT', { checkout })
    }
    catch (e) {
      console.error(e)
      throw e
    }
  }
}
