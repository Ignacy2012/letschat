var firebaseConfig = {
    apiKey: "AIzaSyBPa-lvuz90nxYUp_Zj9EmxA-PArM_ndO8",
    authDomain: "lets-chat-24665.firebaseapp.com",
    databaseURL: "https://lets-chat-24665-default-rtdb.firebaseio.com",
    projectId: "lets-chat-24665",
    storageBucket: "lets-chat-24665.appspot.com",
    messagingSenderId: "552551776465",
    appId: "1:552551776465:web:0d73249eeaff4bde64c5f0",
    measurementId: "G-SPC3RHVHSX"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function sendMessage(){
      message = document.getElementById("tweet").value;

      console.log("message", message);
      firebase.database().ref(room_name).push({
            name : user_name,
            message : message,
            like : 0
      });

      document.getElementById("tweet").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}