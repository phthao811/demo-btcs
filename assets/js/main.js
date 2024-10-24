import { Countdown } from './countdown.js';

document.addEventListener('DOMContentLoaded', () => {
  const countdownElement = document.querySelector('.countdown-timer');

  if (countdownElement) {
    const endDate = countdownElement.getAttribute('data-end-date');
    new Countdown(countdownElement, endDate);
  }
});