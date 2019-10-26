import Vue from 'vue'

export default {
  SET_COLLECTIONS (state, { collection }) {
    // console.log('SET_COLLECTIONS: ', collection)
    Vue.set(state.collections, collection.id, collection)
  },


  SET_PRODUCTS (state, { product }) {
    // console.log('SET_PRODUCTS: ', product)
    Vue.set(state.products, product.id, product)
  },


  SET_SORTBY_AND_FILTERED_PRODUCTS (state, { products }) {
    state.sortByAndFilteredProducts = products
  },


  DELETE_SORTBY_AND_FILTERED_PRODUCTS (state) {
    state.sortByAndFilteredProducts = []
  }
}
