
var config = {
  apiKey: "AIzaSyAbnjkipv2m1ZLl5ay2yuH2fIMmkVwfuRA",
  authDomain: "demonhackdatabase.firebaseapp.com",
  databaseURL: "https://demonhackdatabase.firebaseio.com",
  projectId: "demonhackdatabase",
  storageBucket: "demonhackdatabase.appspot.com",
  messagingSenderId: "551307232003"
};

firebase.initializeApp(config);

var email = "email";
var acc = document.getElementById("login");


acc.onclick = function(){
  var username = document.forms['fram']['name1'].value;
  var password = document.forms['fram']['pass1'].value;
  var database = firebase.database();
  var encodedImg = database.ref('user');
  var result = encodedImg.push({
      username : username,
      password : password,
      coins : '0'
    });
    // console.log('123')
  };

// Import Admin SDK
var pointer = firebase.database().ref().child("user");

  var arrayInfo = [];

// Retrieve new posts as they are added to our database
pointer.on("child_added", snap =>{
  var user = snap.child('username').val();
  var coins = snap.child('coins').val();
  var password = snap.child('password').val();
  var packAge = [user, password, coins];
  arrayInfo.push(packAge);

});

// var timer = setInterval(function(){
//   console.log(arrayInfo);
// }, 3000);
