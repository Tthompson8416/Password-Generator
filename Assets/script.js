// Assignment Code
var generateBtn = document.querySelector("#generate");



// Testing js code DOM elements
const resultEl = document.getElementById("password");
const lengthEl = document.getElementById("password");
const uppercaseEl = document.getElementById("checkbox2");
const lowercaseEl = document.getElementById("checkbox3");
const numbersEl = document.getElementById("checkbox4");
const symbolsEl = document.getElementById("checkbox5");
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

var chars =  "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
       var passwordLength = 8;
       var password = "";
       for (var i = 0; i <=passwordLength; ++i) {
       var randomNumber = Math.floor(Math.random() * chars.passwordLength);
       password += chars.substring(randomNumber, randomNumber +1);
       return String.randomFunc("")
       }

let generatePassword = "";
}


// random lower case string
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// random upper case string
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// random number string
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// random symbol string
function getRandomSymbol() {
  const symbols = "!@#$%^&*";
  return symbols[Math.floor(Math.random() * symbols.length)];

}
  console.log(getRandomLower());
  console.log(getRandomUpper());
  console.log(getRandomNumber());
  console.log(getRandomSymbol());




function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);