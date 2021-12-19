// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
}

// Testing js code DOM elements
const resultEl = document.getElementById("password");
const lengthEl = document.getElementById("password");
const uppercaseEl = document.getElementById("password");
const lowercaseEl = document.getElementById("password");
const numbersEl = document.getElementById("password");
const symbolsEl = document.getElementById("password");
const generateEl = document.getElementById("password");
const clipboardEl = document.getElementById("password");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Generate event listen
generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;


resultEl.innerText = generatePassword(
  hasLower, 
  hasUpper, 
  hasNumber, 
  hasSymbol, 
  length
  );
});

//Generate password function
function generatePassword(lower, upper, number, symbol, length) {
   // 1. Init pw var
  // 2. Filter out unchecked types
 // 3.Loop over length call generator function for each type
// 4. Add final pw to the pw var and retun

let generatePassword = "";

const typedCount = lower + upper + number + symbol;

console.log("typesCount: ", typesCount);


// created random lower case string
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// created random upper case string
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*";
  return symbols[Math.floor(Math.random() * symbols.length)];

}
  console.log(getRandomSymbol());








       var chars =  "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
       var passwordLength = 8;
       var password = "";
       for (var i = 0; i <=passwordLength; ++i) {
       var randomNumber = Math.floor(Math.random() * chars.passwordLength);
       password += chars.substring(randomNumber, randomNumber +1);
      }


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);