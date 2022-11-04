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
     
welcome = localStorage.getItem("user_name");
document.getElementById("welcome").innerHTML = "welcome " + welcome;

function addRoom(){
      room_name = document.getElementById("room_name").value;
      localStorage.setItem("room_name", room_name);

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding user"
      });

      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room_names " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='nextPage(this.id)'># "+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
      //Start code


      //End code
      });});}
getData();

function nextPage(name){
      console.log("room_name "+ name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}

function logout() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}