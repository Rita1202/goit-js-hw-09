const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', onClickStartHandler);

let intervalId = null;

function onClickStartHandler(event) {
  event.target.disabled = true;
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

stopBtn.addEventListener('click', onClickStopHandler);

function onClickStopHandler() {
  clearInterval(intervalId);
  startBtn.removeAttribute('disabled');
}
