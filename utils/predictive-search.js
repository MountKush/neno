import PredictiveSearch from '@shopify/theme-predictive-search'

const predictiveSearch = (query) => new Promise((resolve, reject) => {
  const predictiveSearch = new PredictiveSearch({
    resources: {
      type: [PredictiveSearch.TYPES.PRODUCT],
      limit: 6,
      options: {
        unavailable_products: PredictiveSearch.UNAVAILABLE_PRODUCTS.LAST,
        fields: [
          PredictiveSearch.FIELDS.TITLE,
          PredictiveSearch.FIELDS.VENDOR,
          PredictiveSearch.FIELDS.PRODUCT_TYPE,
          PredictiveSearch.FIELDS.VARIANTS_TITLE
        ]
      }
    }
  })

  console.log('predictiveSearch: ', predictiveSearch)
  predictiveSearch.on('success', suggestions => resolve(suggestions))
  predictiveSearch.on('error', error => reject(error))
  predictiveSearch.query(query)
})

export { predictiveSearch }
