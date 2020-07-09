/********************************************************** 
 *  file:     dvd-bounce.js
 *  purpose:  Classic DVD Screensaver
 *  author:   Anthony McGrath (akm@anthonykyle.co.nz)
 ******************************************************** */
document.addEventListener('DOMContentLoaded', start);

/********************************************************** 
 * Global Variables
 ******************************************************** */
var windowSize = {
  "height": window.innerHeight,
  "width": window.innerWidth
} // windowSize{}

var logo = {
  "target": document.getElementById('logo'),
  "x": 0,
  "y": 0,
  "dimX": 200,
  "dimY": 88,
  "lateral": "R",
  "vertical": "D"
} // logo{}

var colors = ["white", "aqua", "blue", "green","pink","red","yellow"];
var index = 0;

function start(){
  var interval = setInterval(function(){moveLogo()}, 10);
} // start()

/********************************************************** 
 * Movement Functions
 ******************************************************** */
function moveLogo(){
  if (logo.lateral == "R"){
    if ((logo.x + logo.dimX) == windowSize.width){
      logo.lateral = "L";
      moveLogo();
      changeColor()
    } else {
      logo.target.style.left = ++logo.x + "px";    
    }
  } else {
    if (logo.x == 0){
      logo.lateral = "R";
      moveLogo();
      changeColor()
    } else {
      logo.target.style.left = --logo.x + "px";    
    }
  }
  if (logo.vertical == "D"){
    if ((logo.y + logo.dimY) == windowSize.height){
      logo.vertical = "U";
      moveLogo();
      changeColor()
    } else {
      logo.target.style.top = ++logo.y + "px";    
    }
  } else {
    if (logo.y == 0){
      logo.vertical = "D";
      moveLogo();
      changeColor()
    } else {
      logo.target.style.top = --logo.y + "px";    
    }
  }
} // moveLogo()

function changeColor(){
  let newIndex;
  do {
    newIndex = getIndex();
  } while (newIndex == index)
  index = newIndex;
  logo.target.src = ("images/" + colors[index] + ".png");
} // changeColor()

function getIndex(){
  return Math.floor(Math.random() * Math.floor(colors.length));
} // getIndex()