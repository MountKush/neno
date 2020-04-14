import { orderFulfillmentStatusMap, orderFinancialStatusMap } from '~/utils/constants'
import { formatCurrency } from '~/utils/format-currency'

export default {
  orders (state) {
    const ordersEdges = state.orders.edges || []
    const orders = ordersEdges.map(order => {
      const {
        canceledAt,
        financialStatus,
        fulfillmentStatus,
        name,
        orderNumber,
        processedAt,
        totalPriceV2
      } = order.node
      const lineItemsEdges = order.node.lineItems.edges || []
      const lineItems = lineItemsEdges.map(lineItem => {
        const {
          currentQuantity,
          quantity,
          title,
          variant
        } = lineItem.node
        return {
          currentQuantity,
          quantity,
          title,
          variant
        }
      })
      return {
        canceledAt,
        financialStatus: orderFinancialStatusMap[financialStatus],
        fulfillmentStatus: orderFulfillmentStatusMap[fulfillmentStatus],
        name,
        orderNumber,
        processedAt: new Date(processedAt).toDateString(),
        totalPrice: formatCurrency({ ...totalPriceV2 }),
        lineItems
      }
    })
    console.log('orders: ', orders)
    return orders
  }
}
