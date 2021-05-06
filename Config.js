import firebase from 'firebase';
 require("@firebase/firestore")
 
 var firebaseConfig = {
    apiKey: "AIzaSyAd51f0bMd6OJC_arZ0rGkSqMQ4TQ9jUpQ",
    authDomain: "story-hub-9ed06.firebaseapp.com",
    projectId: "story-hub-9ed06",
    storageBucket: "story-hub-9ed06.appspot.com",
    messagingSenderId: "884118353931",
    appId: "1:884118353931:web:37a5ff2fd6cfa4f1882f0e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore()