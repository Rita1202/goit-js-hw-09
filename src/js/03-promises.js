import Notiflix from 'notiflix';

const refs = {
  delayEl: document.querySelector('[name="delay"]'),
  stepEl: document.querySelector('[name="step"]'),
  amountEl: document.querySelector('[name="amount"]'),
  submitBtn: document.querySelector('button'),
  formEl: document.querySelector('form'),
};

refs.formEl.addEventListener('click', onSubmitHandler);

function onSubmitHandler(event) {
  event.preventDefault();
  const delay = Number(refs.delayEl.value);
  const step = Number(refs.stepEl.value);
  const amount = Number(refs.amountEl.value);

  for (let index = 0; index < amount; index++) {
    createPromise(index + 1, delay + step * index)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      })
      .finally(() => {
        refs.delayEl.value = '';
        refs.stepEl.value = '';
        refs.amountEl.value = '';
      });
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
