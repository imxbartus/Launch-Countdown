const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function countdown() {
  const destDate = new Date("20 april 2022");
  const currentDate = new Date();

  const totalSeconds = Math.floor((destDate - currentDate) / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = setTime(days);
  hoursEl.innerHTML = setTime(hours);
  minutesEl.innerHTML = setTime(minutes);
  secondsEl.innerHTML = setTime(seconds);
}

function setTime(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);
