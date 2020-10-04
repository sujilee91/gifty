import firebase from "firebase";
import { fire } from "../fire";
import { toast } from "react-toastify";
import { sleep } from "../utils/sleep";
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
    callback(user);
  });
};

export const loginWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  fire
    .auth()
    .signInWithPopup(googleProvider)
    .catch((error) => {
      toast.error(error.message);
    });
};

export const signUp = (email, password) => {
  fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(async () => {
      await sleep(500);
      toast(
        "🥳 Welcome to Gifty!! Get started by creating or joining a group."
      );
    })
    .catch((error) => {
      toast.error(error.message);
    });
};

export const login = (email, password) => {
  fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => {
      toast.error(error.message);
    });
};

export const logout = () => {
  fire.auth().signOut();
};
