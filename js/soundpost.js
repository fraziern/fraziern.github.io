// CSS waveform animation functions
function htmlAudioClick() {
  document.getElementById("img-1").className = "img-container";
  document.getElementById("img-2").className = "img-container";
  document.getElementById("img-3").className = "img-container";

  document.getElementById("htmlAudio").className = "btn selected";
  document.getElementById("webAudio").className = "btn";

}

function webAudioClick() {
  document.getElementById("img-1").className = "img-container img-1--expanded";
  document.getElementById("img-2").className = "img-container img-2--expanded";
  document.getElementById("img-3").className = "img-container img-3--expanded";

  document.getElementById("htmlAudio").className = "btn";
  document.getElementById("webAudio").className = "btn selected";

}

// eslint rule exceptions:
// These are defined in index.htnl
/*global createjs $ */

// test code
// var $distance = $("#distance span");

var soundProximity = "Proximity";
var soundClick = "Click";
var soundSnare = "Snare";
var $element = $("#filterButton");
var filterNode;
var filterMultiplier = 20; // how fast will filter adjust?
var filterOffset = 2500; // when will filter start adjusting?
var looping; // state for button event handling

function loadSounds() {
  createjs.Sound.on("fileload", handleLoad, this);
  // register sounds, which will preload automatically
  createjs.Sound.registerSound("/audio/drone.mp3", soundProximity);
  createjs.Sound.registerSound("/audio/water-drop.mp3", soundClick);
  createjs.Sound.registerSound("/audio/snare-2.mp3", soundSnare);
}

function handleLoad(evt) {

  // create filter in existing context, connect to context destination
  var context = createjs.Sound.activePlugin.context;
  filterNode = context.createBiquadFilter();
  filterNode.type = "lowpass";
  filterNode.frequency.value = 20000;
  filterNode.connect(context.destination);

  // attach filter node to our existing dynamicsCompressorNode, which was connected to context.destination
  var dynamicsNode = createjs.Sound.activePlugin.dynamicsCompressorNode;
  dynamicsNode.disconnect();
  dynamicsNode.connect(filterNode);

  // wrap our sound playing in a click event so we can be played on mobile devices
  $(".start-message").click(revealDemo);
}

function revealDemo() {
  $("#filterButton").show();
  $(".start-message").hide();

  looping = true;
  $("#filterButton").click(handleButtonClick); // add button's event handler

  // add proximity-filter handler
  $(document).mousemove(function(e) {
    var mX = e.pageX;
    var mY = e.pageY;
    var distance = calculateDistance($element, mX, mY);
    var filterValue = (filterOffset - (filterMultiplier * distance));
    filterNode.frequency.value = filterValue > 0 ? filterValue : 0;
    // testing code
    // $distance.text(distance);
  });

  startLoopPlayback();
}

function handleButtonClick(e) {
  e.stopImmediatePropagation();   // prevent double clicks
  if (looping) {
    // stopping the soundInstance doesn't seem to work when you have a filter node
    // connected - you have to stop everything.
    createjs.Sound.stop();
    createjs.Sound.play(soundClick);
    $element.text("Restart");
    looping = false;
  } else {
    startLoopPlayback();
    $element.text("Click Me");
    looping = true;
  }
}

function startLoopPlayback() {
  filterNode.frequency.value = 200;
  createjs.Sound.play(soundProximity, {loop: -1});
}

function calculateDistance(elem, mouseX, mouseY) {
  return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left + (elem
    .width() / 2)), 2) + Math.pow(mouseY - (elem.offset().top + (elem
    .height() / 2)), 2)));
}


// vanilla HTML audio element
function playHTMLSound () {
  document.getElementById("snare2").play();
}

function stopPlayHTMLSound () {
  document.getElementById("snare2").load();
  document.getElementById("snare2").play();
}

function webAudioSound () {
  filterNode.frequency.value = 20000;
  createjs.Sound.play(soundSnare);
}

// Kick us off
$(document).ready(loadSounds);
