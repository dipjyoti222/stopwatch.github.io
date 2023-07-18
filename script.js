var sec = 00;
var random = 00;
var appendRandom = document.getElementById("random");
var appendSec = document.getElementById("sec");
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
var interval; // to store timer values

// this function will run when click on start
buttonStart.onclick = function () {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(startTimer); //it will call the StartTimer function
};


// this function will run when click on Stop
buttonStop.onclick = function () {
  clearInterval(interval);
};


// this function will run when click on reset
buttonReset.onclick = function () {
  clearInterval(interval);
  random = "00";
  sec = "00";
  appendSec.innerHTML = sec;
  appendRandom.innerHTML = random;
};

//Timer function
function startTimer() {
  random++;

  if (random < 9) {
    appendRandom.innerHTML = "0" + random;
  }
  if (random > 9) {
    appendRandom.innerHTML = random;
  }
  if (random > 99) {
    sec++;
    appendSec.innerHTML = "0" + sec;
    random = 0;
    appendRandom.innerHTML = "0" + 0;
  }
  if (sec > 9) {
    appendSec.innerHTML = sec;
  }
}