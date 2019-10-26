import Vue from 'vue'


export default {
  SET_THEME_DATA (state, { data, path }) {
    console.log('SET_THEME_DATA: ', data)
    const existingData = state.themeData[path]
    if (existingData) Vue.set(state.themeData, path, [...existingData, data])
    else Vue.set(state.themeData, path, [data])
  },


  SET_HEADER_DATA (state, { data }) {
    console.log('SET_HEADER_DATA: ', data)
    Vue.set(state, 'headerData', data)
    console.log('state: ', state)
  }
}
