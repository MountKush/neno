/**
 * Queries a customer's addresses
 */
export const customerAddresses = ({ accessToken }) => `
  query {
    customer(customerAccessToken: "${accessToken}") {
      addresses(first: 5) {
        edges {
          node {
            formatted(withName: true)
            id
          }
        }
      }
      defaultAddress {
        id
      }
    }
  }
`

/**
 * Queries a customer's default address
 */
export const customerDefaultAddress = ({ accessToken }) => `
  query {
    customer(customerAccessToken: "${accessToken}") {
      defaultAddress {
        id
      }
    }
  }
`

/**
 * Queries a customer's orders
 */
export const customerOrders = ({ accessToken }) => `
  query {
    customer(customerAccessToken: "${accessToken}") {
      orders(first: 5) {
        edges {
          node {
            canceledAt
            financialStatus
            fulfillmentStatus
            id
            name
            orderNumber
            processedAt
            totalPriceV2 {
              amount
              currencyCode
            }
            lineItems(first: 5) {
              edges {
                node {
                  currentQuantity
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
    }
  }
`
