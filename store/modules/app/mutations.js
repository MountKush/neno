import Vue from 'vue'


export default {
  SET_THEME_DATA (state, { data, path }) {
    console.log('SET_THEME_DATA: ', data)
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
    console.log('SET_HEADER_DATA: ', data)
    Vue.set(state, 'headerData', data)
    console.log('state: ', state)
  },


  DELETE_THEME_DATA (state, { path }) {
    console.log('DELETE_THEME_DATA')
    Vue.delete(state.themeData, path)
  }
}
