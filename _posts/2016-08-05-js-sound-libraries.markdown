---
layout: post
title:  "Web Audio for the User Interface"
date:   2016-08-14 12:00:00 -0400
categories: javascript audio ui
---

<link rel="stylesheet" href="/css/soundpost.css">

When people my age hear the phrase "web audio", they probably think of Geocities sites
of the 90's with irritating sound loops playing in the background. The possibilities then were
limited, and sound was quickly abandoned as a component of most web experiences.
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

That doesn't mean we should start adding firework blasts and blaring trumpets to our landing page just because we can. [Unexpected and unwanted sound is a deal-breaker.](http://webpropelled.com/2012/5-reasons-your-website-should-never-autoplay-sound/) So the first question to ask may well be, "Do my users expect sound?" In the case of a game, music, or similar site, they probably do. If so, adding sound to your user interface could be a welcome area of development. (You still probably want to add a master mute button, though.)

It is with this frame of mind that I began to explore the addition of subtle sound
design into some of my web user interfaces. I had a few goals:

  - The ability to play a sound on an event (e.g. rollover, click)
  - Good performance, low latency
  - Good browser coverage
  - Few to no distracting side effects or annoyances (i.e. avoid the Geocities syndrome)

What follows is an overview of the best practices I've come across during my
experimentation, based on the state of the web as of this writing. Keep in mind that
audio on the web is still a relatively unexplored territory, so there is still much to
create and discover in the field.

# The HTML Audio Element

Up until the advent of HTML5, audio on the web was best described as "primitive." The only way to incorporate sound into a site was with a plug-in like Flash. HTML5 brought with it the `<audio>` tag - a modest but important step up. This tag was designed to allow developers to easily stream sounds and music right from the page with one line of code. Simple controls could be embedded by [adding one attribute:](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)

{% highlight html %}
<audio id="snare" src="snare-2.mp3" controls></audio>
{% endhighlight %}

The result:

<audio id="snare" src="/audio/snare-2.mp3" controls></audio>

By itself, the usefulness of this tag is limited. However, HTML5 also introduced a
javascript API, [HTMLAudioElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement),
that provides the ability to programmatically play sounds. Adding sounds to
events using this interface looks like this:

{% highlight javascript %}
function playSound () {
  document.getElementById("snare2").play();
}
{% endhighlight %}

... which allows you to trigger a sound using javascript. Here's an example of this in use:

<audio id="snare2" src="/audio/snare-2.mp3"></audio>

<p data-height="230" data-theme-id="light" data-slug-hash="akroRZ" data-default-tab="result" data-user="fraziern" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/fraziern/pen/akroRZ/">HTML Demo</a> by Nick Frazier (<a href="http://codepen.io/fraziern">@fraziern</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<p></p>

Try clicking twice in succession, though, and you will immediately experience one of the major drawbacks to HTML audio. Playing a sound more than once is tricky. If you used only the `play()` function and one source, the browser will wait until it's done playing the sound before allowing you to trigger another. In fact even with multiple sources, HTML audio has limited ability to play several sounds at once.

One trick I found to enabling more performant triggering (using only one source) is to always stop the sound before playing it. Note the API doesn't include a "stop" function, but simply reloading the file does the trick:

{% highlight javascript %}
function playSound () {
  document.getElementById("snare2").load();
  document.getElementById("snare2").play();
}
{% endhighlight %}

Now we should be able to hit those rapid fire snares like the next 9th Wonder:

<p data-height="230" data-theme-id="light" data-slug-hash="pbYzxk" data-default-tab="result" data-user="fraziern" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/fraziern/pen/pbYzxk/">HTML Demo Improved</a> by Nick Frazier (<a href="http://codepen.io/fraziern">@fraziern</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<p></p>

# Audio Formats: A Side Note

Choosing the best audio format for web use was once a tricky task. Cross-browser compatibility of formats was all over the place. You usually had to have multiple versions of the same files, with different extensions, at the ready to be prepared for whatever browser your site might encounter.

Now it's simpler: use mp3s.

![Browser coverage from caniuse for mp3s](/img/caniuse_mp3.jpg)
<div class="caption">Current browser coverage for the mp3 format, from caniuse.com</div>

