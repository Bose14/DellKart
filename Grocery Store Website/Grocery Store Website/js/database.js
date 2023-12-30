
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBny6k0DG55XMIjqNHrWtHKKH6wOMe6NZY",
  authDomain: "dellkart-94d1d.firebaseapp.com",
  projectId: "dellkart-94d1d",
  storageBucket: "dellkart-94d1d.appspot.com",
  messagingSenderId: "518155529311",
  appId: "1:518155529311:web:3c5d683b19627b17d53fea",
  measurementId: "G-EPV4K66LJJ"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);