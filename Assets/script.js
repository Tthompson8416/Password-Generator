// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
}

// Testing js code DOM elements
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("result");
const uppercaseEl = document.getElementById("result");
const lowercaseEl = document.getElementById("result");
const numbersEl = document.getElementById("result");
const symbolsEl = document.getElementById("result");
const generateEl = document.getElementById("result");
const clipboardEl = document.getElementById("result");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasLower = lowercaseEl.checked;
const hasSymbol = symbolsEl.checked;


console.log(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

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