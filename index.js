"user strict";

const time = document.querySelector(".time");

const showTime = () => {
  const date = new Date();
  const currentTime = date.toLocaleTimeString().slice(0, -3);
  time.innerHTML = currentTime;
  setTimeout(showTime, 1000);
};

showTime();
