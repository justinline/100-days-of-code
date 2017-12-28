// Background Animation
// TODO: MAKE GRID PROGRAMATICALLY
const grid = document.querySelector('body');
let position = 0
  
function draw(){
  
  if (position > 49){
    position = 0; 
    } 
  position++;
  grid.style.backgroundPosition="-2px -2px, " + position + "px -2px, -1px -1px, -1px -1px";
  window.requestAnimationFrame(draw);

    }

const refreshRate = 10;
const max = 50;

 window.requestAnimationFrame(draw);