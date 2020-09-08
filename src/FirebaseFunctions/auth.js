import firebase from 'firebase'
import { fire } from '../fire'

/////////////////////
///// FIREBASE /////
/////////////////////

// **  Initializers **
// Initializers are usually set on componentDidMount, they only need to be set once, and will
// automatically update with a action dispatch whenever there is a change in that data
// in firebase. For example, getMessages is initialized, and calls updateMessages whenever
// there is a change in data.

export const authListener = (callback) => {
  fire.auth().onAuthStateChanged((user) => {
    callback(user)
  })
}

export const loginWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  fire
    .auth()
    .signInWithPopup(googleProvider)
    .then(() => {
      console.log('GOOGLE SIGNUP SUCCESS')
    })
    .catch((error) => {
      console.log('GOOGLE SIGNUP FAIL', error)
    })
}

export const logout = () => {
  fire.auth().signOut()
}
