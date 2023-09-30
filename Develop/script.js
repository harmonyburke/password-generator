// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength=(7>129);
var fontCase= ["Uppercase","Lowercase"]
var numbers=true 
var specialChar=["!","@","#","$","%","^","&","*"]
// added variables for the elements of the password
// var random=Math.floor(Math.random()=(x>7)(x<129));
// added random to randomize the number the computer pics
// Write password to the #password input
function writePassword() {
   prompt("How long would you like your password to be? Please choose a length between 8-128 characters.");{
    if (passwordLength=true){
      prompt("Got it! Thanks!")
    } else if (passwordLength=false){
      prompt("Please enter a number between 8-128!")
    }
    // if statements to tell the comp what to do if the answer is accepted or not 
   }
  //  added if statement to prompt to show if answer is within given parameters
   
  
  prompt("Would you like your password to be lowecase, uppercase, or both?");
  prompt("Would you like to include any numbers?");
  prompt("Would you like to include any special characters(ex.!@#$%)?");
  // added prompts for information on password
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

