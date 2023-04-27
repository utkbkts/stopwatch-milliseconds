const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const hr = document.querySelector(".hr");
const mn = document.querySelector(".mn");
const sc = document.querySelector(".sc");
const ms = document.querySelector(".ms");

let startTime;
let elapsedTime = 0;
let timer;

function formatTime(time) {
  let hours = Math.floor(time / (60 * 60 * 1000));
  let minutes = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000));
  let seconds = Math.floor((time % (60 * 1000)) / 1000);
  let milliseconds = Math.floor(time % 1000);

  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");
  milliseconds = milliseconds.toString().padStart(3, "0");

  return `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

function updateClock() {
  const timeElapsed = Date.now() - startTime + elapsedTime;
  const formattedTime = formatTime(timeElapsed);

  hr.innerHTML = formattedTime.slice(0, 2);
  mn.innerHTML = formattedTime.slice(3, 5);
  sc.innerHTML = formattedTime.slice(6, 8);
  ms.innerHTML = formattedTime.slice(9);
}

function startTimer() {
  startTime = Date.now();
  timer = setInterval(updateClock, 10);
}

function stopTimer() {
  clearInterval(timer);
  elapsedTime += Date.now() - startTime;
}

function resetTimer() {
  clearInterval(timer);
  elapsedTime = 0;
  hr.innerHTML = "00";
  mn.innerHTML = "00";
  sc.innerHTML = "00";
  ms.innerHTML = "000";
}

start.addEventListener("click", startTimer);

stop.addEventListener("click", stopTimer);

reset.addEventListener("click", resetTimer);
