import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: VUE_APP_API_KEY,
  authDomain: VUE_APP_AUTH_DOMAIN,
  databaseURL: VUE_APP_DATABASE_URL,
  storageBucket: VUE_APP_BUCKET_URL,
};

firebase.initializeApp(firebaseConfig);

export const dataBase = firebase.database();
export const storage = firebase.storage();
