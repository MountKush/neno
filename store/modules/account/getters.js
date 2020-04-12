export default {
  orders (state) {
    const ordersEdges = state.orders.edges || []
    const orders = ordersEdges.map(order => {
      const lineItemsEdges = order.node.lineItems.edges || []
      const lineItems = lineItemsEdges.map(lineItem => {
        const {
          quantity,
          title
        } = lineItem.node
        return {
          quantity,
          title
        }
      })
      return {
        lineItems
      }
    })
    console.log('orders: ', orders)
    return orders
  }
}
