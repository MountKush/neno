import {
  orderFulfillmentStatusMap,
  orderFinancialStatusMap,
  orderCancelReason
} from '~/utils/constants'
import { formatCurrency } from '~/utils/format-currency'

export default {
  activeOrder(state) {
    const order = state.activeOrder
    if (!order) return
    const lineItems = order.lineItems?.edges?.map(edge =>
      ({
        ...edge.node,
        originalTotalPrice: formatCurrency({ ...edge.node.originalTotalPrice })
      })
    )
    return {
      cancelReason: orderCancelReason[order.cancelReason],
      canceledAt: order.canceledAt,
      financialStatus: orderFinancialStatusMap[order.financialStatus],
      fulfillmentStatus: orderFulfillmentStatusMap[order.fulfillmentStatus],
      name: order.name,
      shippingAddress: {
        address1: order.shippingAddress?.address1 || '',
        name: order.shippingAddress?.name || '',
        formattedArea: order.shippingAddress?.formattedArea || ''
      },
      processedAt: new Date(order.processedAt).toDateString(),
      subtotalPrice: formatCurrency({ ...order.subtotalPriceV2 }),
      totalPrice: formatCurrency({ ...order.totalPriceV2 }),
      totalShippingPrice: formatCurrency({ ...order.totalShippingPriceV2 }),
      totalTax: formatCurrency({ ...order.totalTaxV2 }),
      lineItems
    }
  },

  orders(state) {
    const ordersEdges = state.orders.edges || []
    const orders = ordersEdges.map(order => {
      const {
        canceledAt,
        financialStatus,
        fulfillmentStatus,
        id,
        name,
        orderNumber,
        processedAt,
        totalPriceV2
      } = order.node

      const lineItemsEdges = order.node.lineItems.edges || []
      const lineItems = lineItemsEdges.map(lineItem => ({ ...lineItem.node }))

      return {
        canceledAt,
        financialStatus: orderFinancialStatusMap[financialStatus],
        fulfillmentStatus: orderFulfillmentStatusMap[fulfillmentStatus],
        id,
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
