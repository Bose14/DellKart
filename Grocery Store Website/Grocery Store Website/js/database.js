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
const app = initializeApp(firebaseConfig);
const auth=firebase.auth();
const database=firebase.database();
const analytics = getAnalytics(app);

function loginbut()
{
  var email=document.getElementById("email").value;
  var pass=document.getElementById("pass").value;
  auth.signInWithEmailAndPassword(email,pass).then(()=>
  {
    var user=auth.currentUser;
    var uid=user.uid;
    console.log(uid);
  })}
  .catch((error)=>
  {
    document.getElementById('error').innerHTML=error.message;
  })