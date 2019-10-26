import axios from 'axios'


export default {
  async initData ({ commit, rootState }) {
    try {
      console.log('initData')
      const { path } = rootState.route
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
      const { path } = rootState.route
      const { themeData } = state
      if (themeData[path]) {
        console.log('already have data')
        return
      }

      const url = `https://feed-me-sugar.myshopify.com${path}?view=endpoint`
      const { data } = await axios.get(url)
      const parser = new DOMParser()
      const parsedHtml = parser.parseFromString(data, 'text/html')
      // Get section data
      const sectionScript = parsedHtml.querySelectorAll('.section-data')
      sectionScript.forEach(script => {
        const sectionData = JSON.parse(script.textContent)
        commit('SET_THEME_DATA', { data: sectionData, path })
      })
    }
    catch (e) {
      console.error(e)
    }
  },
}
