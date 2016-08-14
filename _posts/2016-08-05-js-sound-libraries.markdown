---
layout: post
title:  "Web Audio for the User Interface"
date:   2016-08-05 12:00:00 -0400
categories: javascript audio games
---

<link rel="stylesheet" href="/css/soundpost.css">

When people my age hear the phrase "web audio", they probably think of Geocities sites
of the 90's with tinny sound loops playing in the background. The possibilities then were
limited, and sound was quickly abandoned as a component of serious web experiences.
Other than the occasional "experimental" site or band page, sound on the web since then
has been the exception rather than the rule.

The technology has come a long way since then, though, and with the advances have come
the opportunity to start looking at sound as a real possibility for the web.
And not just for media-heavy sites. Video game designers have for years understood the value
of sound design in even the most mundane menus and user interface interactions. See for
example the rich sound design of the [Destiny character menus.](https://www.youtube.com/watch?v=W17KKFf9GRE)
While web interactions are not quite the same, with the continued emphasis on
the user experience there is every reason to consider engaging the auditory sense
as part of the package.

It is with this frame of mind that I began to explore the addition of subtle sound
design into my web user interfaces. I had a few goals:

  - Ability to play a sound on an event (e.g. rollover, click)
  - Good performance, low latency
  - Good browser coverage
  - Few to no distracting side effects (avoid the Geocities syndrome)

What follows is an overview of the best practices I've come across during my
experimentation, based on the state of the web as of this writing. Keep in mind that
audio on the web is still a relatively unexplored territory, so there is still much to
create and discover in the field.

# The HTML Audio Element

Up until the advent of HTML5, audio on the web was best described as "primitive." HTML5
brought with it the `<audio>` tag - a modest step up. This tag was designed to allow
developers to easily stream sounds and music right from the page with one line of code. Simple controls
could be embedded by [adding one attribute:](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)

{% highlight html %}
<audio id="sound1" src="drumloop.mp3" controls></audio>
{% endhighlight %}

The result:

<audio src="/audio/drumloop.mp3" controls></audio>

By itself, the usefulness of this tag is limited. However, HTML5 also introduced a
javascript API, [HTMLAudioElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement),
that provides the ability to programmatically play sounds. Adding sounds to
events using this interface looks like this:

{% highlight javascript %}
function playSound () {
  document.getElementById('sound1').play();
}
{% endhighlight %}

... which

# Audio Formats: A Side Note

Use mp3s.

(caniuse snapshot of mp3 coverage)

*** HTML audio with buzzJS

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

*** Web Audio

*** SoundJS

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

# Additional References
