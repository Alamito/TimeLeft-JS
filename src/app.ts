const SECOND: number = 1000;
const MINUTE: number = SECOND * 60;
const HOUR: number = MINUTE * 60;
const DAY: number = HOUR * 24;

const boxDays: HTMLElement = document.querySelector('[boxDays]');
const boxHours: HTMLElement = document.querySelector('[boxHours]');
const boxMinutes: HTMLElement = document.querySelector('[boxMinutes]');
const boxSeconds: HTMLElement = document.querySelector('[boxSeconds]');

let timeFuture: number = new Date('10-12-2026 00:00:00').getTime();
let updateCountDown = setInterval(() => countDown(), SECOND);

const countDown = () => {
    let timeNow = new Date(Date.now()).getTime();
    let differenceFutureNow: number = timeFuture - timeNow;
    let days: number = Math.floor(differenceFutureNow / DAY);
    let hours: number = Math.floor((differenceFutureNow % DAY) / HOUR);
    let minutes: number = Math.floor((differenceFutureNow % HOUR) / MINUTE);
    let seconds: number = Math.floor((differenceFutureNow % MINUTE) / SECOND);
    printTimeInHTML(days, hours, minutes, seconds);
};

const printTimeInHTML = (days: number, hours: number, minutes: number, seconds: number) => {
    boxDays.innerHTML = days.toString();
    boxHours.innerHTML = hours.toString();
    boxMinutes.innerHTML = minutes.toString();
    boxSeconds.innerHTML = seconds.toString();
};
