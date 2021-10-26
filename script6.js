// This is the only Java code I use. This lets the password box function.

function checkPassword() {
   var password = document.getElementById("passwordBox");
   var passwordText = password.value;
   if(passwordText == "615283749") {
    return true;
   }
   alert("Those coords seem wrong.");
   return false;
   }