"use strict";

/* global Clipboard docCookies */
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
var prefs = {
  numbers: false,
  specials: false
};

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

  // TODO: refactor - combine the below 2 if statements?
  // add a number?
  if (prefs.numbers) {
    currentPosition = positions.pop();
    passwordArray[currentPosition] = numbers.getRandElement();
  }

  // add a special?
  if (prefs.specials) {
    currentPosition = positions.pop();
    passwordArray[currentPosition] = specials.getRandElement();
  }

  while (positions.length > 0) {
    currentPosition = positions.pop();
    passwordArray[currentPosition] = letters.getRandElement();
  }

  var displayArr = Array(passwordLength).fill("");

  for (var _i = 0; _i <= 10; _i++) {
    if (_i == 10) {
      window.setTimeout(function () {
        output.textContent = passwordArray.join("");
      }, 10 * _i);
    } else {
      window.setTimeout(function () {
        displayArr = displayArr.map(function () {
          return letters.getRandElement();
        });
        output.textContent = displayArr.join("");
      }, 10 * _i);
    }
  }
}

// click handlers
function toggle(type) {
  prefs[type] = !prefs[type];
  buttons[type].classList.toggle("on");
}

var btnGenerate = document.getElementById("generate");
btnGenerate.addEventListener("click", function (e) {
  e.preventDefault();
  generate();
});

var buttons = {
  specials: document.getElementById("punctuation"),
  numbers: document.getElementById("numbers")
};

var _loop = function _loop(btn) {
  buttons[btn].addEventListener("click", function (e) {
    e.preventDefault();
    toggle(btn);
    setCookies();
    generate();
  });
};

for (var btn in buttons) {
  _loop(btn);
}

var btnHelp = document.getElementById("help-link");
var helpEls = document.getElementsByClassName("help");
btnHelp.addEventListener("click", function (e) {
  e.preventDefault();
  Array.prototype.forEach.call(helpEls, function (el) {
    el.classList.add("show-tooltip");
    window.setTimeout(function () {
      el.classList.remove("show-tooltip");
    }, 3000);
  });
});

// check for user preferences
function checkCookies() {
  if (docCookies.hasItem("prefs")) {
    var prefsCookie = JSON.parse(docCookies.getItem("prefs"));
    if ("numbers" in prefsCookie && "specials" in prefsCookie) {
      if (prefsCookie.numbers) {
        toggle("numbers");
      }
      if (prefsCookie.specials) {
        toggle("specials");
      }
    }
  }
}

function setCookies(pref) {
  docCookies.setItem("prefs", JSON.stringify(prefs));
}

checkCookies();
window.setTimeout(generate, 100);