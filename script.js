const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const boxDays = document.querySelector('.days');
const boxHours = document.querySelector('.hours');
const boxMinutes = document.querySelector('.minutes');
const boxSeconds = document.querySelector('.seconds');

let timeFuture = new Date('10/12/2026 00:00:00').getTime();

const countDown = () => {
    let timeNow = new Date(Date.now()).getTime();
    let differenceFutureNow = timeFuture - timeNow;
    printTimes(differenceFutureNow);
};

const printTimes = (differenceFutureNow) => {
    boxDays.innerHTML = Math.floor(differenceFutureNow / DAY);
    boxHours.innerHTML = Math.floor((differenceFutureNow % DAY) / HOUR);
    boxMinutes.innerHTML = Math.floor((differenceFutureNow % HOUR) / MINUTE);
    boxSeconds.innerHTML = Math.floor((differenceFutureNow % MINUTE) / SECOND);
};

setInterval(() => countDown(), SECOND);


/* É UTILIZADO PARA MUDAR O TEMPO CONFORME O USUARIO DESEJA */
function resetCountdown() {
    clearInterval(x);
    let date_end = document.form_main.date_end.value;
    timeFuture = new Date(`${date_end} 00:00:00`).getTime();
    x = setInterval(() => countDown(), second);
}
