// This is the only Java code I use. This lets the password box function.

function checkPassword() {
   var password = document.getElementById("passwordBox");
   var passwordText = password.value;
   if(passwordText == "1") {
    return true;
   }
   alert("Wrong number!");
   return false;
   }