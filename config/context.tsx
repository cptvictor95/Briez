import * as React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useState } from "react";


export interface FirebaseContext {
  auth: firebase.auth.Auth;
  firestore: firebase.firestore.Firestore;
  user: firebase.User;
}

export const FirebaseCtx = React.createContext<FirebaseContext>(null)

try {
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: "AIzaSyCj2yXVRhl0dRYdCkU-VLBKGhFiJFqFc7Y",
      authDomain: "briez-app.firebaseapp.com",
      databaseURL: "https://briez-app.firebaseio.com",
      projectId: "briez-app",
      storageBucket: "briez-app.appspot.com",
      messagingSenderId: "262044054752",
      appId: "1:262044054752:web:497bf556e6b8fc66094c85"
    })
  }
  console.log('Connected!')
} catch (error) {
  console.log('Failed connecting to firebase.', error)
}

export const FirebaseProvider: React.FC = ({ children }) => {
  const auth = firebase.auth()
  const firestore = firebase.firestore()
  const [user] = useState<firebase.User | null>(null);

  auth.onAuthStateChanged(function (user) {
    if (user) {
      return getUserProfile(user);
    }
  })

  const getUserProfile = (user) => {
    user = firebase.auth().currentUser;

    return user;
  };

  return(
    <FirebaseCtx.Provider value={{
      auth,
      firestore,
      user
    }}
    >
      {children}
    </FirebaseCtx.Provider>
  )
}