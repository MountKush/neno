export const mailingAddress = ({ addressId }) => `
  query {
    node(id: "${addressId}") {
      ... on MailingAddress {
        address1
        address2
        city
        countryCodeV2
        firstName
        id
        lastName
        phone
        provinceCode
        zip
      }
    }
  }
`
