//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCJSfg9z7_mtjP4ui27CXWH6EWHVFRjzbk",
      authDomain: "let-s-chat-app-9eb07.firebaseapp.com",
      projectId: "let-s-chat-app-9eb07",
      storageBucket: "let-s-chat-app-9eb07.appspot.com",
      messagingSenderId: "991737720775",
      appId: "1:991737720775:web:a92014b8761fe08288b3e2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,message:msg,like:0
      });
      document.getElementById("msg").value="";
}

function getData() { 
      firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
