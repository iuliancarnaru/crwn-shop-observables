import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "crwn-shop-3a030.firebaseapp.com",
  databaseURL: "https://crwn-shop-3a030.firebaseio.com",
  projectId: "crwn-shop-3a030",
  storageBucket: "crwn-shop-3a030.appspot.com",
  messagingSenderId: "696670159033",
  appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-B3ZB72Q14S",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log(`Error creating user...`, err.message);
    }
  }

  return userRef;
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Setting up Google Auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signinWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
