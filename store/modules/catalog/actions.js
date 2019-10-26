import { shopifyClient } from '~/utils'
import _ from 'lodash'


export default {
  async fetchProducts ({ commit }) {
    try {
      // const products = await shopifyClient.product.fetchAll()
      // products.forEach(product => commit('SET_PRODUCTS', { product }))
      // console.log('fetchProducts: ', products)
    }
    catch (e) {
      console.error(e)
    }
  },


  async fetchCollectionsWithProducts ({ commit }) {
    try {
      const collections = await shopifyClient.collection.fetchAllWithProducts()
      collections.forEach(collection => commit('SET_COLLECTIONS', { collection }))

      const products = _.flatten(collections.map(collection => collection.products))
      products.forEach(product => commit('SET_PRODUCTS', { product }))
    }
    catch (e) {
      console.error(e)
    }
  },
}
