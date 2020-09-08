import firebase from 'firebase'
const firebaseConfig = {
  apiKey: 'AIzaSyBr4qupkIoH6Wshk-yCV1Aw4p4-_s2jKHI',
  authDomain: 'gifty-2d301.firebaseapp.com',
  databaseURL: 'https://gifty-2d301.firebaseio.com',
  projectId: 'gifty-2d301',
  storageBucket: 'gifty-2d301.appspot.com',
  messagingSenderId: '671726108055',
  appId: '1:671726108055:web:ba590f99c067285ab998d2',
  measurementId: 'G-NJG6J9JNTY',
}

export const fire = firebase.initializeApp(firebaseConfig)
export const storage = firebase.storage()
