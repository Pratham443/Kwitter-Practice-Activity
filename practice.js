
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDb8-SQoeArxUSrvwphRSGX__8jHPdl2sw",
    authDomain: "practice-1c52a.firebaseapp.com",
    databaseURL: "https://practice-1c52a-default-rtdb.firebaseio.com",
    projectId: "practice-1c52a",
    storageBucket: "practice-1c52a.appspot.com",
    messagingSenderId: "845775087926",
    appId: "1:845775087926:web:4f6a3ce8d4133c74c46b97"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser() {
    username = document.getElementById("username").value;
    firebase.database().ref("/").child(username).update({
        username : username
    })
}