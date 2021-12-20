// Assignment Code
var generateBtn = document.querySelector("#generate");



// Testing js code DOM elements
const resultEl = document.getElementById("password");
const lengthEl = document.getElementById("checkbox1");
const lowercaseEl = document.getElementById("checkbox2");
const uppercaseEl = document.getElementById("checkbox3");
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
  const lowerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const upperArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const symbolArray = ['!', '@', '#', '$','%','^','&','*'];
  



lower = lowercaseEl.checked
upper = uppercaseEl.checked
number = numbersEl.checked
symbol = symbolsEl.checked
length = lengthEl.checked

  if (symbol === true)  {
    chosenchars.push(symbolArray)
  }

  if (lower === true) {
    chosenchars.push(lowerArray)
  }

  if (upper === true) {
    chosenchars.push(upperArray)
  }

  if (number === true) {
    chosenchars.push(numberArray)
  }

  console.log('hello');
  console.log(chosenchars);


       let passwordLength = 8;
       let password = "";
       for (var i = 0; i <=passwordLength; ++i) {
       let randomNumber = Math.floor(Math.random() * chosenchars.length);
       password += chosenchars[randomNumber]
       
       }

       return password;


return chosenchars[0]
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
