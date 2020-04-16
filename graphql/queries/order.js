export const order = ({ orderId }) => `
  query {
    node(id: "${orderId}") {
      ... on Order {
        cancelReason
        canceledAt
        financialStatus
        fulfillmentStatus
        name
        shippingAddress {
          address1
          name
          formattedArea
        }
        processedAt
        subtotalPriceV2 {
          amount
          currencyCode
        }
        totalPriceV2 {
          amount
          currencyCode
        }
        totalShippingPriceV2 {
          amount
          currencyCode
        }
        totalTaxV2 {
          amount
          currencyCode
        }
        lineItems(first: 50) {
          edges {
            node {
              originalTotalPrice {
                amount
                currencyCode
              }
              quantity
              title
              variant {
                title
                image {
                  altText
                  originalSrc
                }
              }
            }
          }
        }
      }
    }
  }
`
