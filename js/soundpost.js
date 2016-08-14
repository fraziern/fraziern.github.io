// eslint rule exceptions:
// These are defined in index.htnl
/*global createjs $ */

// test code
// var $distance = $("#distance span");

var soundProximity = "Proximity";
var soundClick = "Click";
var $element = $("#element");
var filterNode;
var filterMultiplier = 20; // how fast will filter adjust?
var filterOffset = 2500; // when will filter start adjusting?
var looping; // state for button event handling

function loadSounds() {
  createjs.Sound.on("fileload", handleLoad, this);
  // register sounds, which will preload automatically
  createjs.Sound.registerSound("drone.mp3", soundProximity);
  createjs.Sound.registerSound("water-drop.mp3", soundClick);
}

function handleLoad(evt) {

  // create filter in existing context, connect to context destination
  var context = createjs.Sound.activePlugin.context;
  filterNode = context.createBiquadFilter();
  filterNode.type = "lowpass";
  filterNode.frequency.value = 100;
  filterNode.connect(context.destination);

  // attach filter node to our existing dynamicsCompressorNode, which was connected to context.destination
  var dynamicsNode = createjs.Sound.activePlugin.dynamicsCompressorNode;
  dynamicsNode.disconnect();
  dynamicsNode.connect(filterNode);

  // wrap our sound playing in a click event so we can be played on mobile devices
  $(".start-message").click(revealDemo);
}

function revealDemo() {
  $(".playDrop").show();
  $(".start-message").hide();

  looping = true;
  $(".playDrop").click(handleButtonClick); // add button's event handler

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
    looping = false;
  } else {
    startLoopPlayback();
    looping = true;
  }
}

function startLoopPlayback() {
  createjs.Sound.play(soundProximity, {loop: -1});
}

function calculateDistance(elem, mouseX, mouseY) {
  return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left + (elem
    .width() / 2)), 2) + Math.pow(mouseY - (elem.offset().top + (elem
    .height() / 2)), 2)));
}

// Kick us off
$(document).ready(loadSounds);
