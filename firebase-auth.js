 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { firebaseConfig } from './private.js';

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
