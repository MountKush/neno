import { auth } from '~/firebase'

const currentUser = () => auth().currentUser

export default {
  watchAuthState ({ commit, dispatch }) {
    auth().onAuthStateChanged(authUser => {
      if (authUser) {
        commit('SET_AUTH_USER', { authUser })
        // dispatch('presence/authPresence', {}, { root: true })
      } else {
        commit('DELETE_AUTH_USER')
        dispatch('signInAnonymously')
      }
    })
  },


  async createUserWithEmailAndPassword ({}, { email, password }) {
    try { await auth().createUserWithEmailAndPassword(email, password) }
    catch (e) {
      console.error(e)
      throw e
    }
  },


  async signInAnonymously () {
    try { await auth().signInAnonymously() }
    catch (e) { console.error(e) }
  },


  async signInWithEmailAndPassword ({}, { email, password }) {
    try { await auth().signInWithEmailAndPassword(email, password) }
    catch (e) {
      console.error(e)
      return e
    }
  },


  async signOut () {
    try { await auth().signOut() }
    catch (e) { console.error(e) }
  },


  async updateProfile ({ dispatch }, payload) {
    try {
      await currentUser().updateProfile(payload)

      await dispatch('users/updateCurrentUser', payload, { root: true })
      console.log('auth ---> ', payload)
    }
    catch (e) { console.error(e) }
  },


  async updateEmail ({}, payload) {
    try { await currentUser().updateEmail(payload.newEmail) }
    catch (e) { console.error(e) }
  },


  async sendEmailVerification ({}, payload) {
    try { await currentUser().useDeviceLanguage().sendEmailVerification() }
    catch (e) { console.error(e) }
  },


  async updatePassword ({ dispatch }, { currentPassword, newPassword }) {
    try {
      const { currentUser } = auth()
      const credential = auth.EmailAuthProvider.credential(currentUser.email, currentPassword)
      const res = await dispatch('reauthenticateAndRetrieveDataWithCredential', { credential })
      console.log('res: ', res)
      await currentUser.updatePassword(newPassword)
      return
    }
    catch (e) { console.error(e) }
  },


  async sendPasswordResetEmail ({}, { email }) {
    try { console.log('/??/') } //await currentUser().sendPasswordResetEmail(email) }
    catch (e) {
      console.error(e)
      return e
    }
  },


  async deleteUserAccount ({ commit }, payload) {
    try {
      await currentUser().delete()
      commit('DELETE_AUTH_USER')
    }
    catch (e) { console.error(e) }
  },


  async reauthenticateAndRetrieveDataWithCredential ({}, { credential }) {
    try {
      return await auth().currentUser.reauthenticateAndRetrieveDataWithCredential(credential)
    }
    catch (e) { console.error(e) }
  },


  async signInWithFacebook ({}, {}) {
    try {
      const provider = new auth.FacebookAuthProvider()
      const result = await auth().signInWithPopup(provider)
      console.log('result: ', result)
    }
    catch (e) {
      console.error(e)
    }
  },


  async signInWithGoogle ({}, {}) {
    try {
      const provider = new auth.GoogleAuthProvider()
      const result = await auth().signInWithPopup(provider)
      console.log('result: ', result)
    }
    catch (e) {
      console.error(e)
    }
  },


  async signInWithTwitter ({}, {}) {
    try {
      // const provider = new firebase.auth.GoogleAuthProvider()
      // const result = await firebase.auth().signInWithPopup(provider)
      // console.log('result: ', result)
    }
    catch (e) {
      console.error(e)
    }
  }
}
