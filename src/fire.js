import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAU3qppPJlsolD-kENWx1ObiU7YYMO_g6E",
    authDomain: "login-cc269.firebaseapp.com",
    projectId: "login-cc269",
    storageBucket: "login-cc269.appspot.com",
    messagingSenderId: "693286206280",
    appId: "1:693286206280:web:4265ecdbb70d317e8ad17d"
  };
  

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire