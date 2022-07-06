// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Make function to generate password
function generatePassword () {
    //ask length, upper, lower, numbers, special chars
    var length = prompt("What is the length?");
    console.log(length);
    length = parseInt(length);
    if (length < 8 || length > 128) {
        alert("Incorrect password length.");
        return;
    }
    
    var passwordChars = "";
    var upper = confirm("Do you want uppercase letters?");
    if(upper) {
        passwordChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    var lower = confirm("Do you want lowercase letters?");
    if (lower) {
        passwordChars += "abcdefghijklmnopqrstuvwxyz";
    }

    var numberChars = confirm("Do you want numbers?");
    if (numberChars) {
        passwordChars += "0123456789";
    }

    var special = confirm("Do you want special characters?");
    if (special) {
        passwordChars += "!@#$%^&*";
    }

    if (!passwordChars) {
        alert("Please select one character type.");
        return;
    }

    var newPassword = "";

    for (var i = 0; i < length; i++) {
        var randomPassword = Math.random(); 
        var randomProduct = passwordChars.length * randomPassword;
        var randomPosition = Math.floor(randomProduct);
        newPassword += passwordChars[randomPosition];
    }
    return newPassword;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
