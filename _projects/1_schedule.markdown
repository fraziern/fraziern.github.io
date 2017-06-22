---
layout: post
title:  "Church Volunteer Signup Sheet"
date:   2017-05-13 10:25:21 -0400
categories: javascript full-stack
img: /img/ss_sched.jpg
description: "A single page app for managing church volunteer signups"
---
Single Page App built from the ground up, with back-end API and React front-end.

**This app is currently in active use by Raleigh Moravian Church!**

![Project screenshot](/img/gif_sched3.gif)
<div class="caption">Admin page shown.</div>

My church had been using a Google Docs spreadsheet to solicit and manage signups for each Sunday's volunteers, but there were several pain points from both the administrative end, and on the part of the volunteers who used the page to sign up:

- Google Docs did not work well on mobile devices
- Administrators did not want volunteers to change signups within 2 weeks of the scheduled day, to prevent last minute changes
- The UI was unwieldy for users who were older or less computer-savvy
- The church was concerned that if users had difficulty signing up, they would be discouraged from volunteering

I developed an online signup sheet app that attempted to reduce friction involved in signing up for slots, and for administering the site:

- Primary design principle is ease of use for non-technical and older users: large type, simple layout, muted colors
- For volunteers, no login requirement and one-click signup with autosave lowers as many barriers as possible
- Sanitized inputs and back-end validation to ensure security and data integrity
- Admin view includes full editing and filtering options
- Streamlined responsive layout designed for "mobile first"
- Signup days and slots within days can be added, edited, deleted easily from desktop or mobile
- Reports page for admins includes filterable data visualizations to assist with planning and volunteer appreciation strategy

![Reports screenshot](/img/gif_sched4.gif)
<div class="caption">Reports page shown.</div>


Front-end technologies used include:
---------------------------

- ReactJS
- Redux
- RxJS
- Passport authentication
- Recharts React/D3 components
- React Router
- Bootstrap

Back-end technologies used include:
--------------------------

- MongoDB
- Mongoose
- Node.js
- Express

Built with Webpack and Babel

Code at  {% include icon-github.html username="fraziern" %} / [schedule](https://github.com/fraziern/schedule)

Last updated: May 13, 2017
