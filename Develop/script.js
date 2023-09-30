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
    if (passwordLength===true){
      prompt("Got it! Thanks!");
    } else if (passwordLength===false){
      prompt("Please enter a number between 8-128!");
    }
    // if statements to tell the comp what to do if the answer is accepted or not 
   }
  //  added if statement to prompt to show if answer is within given parameters
   
  
  prompt("Would you like your password to be lowercase, uppercase, or both?");{
    if (fontCase===("Uppercase"&&"Lowercase"&&"Both")){
      prompt("Thanks!");
    } else if (fontCase===false){
      prompt("Please enter a valid answer.");
    }
  }
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
    if (specialChar=(x<8)){
      prompt("Thanks!");
    } else if (specialChar=(x>8)){
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
generateBtn.addEventListener("click", writePassword());

