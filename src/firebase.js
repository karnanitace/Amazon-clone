import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAsnunWRVErstu6w0oJoArkQNVVqQIKjtM",
  authDomain: "redux-e8bc6.firebaseapp.com",
  databaseURL: "https://redux-e8bc6.firebaseio.com",
  projectId: "redux-e8bc6",
  storageBucket: "redux-e8bc6.appspot.com",
  messagingSenderId: "694779759297",
  appId: "1:694779759297:web:cdfa6c240e3b63aefba240",
  measurementId: "G-R1BQH19XSZ",
});

const auth = firebase.auth();

export { auth };
