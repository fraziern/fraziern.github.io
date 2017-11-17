"use strict";

function getRandomInt(max, min) {
  min = min || 0;
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

Array.prototype.getRandElement = function () {
  // get a random element of an array
  return this[getRandomInt(this.length)];
};

Array.prototype.jumble = function () {
  // return a jumbled version of this
  var newArray = [];
  var oldArrCopy = this.slice();
  while (oldArrCopy.length > 0) {
    var randPos = getRandomInt(oldArrCopy.length);
    var removed = oldArrCopy.splice(randPos, 1);
    newArray.push(removed[0]);
  }
  return newArray;
};

var output = document.querySelector(".password");
var outputContainer = document.querySelector(".password-container");
var passwordLength = 12;
// prettier-ignore
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["2", "3", "4", "5", "6", "7", "8", "9"];
var specials = ["!", "@", "#", "$", "%", "^", "&", "*"];
var addSpecials = false;
var addNumbers = false;

var clipboard = new Clipboard(".password", {
  text: function text(trigger) {
    return trigger.innerText;
  }
});

clipboard.on("success", function (e) {
  outputContainer.classList.add("show-tooltip");
  window.setTimeout(function () {
    outputContainer.classList.remove("show-tooltip");
  }, 2000);
  e.clearSelection();
});

function generate() {
  var passwordArray = [];
  var positions = [];
  var currentPosition = void 0;

  // create a jumbled list of numbers, excluding 0
  for (var i = 1; i < passwordLength; i++) {
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

  var displayArr = Array(passwordLength).fill("");

  for (var _i = 0; _i < passwordLength; _i++) {
    for (var j = 0; j < 500; j++) {
      window.setTimeout(function (i) {
        displayArr[i] = letters.getRandElement();
        output.textContent = displayArr.join("");
      }, 100, _i);
    }
    window.setTimeout(function (i) {
      displayArr[i] = passwordArray[i];
      output.textContent = displayArr.join("");
    }, 100, _i);
  }
}

// click handlers
var btnGenerate = document.getElementById("generate");
btnGenerate.addEventListener("click", function (e) {
  e.preventDefault();
  generate();
});

var btnPunc = document.getElementById("punctuation");
btnPunc.addEventListener("click", function (e) {
  e.preventDefault();
  addSpecials = !addSpecials;
  btnPunc.classList.toggle("on");
  generate();
});

var btnNum = document.getElementById("numbers");
btnNum.addEventListener("click", function (e) {
  e.preventDefault();
  addNumbers = !addNumbers;
  btnNum.classList.toggle("on");
  generate();
});

generate();