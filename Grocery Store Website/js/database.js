 const firebaseConfig = {
    apiKey: "AIzaSyBny6k0DG55XMIjqNHrWtHKKH6wOMe6NZY",
    authDomain: "dellkart-94d1d.firebaseapp.com",
    databaseURL: "https://dellkart-94d1d-default-rtdb.firebaseio.com",
    projectId: "dellkart-94d1d",
    storageBucket: "dellkart-94d1d.appspot.com",
    messagingSenderId: "518155529311",
    appId: "1:518155529311:web:3c5d683b19627b17d53fea",
    measurementId: "G-EPV4K66LJJ"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth=firebase.auth();
const database=firebase.database();

function login(){

  var log_email=document.getElementById("user-email").value;
  var log_password=document.getElementById("user-password").value;

  auth.signInWithEmailAndPassword(log_email,log_password).then(()=>{
      var user=auth.currentUser;
      var uid=user.uid;
      console.log(uid)
      window.location.replace("../html/home.html  ")
  })
  .catch((error)=>{
      document.getElementById("error2").innerHTML="Invalid Credintials";
  })
}