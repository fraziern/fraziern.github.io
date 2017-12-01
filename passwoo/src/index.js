/* global Clipboard docCookies */
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
let prefs = {
  numbers: false,
  specials: false
};

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

  let displayArr = Array(passwordLength).fill("");

  for (let i = 0; i <= 10; i++) {
    if (i == 10) {
      window.setTimeout(() => {
        output.textContent = passwordArray.join("");
      }, 10 * i);
    } else {
      window.setTimeout(() => {
        displayArr = displayArr.map(() => {
          return letters.getRandElement();
        });
        output.textContent = displayArr.join("");
      }, 10 * i);
    }
  }
}

// click handlers
function toggle(type) {
  prefs[type] = !prefs[type];
  buttons[type].classList.toggle("on");
}

let btnGenerate = document.getElementById("generate");
btnGenerate.addEventListener("click", e => {
  e.preventDefault();
  generate();
});

let buttons = {
  specials: document.getElementById("punctuation"),
  numbers: document.getElementById("numbers")
};

for (const btn in buttons) {
  buttons[btn].addEventListener("click", e => {
    e.preventDefault();
    toggle(btn);
    setCookies();
    generate();
  });
}

let btnHelp = document.getElementById("help-link");
let helpEls = document.getElementsByClassName("help");
btnHelp.addEventListener("click", e => {
  e.preventDefault();
  Array.prototype.forEach.call(helpEls, function(el) {
    el.classList.add("show-tooltip");
    window.setTimeout(function() {
      el.classList.remove("show-tooltip");
    }, 3000);
  });
});

// check for user preferences
function checkCookies() {
  if (docCookies.hasItem("prefs")) {
    let prefsCookie = JSON.parse(docCookies.getItem("prefs"));
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
