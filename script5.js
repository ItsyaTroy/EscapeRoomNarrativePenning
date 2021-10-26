// This is the only Java code I use. This lets the password box function.

function checkPassword() {
   var password = document.getElementById("passwordBox");
   var passwordText = password.value;
   if(passwordText == "18358691") {
    return true;
   }
   alert("That doesn't seem right!");
   return false;
   }