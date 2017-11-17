function getRandomInt(max, min) {
  min = min || 0;
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

Array.prototype.getRandElement = function() {
  // get a random element of an array
  return this[getRandomInt(this.length)];
};

Array.prototype.jumble = function() {
  // return a jumbled version of this
  var newArray = [];
  var oldArrCopy = this.slice();
  while (oldArrCopy.length > 0) {
    const randPos = getRandomInt(oldArrCopy.length);
    const removed = oldArrCopy.splice(randPos, 1);
    newArray.push(removed[0]);
  }
  return newArray;
};

let output = document.querySelector(".password");
let outputContainer = document.querySelector(".password-container");
const passwordLength = 12;
// prettier-ignore
const letters = ["A","B","C","D","E","F","G","H","J","K","L","M",
  "N","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d",
  "e","f","g","h","i","j","k","m","n","o","p","q","r","s","t","u",
  "v","w","x","y","z"];
const numbers = ["2", "3", "4", "5", "6", "7", "8", "9"];
const specials = ["!", "@", "#", "$", "%", "^", "&", "*"];
let addSpecials = false;
let addNumbers = false;

const clipboard = new Clipboard(".password", {
  text: function(trigger) {
    return trigger.innerText;
  }
});

clipboard.on("success", function(e) {
  outputContainer.classList.add("show-tooltip");
  window.setTimeout(function() {
    outputContainer.classList.remove("show-tooltip");
  }, 2000);
  e.clearSelection();
});

function generate() {
  let passwordArray = [];
  let positions = [];
  let currentPosition;

  // create a jumbled list of numbers, excluding 0
  for (let i = 1; i < passwordLength; i++) {
    positions.push(i);
  }
  positions = positions.jumble();
  // add 0 at beginning. this ensures that we don't later add
  // a number or special to the first char in the passwd
  positions.splice(0, 1, 0);

  // add a number?
  if (addNumbers) {
    currentPosition = positions.pop();
    passwordArray[currentPosition] = numbers.getRandElement();
  }

  // add a special?
  if (addSpecials) {
    currentPosition = positions.pop();
    passwordArray[currentPosition] = specials.getRandElement();
  }

  while (positions.length > 0) {
    currentPosition = positions.pop();
    passwordArray[currentPosition] = letters.getRandElement();
  }

  let displayArr = Array(passwordLength).fill("");

  for (let i = 0; i < passwordLength; i++) {
    for (let j = 0; j < 500; j++) {
      window.setTimeout(() => {
        displayArr[i] = letters.getRandElement();
        output.textContent = displayArr.join("");
      }, 100);
    }
    window.setTimeout(() => {
      displayArr[i] = passwordArray[i];
      output.textContent = displayArr.join("");
    }, 100);
  }
}

// click handlers
let btnGenerate = document.getElementById("generate");
btnGenerate.addEventListener("click", e => {
  e.preventDefault();
  generate();
});

let btnPunc = document.getElementById("punctuation");
btnPunc.addEventListener("click", e => {
  e.preventDefault();
  addSpecials = !addSpecials;
  btnPunc.classList.toggle("on");
  generate();
});

let btnNum = document.getElementById("numbers");
btnNum.addEventListener("click", e => {
  e.preventDefault();
  addNumbers = !addNumbers;
  btnNum.classList.toggle("on");
  generate();
});

generate();
