// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength=(7>129);
var fontCase= ["uppercase","lowercase","both"];
var numbers=true;
var specialChar=["!","@","#","$","%","^","&","*"];
// added variables for the elements of the password
// added random to randomize the number the computer pics
// Write password to the #password input
function writePassword() {

   prompt("How long would you like your password to be? Please choose a length between 8-128 characters.");{
   
    var lengthChoice=(7>129);
     // added var userChoice to give the comp something to compare the user answer to
    
     if (lengthChoice===passwordLength){
      prompt("Got it! Thanks!");
    
    } else if (lengthChoice!=passwordLength){
      prompt("Please enter a number between 8-128!");
    }
    // if statements to tell the comp what to do if the answer is accepted or not 
   }
  //  added if statement to prompt to show if answer is within given parameters
   
  
  prompt("Would you like your password to be lowercase, uppercase, or both?");{
    var fontChoice=["uppercase", "lowercase", "both"]
    if (fontChoice==+fontCase){
      prompt("Thanks!");
    } else if (fontChoice!==fontCase){
      prompt("Please enter a valid answer.");
    }
  }
  //added fontChoice var for user answer comparison
  // added else if statements for prompts to function correctly 
  prompt("Would you like to include any numbers?");{
    if (numbers===true){
      prompt ("Thanks");
    } else if (numbers===false){
      prompt ("Enter a valid response!");
    }
  }
  // added else if statements for prompts to function correctly
  prompt("Would you like to include any special characters(ex.!@#$%)?");{
    if (specialChar=(i<8)){
      prompt("Thanks!");
    } else if (specialChar=(i>8)){
      prompt("Enter a valid response!");
    }
  }
  //added else if statements to all password characteristics 
  // added prompts for information on password
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

