firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("not_signed").style.display="none";
    document.getElementById("signed_in").style.display="block";
    
  } else {
    // No user is signed in.
    document.getElementById("signed_in").style.display="none";
    document.getElementById("not_signed").style.display="block";

  }
});

function myfunction(){
  var email=document.getElementById("email").value;
  var password=document.getElementById("password").value;
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
    alert("Welcome,"+"  "+email);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("Error:"+errorMessage);
    document.getElementById("loginform").reset();
  });
}
function submitform(){
  var name=document.getElementById("autoSizingInputt").value;
  var email=document.getElementById("autoSizingInputGroup").value;
  var password=document.getElementById("autoSizingInput").value;
  firebase.auth().createUserWithEmailAndPassword(email,password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
    alert("Welcome,"+"  "+email);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    alert("Error:"+errorMessage);
});
}
function writeUserData(name,email,password) {
  firebase.database().ref().set({
    name: name,
    email: email,
    password:password
  });
}


function logout(){
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}
function pleaselogin(){
  alert("Please Login First");
}


function Pu(){
  document.getElementById("Puzzles").style.display="initial";
  document.getElementById("Adventure").style.display="none";
  document.getElementById("Arcade").style.display="none";
  document.getElementById("Sports").style.display="none";
  document.getElementById("Racing").style.display="none";
  document.getElementById("AllGames").style.display="none";

}
function Ad(){
  document.getElementById("Puzzles").style.display="none";
  document.getElementById("Adventure").style.display="initial";
  document.getElementById("Arcade").style.display="none";
  document.getElementById("Sports").style.display="none";
  document.getElementById("Racing").style.display="none";
  document.getElementById("AllGames").style.display="none";

}
function Ar(){
  document.getElementById("Puzzles").style.display="none";
  document.getElementById("Adventure").style.display="none";
  document.getElementById("Arcade").style.display="initial";
  document.getElementById("Sports").style.display="none";
  document.getElementById("Racing").style.display="none";
  document.getElementById("AllGames").style.display="none";

}
function Sp(){
  document.getElementById("Puzzles").style.display="none";
  document.getElementById("Adventure").style.display="none";
  document.getElementById("Arcade").style.display="none";
  document.getElementById("Sports").style.display="initial";
  document.getElementById("Racing").style.display="none";
  document.getElementById("AllGames").style.display="none";

}
function Ra(){
  document.getElementById("Puzzles").style.display="none";
  document.getElementById("Adventure").style.display="none";
  document.getElementById("Arcade").style.display="none";
  document.getElementById("Sports").style.display="none";
  document.getElementById("Racing").style.display="initial";
  document.getElementById("AllGames").style.display="none";

}