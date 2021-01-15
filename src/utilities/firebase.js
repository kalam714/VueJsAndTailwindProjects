import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/database'
var firebaseConfig = {
    apiKey: "AIzaSyCMhH1CpUNpLZQGEVQ0B5SoP01R-PaZimU",
    authDomain: "vue3-project-430d0.firebaseapp.com",
    projectId: "vue3-project-430d0",
    storageBucket: "vue3-project-430d0.appspot.com",
    messagingSenderId: "487890737295",
    appId: "1:487890737295:web:8e83fc01d56c6ea1c278fa"
  };


  firebase.initializeApp(firebaseConfig);
  const db = firebase.database()
  export const chatsRef = db.ref('chats')

  export default firebase;