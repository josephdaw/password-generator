// Assignment Code
var generateBtn = document.querySelector("#generate");

const alphabetLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const alphabetUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const digits = [0,1,2,3,4,5,6,7,8,9];
const specialChar = ["!","@","#","$","%","&","*","(",")","-"];


// create function to generate password
function generatePassword() {
  // create an empty array which will be used to hold selected characters
  var passwordCharacters = [];
  var passwordLength = 0;
  var generatedPassword = [];
  
  // ask user how long they want their password (between 8 and 128 incl)
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("How long would you like your password to be?\nType a number greater than 7 and less than 129");
  };

  // ask user if they want to include lowercase
  var inclLowerLetters = confirm("Would you like to include lowercase letters?");
  // if true add to passwordCharacters
  if (inclLowerLetters){
    passwordCharacters = passwordCharacters.concat(alphabetLower);
  };

  // ask user if they want to include uppercase
  var inclUpperLetters = confirm("Would you like to include uppercase letters?");
  // if true add to passwordCharacters
  if (inclUpperLetters){
    passwordCharacters = passwordCharacters.concat(alphabetUpper);
  };

  // ask user if they want to include numbers
  var inclNumbers = confirm("Would you like to include numbers?");
  // if true add to passwordCharacters
  if (inclNumbers){
    passwordCharacters = passwordCharacters.concat(digits);
  };

  // ask user if they want to include special characters
  var inclSpecials = confirm("Would you like to include special characters?");
  // if true add to passwordCharacters
  if (inclSpecials){
    passwordCharacters = passwordCharacters.concat(specialChar);
  };

  // check that the user has selected at least one option
  if ((!inclLowerLetters) && (!inclUpperLetters) && (!inclNumbers) && (!inclSpecials)) {
    alert("Sorry, you must select at least one option");
    generatePassword();
  };
  

  console.log(passwordLength,inclLowerLetters, inclUpperLetters, inclNumbers, inclSpecials);
  console.log(passwordCharacters);


  // generate the password
  for (let i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * passwordCharacters.length);
    generatedPassword.push(passwordCharacters[index]);
  }

  var myPassword = generatedPassword.toString();
  myPassword = myPassword.replace(/,/g, '');

  // return the password to be writen to page
  return myPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
