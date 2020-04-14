export const customerOrders = ({ accessToken }) => `
  query {
    customer(customerAccessToken: "${accessToken}") {
      orders(first: 5) {
        edges {
          node {
            canceledAt
            financialStatus
            fulfillmentStatus
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
