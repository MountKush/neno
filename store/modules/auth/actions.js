import axios from 'axios'

export default {
  async signIn ({ commit }) {
    const customer = {
      name: 'test'
    }
    commit('SET_CUSTOMER', { customer })
  },


  async signOut ({ commit }) {
    commit('DELETE_CUSTOMER')
  },
}
