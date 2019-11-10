import Vue from 'vue'


export default {
  SET_THEME_DATA (state, { data, path }) {
    const existingData = state.themeData[path]
    if (existingData) {
      const newData = existingData.find(d => d.id === data.id) ?
        existingData.map(obj => obj.id === data.id ? data : obj) :
        [...existingData, data]

      Vue.set(state.themeData, path, newData)
    }
    else Vue.set(state.themeData, path, [data])
  },


  SET_HEADER_DATA (state, { data }) {
    Vue.set(state, 'headerData', data)
  },


  DELETE_THEME_DATA (state, { path }) {
    Vue.delete(state.themeData, path)
  },


  OPEN_DRAWER (state, { id }) {
    state.drawer = id
  },


  CLOSE_DRAWER (state) {
    state.drawer = ''
  },


  SET_PREDICTIVE_SEARCH (state, { products, query }) {
    Vue.set(state, 'predictiveSearch', { products, query })
  },


  CLEAR_PREDICTIVE_SEARCH (state) {
    Vue.set(state, 'predictiveSearch', { products: [], query: '' })
  }
}
