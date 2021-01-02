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
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
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