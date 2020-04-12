export const customerOrders = ({ accessToken }) => `
  query {
    customer(customerAccessToken: "${accessToken}") {
      orders(first: 5) {
        edges {
          node {
            orderNumber
            statusUrl
            lineItems(first: 5) {
              edges {
                node {
                  quantity
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`
