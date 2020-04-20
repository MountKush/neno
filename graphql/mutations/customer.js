export const customerAccessTokenCreate = ({ email, password}) => `
  mutation {
    customerAccessTokenCreate(input: {
      email: "${email}",
      password: "${password}"
    }) {
      customerUserErrors {
        code
        field
        message
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
    }
  }
`

export const customerActivate = ({ id, activationToken, password }) => `
  mutation {
    customerActivate(id: "${id}", input: {
      activationToken: "${activationToken}",
      password: "${password}"
    }) {
      customerUserErrors {
        code
        field
        message
      }
      customer {
        id
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
    }
  }
`

/**
 * Creates a new address for a customer
 * @param {string} accessToken The access token used to identify the customer
 * @param {object} address The customer mailing address to create
 */
export const customerAddressCreate = ({ accessToken, address }) => `
  mutation {
    customerAddressCreate(customerAccessToken: "${accessToken}", address: {
      address1: "${address.address1}",
      address2: "${address.address2}",
      city: "${address.city}",
      country: "${address.country}",
      firstName: "${address.firstName}",
      lastName: "${address.lastName}",
      phone: "${address.phone}",
      province: "${address.province}",
      zip: "${address.zip}"
    }) {
      customerAddress {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`

export const customerCreate = ({ email, password }) => `
  mutation {
    customerCreate(input: {
      email: "${email}",
      password: "${password}"
    }) {
      customerUserErrors {
        code
        field
        message
      }
      customer {
        id
      }
    }
  }
`

export const customerRecover = ({ email }) => `
  mutation {
    customerRecover(email: "${email}") {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`

export const customerReset = ({ id, resetToken, password }) => `
  mutation {
    customerReset(id: "${id}", input: {
      resetToken: "${resetToken}",
      password: "${password}"
    }) {
      customerUserErrors {
        code
        field
        message
      }
      customer {
        id
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
    }
  }
`

export const customerResetByUrl = ({ resetUrl, password }) => `
  mutation {
    customerResetByUrl(resetUrl: "${resetUrl}", password: "${password}") {
      customerUserErrors {
        code
        field
        message
      }
      customer {
        id
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
    }
  }
`
