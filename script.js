// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var charset = "";
  var retVal = "";
  
  var length = prompt("Please choose a password length between 8 and 128 characters.");
  //if the character length is not between 8 and 128, throw an alert, and exit
  if (length < 8 || length > 128) {
    alert("You must choose a password length between 8 and 128 characters.")
    return retVal;
  }

  var includeLowerCase = confirm("Would you like your password to contain lower case characters?")
  var includeUpperCase = confirm("Would you like your password to contain upper case characters?")
  var includeSpecialChars = confirm("Would you like your password to contain special characters?")
  var includeNumerics = confirm("Would you like your password to contain numeric values?")
  var atLeastOneTypeSelected = false;

  //if lowercase selected
  if (includeLowerCase) {
    charset += "abcdefghijklmnopqrstuvwxyz";
    atLeastOneTypeSelected = true;
  }

  //if uppercase selected
  if (includeUpperCase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    atLeastOneTypeSelected = true;
  }  

  //if special characters selected
  if (includeSpecialChars) {
    charset += " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    charset += '"';
    atLeastOneTypeSelected = true;
  }  

  //if numerics selected
  if (includeNumerics) {
    charset += "0123456789";
    atLeastOneTypeSelected = true;
  }  

  //if at least one type didnt get selected, throw an alert, and exit
  if (!atLeastOneTypeSelected) {
    alert("Please choose at least one type - lower case, upper case, special characters, or numerics.");
    return retVal;
  }

  //testing
  //console.log("charset = " + charset)
  //console.log("charset length, n = " + charset.length)

  //loop through the number of characters selected.  For each one, generate a random number between 0 and 1 and multiply that
  //by the length of the charset.  Take that number and get largest integer less than or equal to the previous number.  Get
  //the value of that number in the charset (should be a number from 0 to n-1 where n is the length of charset) 
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
      //to test, comment the above line, and uncomment the remainder to view in console
      //var randomNumber = Math.random(); //intentionally pulled this variable out of the below calculation for testing purposes
      //retVal += charset.charAt(Math.floor(randomNumber * n));
      //console.log("Random number = " + randomNumber);
      //console.log("Chosen character = " + charset.charAt(Math.floor(randomNumber * n)));
      //console.log("At location = " + Math.floor(randomNumber * n));
  }

  return retVal;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
