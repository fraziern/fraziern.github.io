---
layout: post
title:  "A Guide to Web Audio: Adding Sound to Your Site"
date:   2016-08-05 12:00:00 -0400
categories: javascript audio games
---

<link rel="stylesheet" href="/css/soundpost.css">

blah

<div class="demo-container">
<button onclick="playSound1();" class="playDrop">soundJS</button>
<button onclick="playSound2();" class="playDrop">HTML</button>
<button onclick="playSound3();" class="playDrop">buzzJS</button>
</div>

blah

<!-- stacked waveform css animation follows -->

<div class="animation-container">
  <div class="btn-container">
    <button class="btn selected" id="htmlAudio" onclick="htmlAudioClick();">HTML Audio</button>
    <button class="btn" id="webAudio" onclick="webAudioClick();">Web Audio</button>
  </div>
  <div class="img-meta-container">
    <div class="img-container" id="img-1"></div>
    <div class="img-container" id="img-2"></div>
    <div class="img-container" id="img-3"></div>
    <div class="tick-container" id="tick-1">
      <div class="tick"></div>
      <div class="click-label">Click!</div>
    </div>
    <div class="tick-container" id="tick-2">
      <div class="tick"></div>
      <div class="click-label">Click!</div>
    </div>
    <div class="tick-container" id="tick-3">
      <div class="tick"></div>
      <div class="click-label">Click!</div>
    </div>
  </div>
</div>

<!-- proximity filter demo follows -->
<div class="demo-container">
  <div class="start-message">CLICK TO START</div>
  <button type="button" name="button" class="playDrop" id="element"></button>
</div>

<div id="distance">
  <span></span>
</div>


<audio id="sound2" src="/audio/kick-1.wav" preload="auto"></audio>

<script src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
<script src="https://code.createjs.com/soundjs-0.6.2.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/buzz/1.2.0/buzz.min.js"></script>
<script src="/js/soundpost.js"></script>

<script>
// soundJS
window.onload = loadSounds;

var sound1 = "simon-1";
var sound3 = null;

function loadSounds () {
  createjs.Sound.registerSound("/audio/drumloop.wav", sound1);
  sound3 = new buzz.sound("/audio/snare-1.wav", {
  preload: true,
  webAudioApi: true
  });
}

function playSound1 () {
  createjs.Sound.play(sound1);
}

// vanilla HTML audio element
function playSound2 () {
  document.getElementById('sound2').load();
  document.getElementById('sound2').play();
}

// buzz
function playSound3 () {
  sound3.stop().play();
}
</script>
