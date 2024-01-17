// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getdatabase, ref, set, get,child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDzHJRB4t-zGpp8vJDcWxkFCPdOe0m2jQ0",
    authDomain: "majorproject-a7393.firebaseapp.com",
    databaseURL: "https://majorproject-a7393-default-rtdb.firebaseio.com",
    projectId: "majorproject-a7393",
    storageBucket: "majorproject-a7393.appspot.com",
    messagingSenderId: "106812842245",
    appId: "1:106812842245:web:2388ee4ebf9e346898976c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  //Initialize Firebase
  const app= initializeApp(firebaseConfig);

  //get ref to database services
  const db=getdatabase(app);

  document.getElementById("submit").addEventListener('click', function(e)
  {
    set(ref(db, user/' + dcument.getElementById("username").value),
    {
        username: + dcument.getElementById("username").value
        email: + dcument.getElementById("username").value
        phinenumber: + dcument.getElementById("username").value


  };
  alert("login Successfull")
}