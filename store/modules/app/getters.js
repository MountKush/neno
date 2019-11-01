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
    console.log('sections: ', sections)
    return sections || []
  }
}
