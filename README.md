# ![React + Redux Example App](project-logo.png)

> ### Test Exercise. Author: Roman Dobrynin

## Overview

To get the frontend running locally:

- Clone this repo
- `npm install` to install all req'd dependencies
- `npm start` to start the local server

Local server will use port 5555 instead of standard port 3000 to prevent conflicts with backends like Node or Rails.

## Functionality overview

The test application is a trading chat. It not uses a backend API due to Frontend assignment specs.

**General functionality:**

- Main page by default is "Sell Bitcoins" and in its functionality
- Other pages are empty due to Frontend assignment specs
- Left column layout consists private trade chat component with instances
- Center column layout consists chat with message sending component
- Right column consists trade information
- Layout is responsive for small gadgets (no specifications for devices) and desktop

**Technical implementation:**

- SPA implemented with ReactJS and Redux;
- SCSS styling applied for components
- Not used any css frameworks like bootstrap/material & etc., the idea to perform you my skills in styling
- Used Typescript for making it easier to read and debug
