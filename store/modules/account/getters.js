import {
  orderFulfillmentStatusMap,
  orderFinancialStatusMap,
  orderCancelReason
} from '~/utils/constants'
import { formatCurrency } from '~/utils/format-currency'
import { processGraphQLEdges } from '~/utils/process-graphql-edges'

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
    const ordersEdges = state.orders?.edges || []
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
  },

  activeAddress(state) {
    const address = state.activeAddress
    if (!address) return
    return {
      address1: address.address1,
      address2: address.address2,
      city: address.city,
      countryCode: address.countryCodeV2,
      firstName: address.firstName,
      id: address.id,
      lastName: address.lastName,
      phone: address.phone,
      provinceCode: address.provinceCode,
      zip: address.zip
    }
  },

  addresses(state) {
    const { addresses, defaultAddress } = state
    const edges = addresses?.edges || []
    return processGraphQLEdges(edges)
      .map((address) => ({
        ...address,
        isDefaultAddress: address.id === defaultAddress.id
      }))
  }
}
