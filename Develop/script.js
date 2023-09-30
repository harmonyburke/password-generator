// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength=(7>129);
var fontCase= ["Uppercase","Lowercase"]
var numbers=true 
var specialChar=["!","@","#","$","%","^","&","*"]
// added variables for the elements of the password
// Write password to the #password input
function writePassword() {
   if (passwordLength.prompt("How long would you like your password to be? Please choose a length between 8-128 characters.")){ prompt("Thanks")

   }
  prompt("Would you like your password to be lowecase, uppercase, or both?");
  prompt("Would you like to include any numbers?");
  prompt("Would you like to include any special characters(ex.!@#$%)?")
  // added prompts for information on password
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

