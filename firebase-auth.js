 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
// import { firebaseConfig } from './firebase-private';

 const firebaseConfig = {
  apiKey: "AIzaSyBY78RGi50TDkyYFRtrXMne74E9JBwFUr8",
  authDomain: "restaurant-website-33112.firebaseapp.com",
  projectId: "restaurant-website-33112",
  storageBucket: "restaurant-website-33112.appspot.com",
  messagingSenderId: "640390068562",
  appId: "1:640390068562:web:678a387c7ebf9d11c2228b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login function
document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();

  const email = document.getElementById("username").value;
 const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      window.location.href = "admin.html";
    })
    .catch((error) => {
      alert("Login Failed: " + error.message);
    });
});
