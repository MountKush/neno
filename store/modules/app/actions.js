import axios from 'axios'
import { parseScriptJson } from '~/utils/parseScriptJson'
import { predictiveSearch } from '~/utils/predictive-search'


export default {
  async initData ({ commit, rootState }) {
    try {
      console.log('initData')
      const { path } = rootState.route
      console.log('path: ', path)
      // Get section data
      const sectionScript = document.querySelectorAll('.section-data')
      sectionScript.forEach(script => {
        const sectionData = JSON.parse(script.textContent)
        commit('SET_THEME_DATA', { data: sectionData, path })
      })
      // Get header data
      const generalScript = document.getElementById('header-data')
      // console.log('text: ', generalScript.textContent)
      const generalData = JSON.parse(generalScript.textContent)
      commit('SET_HEADER_DATA', { data: generalData })
    }
    catch (e) {
      console.error(e)
    }
  },


  async fetchData ({ commit, state, rootState }) {
    try {
      console.log('fetchData')
      const { path, fullPath, query } = rootState.route
      console.log('path: ', path)
      const { themeData } = state
      // if (themeData[path]) {
      //   console.log('already have data')
      //   return
      // }

      const config = {
        method: 'get',
        url: path,
        params: {
          ...query,
          view: 'endpoint'
        }
      }

      console.log('config: ', config)

      const { data } = await axios(config)
      const json = parseScriptJson({ data, scriptName: '.section-data' })
      json.forEach(json =>
        commit('SET_THEME_DATA', { data: json, path })
      )
    }
    catch (e) {
      console.error(e)
    }
  },


  async fetchSection ({ commit, state, rootState }, {sectionId}) {
    try {
      console.log('fetchSection')
      const { path } = rootState.route
      const { themeData } = state


      const url = `/?section_id=${sectionId}`
      const { data } = await axios.get(url)
      const json = parseScriptJson({ data, scriptName: '.section-data' })
      json.forEach(json =>
        commit('SET_THEME_DATA', { data: json, path })
      )
    }
    catch (e) {
      console.error(e)
    }
  },


  async search ({ commit, state, rootState }, {query}) {
    try {
      console.log('search: ', query)
      const { themeData } = state

      const url = `https://feed-me-sugar.myshopify.com/search?section_id=static-search&type=product&q=${query}`
      const res = await axios.get(url)
      console.log('res: ', res)
      const data = res.data
      return parseScriptJson({ data, scriptName: '.section-data' })
    }
    catch (e) {
      console.error(e)
    }
  },


  async predictiveSearch ({ commit }, query) {
    const res = await predictiveSearch(query)
    console.log('query result: ', res)
    const products = res.resources && res.resources.results && res.resources.results.products
    commit('SET_PREDICTIVE_SEARCH', { products: products || [], query: res.query })
    return
  }
}
