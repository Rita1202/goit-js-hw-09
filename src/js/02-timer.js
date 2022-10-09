import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  input: document.querySelector('#datetime-picker'),
  start: document.querySelector('[data-start]'),
};

refs.start.setAttribute('disabled', true);
refs.start.classList.add('start-btn');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    refs.start.removeAttribute('disabled');

    const data = selectedDates[0];
    const currentData = Date.now();
    const deltaData = data - currentData;
    if (deltaData < 0) {
      Notiflix.Notify.failure('Please choose a date in the future');
      refs.start.setAttribute('disabled', true);
      return;
    }

    refs.start.addEventListener('click', onClickStartHandler);
    function onClickStartHandler() {
      idInterval = setInterval(() => {
        const currentData = Date.now();
        const deltaData = data - currentData;
        const { days, hours, minutes, seconds } = convertMs(deltaData);
        if (deltaData < 0) {
          clearInterval(idInterval);
        }
        refs.days.textContent = days;
        refs.hours.textContent = hours;
        refs.minutes.textContent = minutes;
        refs.seconds.textContent = seconds;
      }, 1000);
    }
  },
};

flatpickr('input#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(String(Math.floor(ms / day)));
  console.log(days);
  // Remaining hours
  const hours = addLeadingZero(String(Math.floor((ms % day) / hour)));
  // Remaining minutes
  const minutes = addLeadingZero(
    String(Math.floor(((ms % day) % hour) / minute))
  );
  // Remaining seconds
  const seconds = addLeadingZero(
    String(Math.floor((((ms % day) % hour) % minute) / second))
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.padStart(2, 0);
}
