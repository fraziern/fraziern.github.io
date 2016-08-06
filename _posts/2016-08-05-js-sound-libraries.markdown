---
layout: post
title:  "A Guide to Web Audio: Adding Sound to Your Site"
date:   2016-08-05 12:00:00 -0400
categories: javascript audio games
---

<style>
.btn-container {
  width: 500px;
  height: 110px;
  text-align: center;
  margin: 0 auto;
  margin-top: 100px;
  background: #e1d1fc;
}

.playSound {
  border-radius: 50%;
  height: 70px;
  width: 70px;
  margin-top: 20px;
  margin-left: 10px;
  outline: none;
  background: #d18adb;
  color: white;
}

.playSound:hover {
  background: white;
  color: black;
}
</style>


<div class="btn-container">
<button onclick="playSound1();" class="playSound">soundJS</button>
<button onclick="playSound2();" class="playSound">HTML</button>
<button onclick="playSound3();" class="playSound">buzzJS</button>
</div>


<audio id="sound2" src="/audio/kick-1.wav" preload="auto"></audio>

<script src="https://code.createjs.com/soundjs-0.6.2.min.js"> </script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/buzz/1.2.0/buzz.min.js"> </script>

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
