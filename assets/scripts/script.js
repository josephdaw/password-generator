// Assignment Code
var generateBtn = document.querySelector("#generate");

const alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialChar = ["!", "@", "#", "$", "%", "&", "*", "(", ")", "-"];

// create an empty array which will be used to hold selected characters
//var passwordCharacters = [];
var passwordLength;
var generatedPassword = [];

var inclLowerLetters;
var inclUpperLetters;
var inclNumbers;
var inclSpecials;

// create function to generate password
function generatePassword() {

  askUserParameters();
  createPassword();

  // convert array to string
  var myPassword = generatedPassword.join('');

  // return the password to be writen to page
  return myPassword;
}; // END -- generatePassword


//function to ask the user what they want in their password
function askUserParameters() {
  // set password length to zero
  passwordLength = 0;
  // start with clean passwordCharacters array
  passwordCharacters = []

  // ask user how long they want their password 
  // check that the answer is between 8 and 128 inclusive and is a number
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength * 1)) {
    passwordLength = prompt("How long would you like your password to be?\nType a number greater than 7 and less than 129");
  };

  // ask user if they want to include lowercase
  inclLowerLetters = confirm("Would you like to include lowercase letters?");
  // if true add to passwordCharacters
  if (inclLowerLetters) {
    passwordCharacters = passwordCharacters.concat(alphabetLower);
  };

  // ask user if they want to include uppercase
  inclUpperLetters = confirm("Would you like to include uppercase letters?");
  // if true add to passwordCharacters
  if (inclUpperLetters) {
    passwordCharacters = passwordCharacters.concat(alphabetUpper);
  };

  // ask user if they want to include numbers
  inclNumbers = confirm("Would you like to include numbers?");
  // if true add to passwordCharacters
  if (inclNumbers) {
    passwordCharacters = passwordCharacters.concat(digits);
  };

  // ask user if they want to include special characters
  inclSpecials = confirm("Would you like to include special characters?");
  // if true add to passwordCharacters
  if (inclSpecials) {
    passwordCharacters = passwordCharacters.concat(specialChar);
  };

  // check that the user has selected at least one option
  if (
    (!inclLowerLetters) &&
    (!inclUpperLetters) &&
    (!inclNumbers) &&
    (!inclSpecials)
  ) {
    alert("Sorry, you must select at least one option");
    askUserParameters();
  };
}; // END -- askUserParameters

// create the password
function createPassword() {
  // start with empty password array
  generatedPassword = [];

  for (let i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * passwordCharacters.length);
    generatedPassword.push(passwordCharacters[index]);
  }
  
  // check that the password meets selected parameters
  if (inclLowerLetters) { 
    var checkLowerLetters = findCommonElements(generatedPassword, alphabetLower); 
  };
  if (inclUpperLetters) {
    var checkUpperLetters = findCommonElements(generatedPassword, alphabetUpper);
  };
  if (inclNumbers) {
    var checkNumbers = findCommonElements(generatedPassword, digits);
  };
  if (inclSpecials) {
    var checkSpecials = findCommonElements(generatedPassword, specialChar);
  };


  // if any selected parameters are not included in the password, create a new password
  if (
    (!checkLowerLetters) ||
    (!checkUpperLetters) ||
    (!checkNumbers) ||
    (!checkSpecials)
  ) {
    // create a new one
    createPassword();
  }
}; // END -- createPassword


// find common items between two arrays 
// credit: https://www.geeksforgeeks.org/how-to-find-if-two-arrays-contain-any-common-item-in-javascript/
function findCommonElements(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}; // END - findCommonElements


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} // END -- writePassword

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
