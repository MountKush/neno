import axios from 'axios'


export default {
  async init ({ commit, dispatch, rootState }) {
    try {
      // Only proceed if using theme editor
      if (!window.Shopify.designMode) return
      console.log('SHOPIFY THEME EDITOR MODE')

      const { path } = rootState.route
      const section = 'shopify:section:'
      const block = 'shopify:block:'

      const handleEvent = event => {
        const { sectionId } = event.detail
        commit('app/DELETE_THEME_DATA', { path }, {root:true})
        dispatch('app/initData', {}, {root:true})
        setTimeout(() => {
          const sectionElement = document.querySelector(`.shopify-section-${sectionId}`)
          sectionElement && sectionElement.scrollIntoView()
        }, 500)
      }

      const addListener = eventType => {
        document.addEventListener(`${section}${eventType}`, handleEvent)
      }

      [
        'load',
        'unload',
        'select',
        'deselect',
        'reorder'
      ].forEach(eventType => addListener(eventType))

    }
    catch (e) {
      console.error(e)
    }
  },
}
