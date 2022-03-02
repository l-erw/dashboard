# Personal Dashboard

## Table of contents

- [Overview](#overview)   
- [My process](#my-process)  
- [Built with](#built-with)  
- [What I learned](#what-i-learned)  
- [Continued development](#continued-development)  
- [Author](#author)  
- [Acknowledgments](#acknowledgments)  

## Overview

- [Dashboard](https://lizzieerwood-dashboard.netlify.app) is a personal dashboard packaged as a Chrome extension. It uses the Unsplash API for the background image and the OpenWeatherAPI for the weather. Also displays the current time and links to WindowSwap, a website that lets you see the view from windows around the world.


## My process

- Set up time and background first, using Unsplash API
- Created small weather module - originally with temperature, location and weather icon (e.g. sunny, cloudy, etc) from the OpenWeather API
- Expanded weather module to include sunrise and sunset times, and made icons for these in Figma
- Added a link to WindowSwap
- Added loading circle for the weather module as the API takes a few seconds to return 


## Built with

- JavaScript
- CSS3
- HTML5
- Figma


## What I learned

- Reading and understanding API documentation in order to return a variety of information
- Taking information returned from the API and making it display on the page
- Catching errors and displaying default views if the API call returns an error
- How to use Figma to make and export icons
- Converting unix times to 24hr formats


## Continued development

- Might add another module in the bottom right with current news headlines from Guardian API or similar


## Author

Website - [lizzieerwood.dev](https://lizzieerwood.dev)  
GitHub - [@l-erw](www.github.com/l-erw)  
Twitter - [@l_erwood](www.twitter.com/l_erwood)

## Acknowledgments

Scrimba - for the knowledge gained from the API module  
