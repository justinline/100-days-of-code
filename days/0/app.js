let h = 0;
let s = 100;
let l = 50;
const hsl = document.body.style;
const hslText = document.querySelector('.hsl');
const rgbText = document.querySelector('.rgb');
let freeze = false;


console.log('Hello, world!')
function trackMouse(e){
    if (freeze === false){
        let width = window.innerWidth;
        let height = window.innerHeight;
        let x = e.clientX;
        let y = e.clientY;
        h = Math.ceil(x / width * 357)
        s = Math.ceil(y / height * 100)
        hsl.backgroundColor = `hsl(${h},${100-s}%,${l}%)`;
        updateText();
    }
}
function luminosityScroll(e){
    wheel = e.deltaY;
    if (wheel < 0 && l > 0){
        l = l - 1; 
    }
    else if (wheel > 0 && l < 100) {
        l = l + 1; 
    }
    hsl.backgroundColor = `hsl(${h},${100-s}%,${l}%)`;
    updateText();
    
}

function updateText(){
    hslText.textContent = `(${h}, ${s}%, ${l}%)`;
    rgbText.textContent = document.body.style.backgroundColor;
}

function toggleFreeze(e){
    freeze === true ? freeze = false : freeze = true; 
    trackMouse(e);
    console.log("Freeze, " + freeze)
}


function debug(){
    console.log("Scroll Detected");
}

window.addEventListener("mousemove", trackMouse );
window.addEventListener("wheel", luminosityScroll, false);
window.addEventListener("mousedown", toggleFreeze);