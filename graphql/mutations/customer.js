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

/**
 * Permanently deletes the address of an existing customer.
 * @param {string} accessToken The access token used to identify the customer.
 * @param {object} id Specifies the address to delete.
 */
export const customerAddressDelete = ({ accessToken, id }) => `
  mutation {
    customerAddressDelete(customerAccessToken: "${accessToken}", id: "${id}") {
      deletedCustomerAddressId
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`

/**
 * Creates a new address for a customer.
 * @param {string} accessToken The access token used to identify the customer.
 * @param {object} address The customer mailing address to create.
 * @param {string} id Specifies the customer address to update.
 */
export const customerAddressUpdate = ({ accessToken, address, id }) => `
  mutation {
    customerAddressUpdate(
      customerAccessToken: "${accessToken}",
      id: "${id}",
      address: {
        address1: "${address.address1}",
        address2: "${address.address2}",
        city: "${address.city}",
        country: "${address.country}",
        firstName: "${address.firstName}",
        lastName: "${address.lastName}",
        phone: "${address.phone}",
        province: "${address.province}",
        zip: "${address.zip}"
      }
    ) {
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

/**
 * Updates the default address of an existing customer.
 * @param {string} accessToken The access token used to identify the customer.
 * @param {object} addressId ID of the address to set as the new default for the customer.
 */
export const customerDefaultAddressUpdate = ({ accessToken, addressId }) => `
  mutation {
    customerDefaultAddressUpdate(customerAccessToken: "${accessToken}", addressId: "${addressId}") {
      customerUserErrors {
        code
        field
        message
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

/**
 * Updates an existing customer.
 * @param {string} accessToken The access token used to identify the customer.
 * @param {object} customer The customer object input.
 */
export const customerPersonalDataUpdate = ({ accessToken, customer }) => `
  mutation {
    customerUpdate(
      customerAccessToken: "${accessToken}",
      customer: {
        acceptsMarketing: ${customer.acceptsMarketing},
        email: "${customer.email}",
        firstName: "${customer.firstName}",
        lastName: "${customer.lastName}",
        phone: "${customer.phone}"
      }
    ) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`

/**
 * Updates an existing customer.
 * @param {string} accessToken The access token used to identify the customer.
 * @param {string} password The login password used by the customer.
 */
export const customerPasswordUpdate = ({ accessToken, password }) => `
  mutation {
    customerUpdate(
      customerAccessToken: "${accessToken}",
      customer: { password: "${password}" }
    ) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`
