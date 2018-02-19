import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyB20kl9oEhYmMAdCvzlv0GH9jX-w3ujmfY",
  authDomain: "yallaread-379e2.firebaseapp.com",
  databaseURL: "https://yallaread-379e2.firebaseio.com",
  projectId: "yallaread-379e2",
  storageBucket: "",
  messagingSenderId: "464357143022"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const auth = firebase.auth
export const providerFcbk = new firebase.auth.FacebookAuthProvider();
//export const providerFcbk = new firebase.auth.FacebookAuthProvider();
export const storageKey = 'KEY_FOR_LOCAL_STORAGE';
export const isAuthenticated = () => {
  return !!auth().currentUser || !!localStorage.getItem(storageKey);
}