Other than IE8 (which is all but dead) and Opera Mini (which doesn't support audio anyways), mp3 files should work just about anywhere. They're also compact. If all you have are wav files or some other format, go ahead and use a conversion utility (I use [MH Audio Converter](http://www.mediahuman.com/audio-converter/)) and get everything standardized to mp3.

# Web Audio API: A Giant Leap

HTML audio provides a passable solution to sound. Particularly, I found that using it through a javascript library, [Buzz](http://buzz.jaysalvat.com/), made it a flexible and simple option. However, there are still numerous drawbacks:

 - Playing multiple sounds in quick succession is a subpar experience
 - The ability to manipulate the sound is limited
 - Syncing sounds is a pain

Enter the [Web Audio API.](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) Web Audio is the proper successor to HTML Audio, and solves some of the problems of the latter while also adding a vast amount of flexibility. With Web Audio, developers now have a robust set of tools to create sound engines on the level of platform games and pro software synthesizers.

Using Web Audio instead of HTML Audio, we can create a button click sound that layers on top of itself rather than clipping, as this visualization demonstrates:

<!-- stacked waveform css animation follows -->
<p data-height="270" data-theme-id="light" data-slug-hash="qNvWrB" data-default-tab="result" data-user="fraziern" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/fraziern/pen/qNvWrB/">Web Audio Viz</a> by Nick Frazier (<a href="http://codepen.io/fraziern">@fraziern</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<p></p>

There are a couple catches, though, one of which I ran up against immediately: Web Audio is complicated. If you crack open one of the many excellent API tutorials online (I recommend Boris Smus's book [Web Audio API](http://chimera.labs.oreilly.com/books/1234000001552), the entire text of which is available for free on the O'Reilly site) the first thing you'll notice is that merely playing a single sound can require a couple dozen lines of code.

The solution I found to this is [SoundJS](http://www.createjs.com/soundjs). SoundJS, part of the CreateJS suite of tools, is a powerful sound library with a gentle learning curve. Part of its power is in abstracting away many of the details of the lower level audio APIs, such that the same code can be run on HTML Audio, Web Audio, or even Flash audio, depending on what the user's browser supports.

But I've found that where it really excels is in its handling of Web Audio. Now instead of writing a page of code to play a sound on a click event, you can write this:

{% highlight javascript %}
function loadSound () {
  createjs.Sound.registerSound("snare-2.mp3", soundID);
}

function playSound () {
  createjs.Sound.play(soundID);
}
{% endhighlight %}

Try it out and listen to the difference (and sonic improvement):

<p data-height="230" data-theme-id="light" data-slug-hash="GqZKNo" data-default-tab="result" data-user="fraziern" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/fraziern/pen/GqZKNo/">GqZKNo</a> by Nick Frazier (<a href="http://codepen.io/fraziern">@fraziern</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<p></p>

The other major catch is that the Web Audio standard is still in flux - it's currently a working draft, and there is no support in Internet Explorer.

![Web Audio compatibility chart](/img/caniuse_webaudio.jpg)
<div class="caption">Current browser coverage for the Web Audio API, from caniuse.com</div>

At a finer grain, there are currently some additional limitations to audio in general, most notably on moblie devices:

  - With iOS devices, sound is initially locked and will not play until a user-initiated event occurs. This is apparently a measure to reduce bandwidth.
  -  With Android devices, there is no control over audio volume, and you can only play audio as part of a user-initiated event.

These limitations may not matter as much with the click events like I've demonstrated so far, but they may come into play once more sophisticated UI sound design is employed. Which brings us to our last step.

# Going Further with Web Audio

When I started thinking about "UI Sound Design," my first thought was click events. But once that was solved, I wondered about other possibilities. What about rollover events? Or scroll events? Or something completely different? With Web Audio, I've found that there are a world of possibilities.

Web Audio allows you to add several different types of pro-level effects to your audio chain. For example:

  - [BiquadFilterNodes](https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode) can be used as highpass/lowpass/notch filters
  - [ConvolverNodes](https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode) can be used for reverb
  - [DelayNodes](https://developer.mozilla.org/en-US/docs/Web/API/DelayNode) can be used for delay effects
  - [StereoPannerNodes](https://developer.mozilla.org/en-US/docs/Web/API/StereoPannerNode) allow for panning left and right
  - [AnalyserNodes](https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode) enable data analysis and visualization

What if, I thought, you used a BiquadFilterNode in conjunction with an event handler that tracks mouse proximity to a button? You could change a sound based on how close to the button your mouse pointer is. [Moog-style filter sweeps](https://www.youtube.com/watch?v=HieClHTxid0) in your UI - how cool would that be?

It turns out that SoundJS makes this, too, relatively easy (although tweaking the library's Web Audio context is not as well documented as the rest of the API). Using some of the more [advanced](http://createjs.com/docs/soundjs/classes/WebAudioPlugin.html) parts of the API, I found that you can "insert" a filter into SoundJS's Web Audio setup, and fiddle to your heart's content. Adjust the filter based on mouse movements, and voila, a proximity filter:

<!-- proximity filter demo follows -->
<p data-height="230" data-theme-id="light" data-slug-hash="oLVvdg" data-default-tab="result" data-user="fraziern" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/fraziern/pen/oLVvdg/">SoundJS Filter Demo</a> by Nick Frazier (<a href="http://codepen.io/fraziern">@fraziern</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<p></p>

If you want to experiment yourself, check out my SoundJS code in the above pen. The proximity algorithm is based on [this](https://css-tricks.com/snippets/jquery/calculate-distance-between-mouse-and-element/) CSS-Tricks snippet from Chris Coyier.

# The Sky's the Limit

With Web Audio, web developers seem to finally have a deep and powerful toolbox for designing and manipulating audio. It's also ripe for developing new ideas and techniques, as it's really just beginning to be incorporated into modern web user experiences. My own explorations scratch the surface. I'm continuing to search for new ways to engage others, and I look forward to seeing where things go next.

# Additional References

[SoundJS Visualizer Demo](http://createjs.com/demos/soundjs/webaudionodeinsertion): The source code for this demo is the best resource if you want to start pulling apart the SoundJS Web Audio graph

[Designing Sound](http://designingsound.org/): Sound design inspiration from the masters.

[Chrome Experiments](https://www.chromeexperiments.com/): Another amazing collection of design (both visual and auditory) inspiration.
