import axios from 'axios'


export default {
  async fetchCart ({ commit }) {
    const url = '/cart.js'
    const { data } = await axios.get(url)
    commit('SET_CART', { data })
  },


  async addCart ({ commit }, { variantId, quantity }) {
    const config = {
      method: 'post',
      url: '/cart/add.js',
      data: {
        id: variantId,
        quantity
      }
    }
    const { data } = await axios(config)
    commit('SET_CART', { data })
  },


  async updateCart ({ commit }, { variantId, quantity }) {
    const config = {
      method: 'post',
      url: '/cart/update.js',
      data: {
        updates: { [variantId]: quantity }
      }
    }
    const { data } = await axios(config)
    commit('SET_CART', { data })
  },
}
