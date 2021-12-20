// Assignment Code
var generateBtn = document.querySelector("#generate");



// Testing js code DOM elements
const resultEl = document.getElementById("password");
const lengthEl = document.getElementById("checkbox1");
const uppercaseEl = document.getElementById("checkbox2");
const lowercaseEl = document.getElementById("checkbox3");
const numbersEl = document.getElementById("checkbox4");
const symbolsEl = document.getElementById("checkbox5");
const generateEl = document.getElementById("password");
let lower;
let upper;
let number;
let symbol;
let length;

console.log('Happy');

//Generate password function
function generatePassword() {
const chosenchars = []
  const symbolArray = ['!', '@', '#', '$','%','^','&','*'];
  const lowerArray = ['a', 'b', 'c'];
  const upperarray = ['D', 'E', 'F'];

  if (symbol === true)  {
    chosenchars.push(symbolArray)
  }
  console.log('hello');


 var chars =  "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
       let passwordLength = 8;
       let password = "";
       for (var i = 0; i <=passwordLength; ++i) {
       let randomNumber = Math.floor(Math.random() * chars.passwordLength);
       password += chars.substring(randomNumber, randomNumber +1);
       return password;
       }

console.log(chosenchars);

return chosenchars[0]


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
}