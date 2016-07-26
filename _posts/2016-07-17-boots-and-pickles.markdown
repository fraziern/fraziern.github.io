---
layout: post
title:  "Adventures with Joshua Davis, Processing, and the Mathematics of Nature"
date:   2016-07-17 10:25:21 -0400
categories: processing art graphics
---

In 2014 I took Joshua Davis's [online class on programming graphics and generative art](https://www.skillshare.com/classes/design/Programming-Graphics-I-Introduction-to-Generative-Art/782118657). I've long been a fan of Joshua's work, and had played around with the Processing language enough to know how fun and powerful it is. So when I found out about the class I jumped at the chance to download a tiny bit of his genius into my brain.

The final class project required us to create a 2D vector image, building on the algorithmic, color, and design techniques we had learned in class. So without further ado, I present to you - Boots and Pickles:

![bootsAndPickles1](/img/bp/bootsPickles3.jpg)

(Well, that's one of them, anyways.)

My starting point was one of nature's most amazing mathematical tricks - the Fibonacci spiral.

![sunflower](/img/bp/sunflower.jpg)

I had long wanted to tinker with this design and Joshua's class struck me as the perfect setting. Helpfully, there are several excellent sources online for the basic algorithm to generate the spiral, including (add stuff here).

Joshua devoted a section of the class to color - particularly tools and techniques for developing a palette. He's a big fan of finding a color combination that works already, and "ripping it off." So using some of his recommended tools, I did just that. I took a background from the old TV show "Soul Train" and sampled the dominant colors for my project:

![soul train](/img/bp/product-bg-desktop-soultrain.jpg)

The class focused on a certain workflow: (a) create a small (preferably hand-built) visual component, (b) color it nicely, (c) render it somewhere on the screen using [Processing](https://processing.org/) (and Davis's own [rendering framework](http://www.hypeframework.org/)), (d) repeat.

So I had my colors, I had my pattern, I just needed something to draw. For that, I used boots and pickles. There's this joke about how if you say "boots and pants and boots and pants and ..." over and over it starts to sound like techno music. I liked the idea of translating the joke into an image, but changed it slightly to "boots and pickles," because why not?

Using some stock boots and pickles images, I hand-traced a few drawings on an iPad, cleaned them up in Inkscape, and added random colors from my Soul Train palette. After a few tests, something started to emerge:

![bootsPicklesTest](/img/bp/render-000066.jpg)

The spiral algorithm came next, but the code I had come up with turned out to be highly sensitive to initial settings (in other words, it was finicky). Rather than it being a tedious challenge, though, its quirky nature opened up the possibility of endless designs. I built in a little randomness to the settings, and once I had the ranges dialed in and a way to speed up the feedback loop, things started getting fun:

![bootsPickles2](/img/bp/render-000064-raw.jpg)

![bootsPickles4](/img/bp/render-000114-raw.jpg)

Every time I ran the algorithm, something a little different popped out. I'm sure if I sat there and generated patterns long enough, the "perfect" picture would emerge. But I think I ended up with two or three rather nice ones all the same. After picking one particularly good example and adjusting scale, stroke, background texture, aliasing, opacity, and so on, here's where I ended up:

![bootsAndPickles1](/img/bp/bootsPickles3.jpg)

In sum, I highly recommend Joshua Davis's class to anyone interested in intersecting art and code. I had a lot of fun with it, and got to work both my coding and visual-design muscles in many new ways.
