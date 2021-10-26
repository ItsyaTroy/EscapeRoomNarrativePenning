// This is the only Java code I use. This lets the password box function.

function checkPassword() {
   var password = document.getElementById("passwordBox");
   var passwordText = password.value;
   if(passwordText == "go right get device") {
    return true;
   }
   alert("That doesn't seem right!");
   return false;
   }