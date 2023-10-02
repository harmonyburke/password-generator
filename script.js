// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword(){
   var lengthChoice=prompt("How long would you like your password to be? Please choose a length between 8-128 characters.");
  //  added while statement(while is multiple if statements in one) to tell the computer what numbers are acceptable as a user answer and to only accept numeric values!
    while((lengthChoice<8)||(lengthChoice>128)||(isNaN(lengthChoice)===true)){
      alert("Please use a numeric value between 8-128!")
      lengthChoice=prompt("How long would you like your password to be? Please choose a length between 8-128 characters.");
    }
    // if the user does not enter a numeric value OR a value within the given parameters
    //created confirm prompts as a yes/no answer to help the computer randomize the password to the users liking
    var choseLowercase=confirm("Would you like your password to include lowercase characters?");
    var choseUppercase=confirm("Would you like your password to include uppercase characters?");
    var choseNumbers=confirm("Would you like to include any numbers?");
    var choseSpecChar=confirm("Would you like to include any special characters?")
    // create bank for choices-all of these are yes/no answers
       var lowercase="abcdefghijklmnopqrstuvwxyz";
       var uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
       var numbers="0123456789";
       var specialChar="!@#$%^&*()_-+=?";
       var characterBank="";
       var generatedPassword="";
      // add if statements to bank depending on user input
       if (choseLowercase===true){
        characterBank=characterBank.concat(lowercase)
      };
      if (choseUppercase===true){
        characterBank=characterBank.concat(uppercase)
      };
      if (choseNumbers===true){
        characterBank=characterBank.concat(numbers)
      };
      if (choseSpecChar===true){
        characterBank=characterBank.concat(specialChar)
      };
      // create function to randomize bank
      function randomizeBank(max){
        return [Math.floor(Math.random() * max)]

      };
// create for loop and use randomize function to create new password
      for(var i=0; i<lengthChoice; i++){
        generatedPassword=generatedPassword.concat(characterBank.charAt(randomizeBank(characterBank.length-1)))

      }
      return generatedPassword
   }
  //  added if statement to prompt to show if answer is within given parameters
   
  
//     var fontChoice=["uppercase", "lowercase", "both"]
//     if (fontChoice===fontCase.length){
//       console.log("font answer");
//     } else if (fontChoice!==fontCase.lenth){
//       prompt("Please enter a valid answer.");
//     }
  
//   //added fontChoice var for user answer comparison
//   // added else if statements for prompts to function correctly 
//   prompt("Would you like to include any numbers? Yes or No");{
//     if (numbers===true){
//       console.log("Numbers answer");
//     } else if (numbers===false){
//       prompt ("Enter a valid response!");
//     }
//   }
//   // added else if statements for prompts to function correctly
//   prompt("Would you like to include any special characters(ex.!@#$%)?");{
//     if (specialChar<=8){
//       console.log("special character answer");
//     } else if (specialChar=>8){
//       prompt("Enter a valid response!");
//     }
//   }
//   //added else if statements to all password characteristics 
//   // added prompts for information on password


// }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

