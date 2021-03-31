firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("not_signed").style.display="none";
    document.getElementById("signed_in").style.display="initial";
  } else {
    // No user is signed in.
    document.getElementById("signed_in").style.display="none";
    document.getElementById("not_signed").style.display="initial";
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
const form=document.getElementById("form");
const refForm=firebase.database().ref().child("form");
refForm.on('value',snap => console.log(snap.val()));
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
 