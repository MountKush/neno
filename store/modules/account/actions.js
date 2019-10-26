import { firestore, auth } from '~/firebase'


export default {
  async writeName ({}, { firstName, lastName }) {
    try {
      const { uid } = auth().currentUser
      const dbRef = firestore.doc(`queueAuthNameUpdate/${uid}`)
      await dbRef.set({ firstName, lastName })
      return
    }
    catch (e) {
      console.error(e)
      throw e
    }
  },


  async writeEmail ({}, { email }) {
    try {
      const { uid } = auth().currentUser
      const dbRef = firestore.doc(`queueAuthEmailUpdate/${uid}`)
      await dbRef.set({ email })
      return
    }
    catch (e) {
      console.error(e)
      throw e
    }
  },


  async writeShippingAddress ({}, { address, city, state, zipcode, country }) {
    try {
      const { uid } = auth().currentUser
      const dbRef = firestore.doc(`queueShippingAddressUpdate/${uid}`)
      await dbRef.set({ address, city, state, zipcode, country })
      return
    }
    catch (e) {
      console.error(e)
      throw e
    }
  },


  async writePhoneNumber ({}, { phoneNumber }) {
    try {
      const { uid } = auth().currentUser
      const dbRef = firestore.doc(`queuePhoneNumberUpdate/${uid}`)
      await dbRef.set({ phoneNumber })
      return
    }
    catch (e) {
      console.error(e)
      throw e
    }
  },


  watchCustomer ({ commit, dispatch }) {
    const success = (snapshot) => {
      console.log('snapshot: ', snapshot.data())
      commit('SET_CUSTOMER', { customer: snapshot.data() })
    }
    const error = (err) => console.error(err)

    const { uid } = auth().currentUser
    const dbRef = firestore.doc(`customers/${uid}`)

    dbRef.onSnapshot(snapshot => success(snapshot), e => error(e))
  }
}
