import _ from 'lodash'


export default {
  products (state) {
    const products = Object.values(state.products)
    return products
  },


  variants (state, getters) {
    const products = getters.products
    const variants = {}

    products.forEach(product => {
      product.variants.forEach(variant => {
        variants[variant.id] = { productId: product.id, ...variant }
      })
    })

    return variants
  },


  productDealOfTheDay (state) {
    const products = Object.values(state.products)
    return products.filter(product => {
      return product.tags.find(tag => tag.value.match(/deal_of_the_day/i))
    })
  }

}
