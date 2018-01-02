const newDate = new Date('Jan 1, 2019');
const answerSpace = document.querySelector('.answer');
const timerDisplay = document.querySelector('.display__time-left');
let disco = false;

let countdown = setInterval(() => {
    if (Date.now() >= newDate) {
        answerSpace.textContent = '🎉🎉🎉YES🎉🎉🎉';
        disco = true;
    } else {
        answerSpace.textContent = 'NO';
        
    }
    const secondsLeft = Math.round((newDate - Date.now()) / 1000);
    // check if we should stop it!
    if(secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // display it
    timerDisplay.textContent = 'Seconds left: ' + secondsLeft;
  }, 1000);

let discoMode = setInterval(() => {
    if (disco === true) {
        r = randint(150, 255)
        g = randint(150, 255)
        b = randint(150, 255)
        
        document.body.style.backgroundColor = `rgb(${r},${g},${b})`
    }
}, 100);

function randint(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}