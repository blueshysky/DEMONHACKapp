
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
  var database = firebase.database();
  var encodedImg = database.ref('email');
  var result = encodedImg.push({
      password :'password',
      coins : '0'
    });
    // console.log('123')
  };


  console.log('default');
