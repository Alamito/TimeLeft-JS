const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const boxDays = document.querySelector('.days');
const boxHours = document.querySelector('.hours');
const boxMinutes = document.querySelector('.minutes');
const boxSeconds = document.querySelector('.seconds');
const boxGridContainer = document.querySelector('.gridContainer');
const boxNewEvent = document.querySelector('.newEvent');
const boxInfoHigh = document.querySelector('.infoHigh');

const buttonNewEvent = document.querySelector('.buttonNewEvent');
const buttonCancelEvent = document.querySelector('.buttonCancelEvent');
const buttonSaveEvent = document.querySelector('.buttonSaveEvent');

const inputDate = document.querySelector('.date');
const inputEvent = document.querySelector('.event');

const countDown = () => {
    let timeNow = new Date(Date.now()).getTime();
    let differenceFutureNow = timeFuture - timeNow;
    checkValidityDate(differenceFutureNow);
};

const checkValidityDate = (differenceFutureNow) => {
    if (differenceFutureNow < 0) {
        printTimes(0);
    } else {
        printTimes(differenceFutureNow);
    }
};

const printTimes = (differenceFutureNow) => {
    boxDays.innerHTML = Math.floor(differenceFutureNow / DAY);
    boxHours.innerHTML = Math.floor((differenceFutureNow % DAY) / HOUR);
    boxMinutes.innerHTML = Math.floor((differenceFutureNow % HOUR) / MINUTE);
    boxSeconds.innerHTML = Math.floor((differenceFutureNow % MINUTE) / SECOND);
};

buttonNewEvent.onclick = () => {
    boxNewEvent.style.display = 'flex';
    boxGridContainer.classList.add('lowBrightness');
    buttonNewEvent.disabled = true;
};

buttonCancelEvent.onclick = () => {
    boxNewEvent.style.display = 'none';
    boxGridContainer.classList.remove('lowBrightness');
    buttonNewEvent.disabled = false;
};

buttonSaveEvent.onclick = () => {
    boxNewEvent.style.display = 'none';
    boxGridContainer.classList.remove('lowBrightness');
    buttonNewEvent.disabled = false;

    clearInterval(updateCountDown);
    timeFuture = new Date(`${inputDate.value} 00:00:00`).getTime();
    updateCountDown = setInterval(() => countDown(), SECOND);

    boxInfoHigh.innerHTML = inputEvent.value;
};

// First Execution
let timeFuture = new Date('10-12-2026 00:00:00').getTime();
let updateCountDown = setInterval(() => countDown(), SECOND);
