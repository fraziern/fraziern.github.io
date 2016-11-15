---
layout: post
title:  "Church Volunteer Signup Sheet"
date:   2016-11-15 10:25:21 -0400
categories: javascript full-stack
img: /img/ss_sched.jpg
description: "A single page app for managing church volunteer signups"
---

Single Page App built from the ground up, with back-end API and React front-end.

**This app is currently in active use by Raleigh Moravian Church!**

![Project screenshot](/img/gif_sched1.gif)
<div class="caption">Admin page shown.</div>

My church had been using a Google Docs spreadsheet to solicit and manage signups for each Sunday's volunteers, but there were several pain points from both the administrative end, and on the part of the volunteers who used the page to sign up:

- Google Docs did not work well on mobile devices
- Administrators did not want volunteers to change signups within 2 weeks of the scheduled day, to prevent last minute changes
- The UI was unwieldy for users who were older or less computer savvy
- The church was concerned that if users had difficulty signing up, they would be discouraged from volunteering

I developed an online signup sheet app that attempted to reduce friction involved in signing up for slots, and for administering the site:

- There is no login requirement for volunteers
- Separate screens for volunteers and admins
- Streamlined responsive layout designed for "mobile first"
- Signup days and slots within days can be added, edited, deleted easily from desktop or mobile
- Slots can be filtered to show only unfilled slots, and unfilled slots are always highlighted in red for ease of location


Front-end Technologies used:
---------------------------

- ReactJS
- React Router
- Redux
- Bootstrap

Back-end Technologies Used:
--------------------------

- MongoDB
- Mongoose
- Node.js
- Express

Code at  {% include icon-github.html username="fraziern" %} / [schedule](https://github.com/fraziern/schedule)
