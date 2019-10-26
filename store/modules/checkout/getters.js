import _ from 'lodash'


export default {
  lineItemsQuantityTotal (state) {
    return _.isEmpty(state) ? 0 : state.lineItems.reduce((acc, cur) => acc + cur.quantity, 0)
  },


  lineItemsProducts (state, getters, rootState, rootGetters) {
    const { products } = rootState.catalog
    const variants = rootGetters['catalog/variants']
    const { lineItems } = state

    // [item.id] : product.id
    const productsId = {}
    lineItems.forEach(item => variants[item.variant.id] ? productsId[item.id] = variants[item.variant.id]['productId'] : null )

    // [item.id] : product
    const lineItemsProducts = {}
    _.forEach(productsId, (value, key) => lineItemsProducts[key] = products[value])

    return lineItemsProducts
  }
}
