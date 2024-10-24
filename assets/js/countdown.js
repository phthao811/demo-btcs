export class Countdown {
  constructor(timerElement, endDate) {
    this.timerElement = timerElement;
    this.endDate = new Date(endDate);
    this.intervalId = null;
    this.init();
  }

  init() {
    this.updateTimer();
    this.intervalId = setInterval(() => this.updateTimer(), 1000);
  }

  updateTimer() {
    const now = new Date();
    const timeDifference = this.endDate - now;

    if (timeDifference <= 0) {
      clearInterval(this.intervalId);
      this.timerElement.textContent = 'End time';
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    this.timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}