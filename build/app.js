const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const boxDays = document.querySelector('[boxDays]');
const boxHours = document.querySelector('[boxHours]');
const boxMinutes = document.querySelector('[boxMinutes]');
const boxSeconds = document.querySelector('[boxSeconds]');
let timeFuture = new Date('10-12-2026 00:00:00').getTime();
let updateCountDown = setInterval(() => countDown(), SECOND);
const countDown = () => {
    let timeNow = new Date(Date.now()).getTime();
    let differenceFutureNow = timeFuture - timeNow;
    let days = Math.floor(differenceFutureNow / DAY);
    let hours = Math.floor((differenceFutureNow % DAY) / HOUR);
    let minutes = Math.floor((differenceFutureNow % HOUR) / MINUTE);
    let seconds = Math.floor((differenceFutureNow % MINUTE) / SECOND);
    printTimeInHTML(days, hours, minutes, seconds);
};
const printTimeInHTML = (days, hours, minutes, seconds) => {
    boxDays.innerHTML = days.toString();
    boxHours.innerHTML = hours.toString();
    boxMinutes.innerHTML = minutes.toString();
    boxSeconds.innerHTML = seconds.toString();
};
