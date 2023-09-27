"use strict";

const daysElem = document.getElementById("days");
const hoursElem = document.getElementById("hours");
const minutesElem = document.getElementById("minutes");
const secondsElem = document.getElementById("seconds");

const formatTime = time => (time < 10) ? `0${time}` : time;

function calibrate(){
  const goal_date = new Date("1 Jan " + (new Date(Date.now()).getFullYear() + 1));
  
  let time_left_secs = (goal_date - new Date()) / 1000;
  
  
  const days = Math.floor(time_left_secs / 3600 / 24);
  const hours = Math.floor(time_left_secs / 3600) % 24;
  const minutes = Math.floor(time_left_secs / 60) % 60;
  const seconds = Math.floor(time_left_secs % 60);
  
  daysElem.innerHTML = formatTime(days);
  hoursElem.innerHTML = formatTime(hours);
  minutesElem.innerHTML = formatTime(minutes);
  secondsElem.innerHTML = formatTime(seconds);
  console.log(desired_dateElem.value);
}


calibrate();

setInterval(calibrate, 1000);