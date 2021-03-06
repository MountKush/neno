export default {
  mainMenu (state) {
    const { linklist } = state.headerData
    const links = linklist ? linklist.links : []
    return links
  },


  themeData (state, getters, rootState) {
    const { path } = rootState.route
    const { themeData } = state
    const sections = themeData[path]
    return sections || []
  },


  predictiveSearch (state) {
    const { predictiveSearch } = state
    const data = {
      products: [],
      query: ''
    }
    if (predictiveSearch && predictiveSearch.results && predictiveSearch.results.products) {
      data.products = predictiveSearch.results.products
      data.query = predictiveSearch.query
    }
    return data
  }
}
