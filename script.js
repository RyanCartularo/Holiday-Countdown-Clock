const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const eventEl = document.getElementById("event");

const christmas = "25 Dec 2020";
const halloween = "31 Oct 2021";
const thanksgiving = "25 Nov 2021";
const newYears = "1 Jan 2021";
const valentines = "14 Feb 2021";
const easter = "4 Apr 2021";
const birthday = "16 Aug 2021";


const nextBtn = document.getElementById("next");


function countdown() {
    const christmasDate = new Date(christmas);
    const currentDate = new Date();

    const totalSeconds = (christmasDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    if(holidaySelector == 3){ 

    document.body.style.backgroundImage = "url('./christmas.jpg')";
    eventEl.innerHTML = "Chirstmas";
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
    };
}


function countdownHalloween() {
    const halloweenDate = new Date(halloween);
    const currentDate = new Date();

    const totalSeconds = (halloweenDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    if(holidaySelector == 1){

    document.body.style.backgroundImage = "url('./halloween.jpg')";
    eventEl.innerHTML = "Halloween";
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
    };
}

function countdownThanksgiving() {
    const thanksgivingDate = new Date(thanksgiving);
    const currentDate = new Date();

    const totalSeconds = (thanksgivingDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    if(holidaySelector == 2){
    
    document.body.style.backgroundImage = "url('./thanksgiving.jpg')";
    eventEl.innerHTML = "Thanksgiving";
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
    };
}

function countdownNewYears() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    if(holidaySelector == 4){

    document.body.style.backgroundImage = "url('./newYears.jpg')";
    eventEl.innerHTML = "New Years";
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
    };
}

function countdownValentines() {
    const valentinesDate = new Date(valentines);
    const currentDate = new Date();

    const totalSeconds = (valentinesDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    if(holidaySelector == 5){

    document.body.style.backgroundImage = "url('./valentines.jpg')";
    eventEl.innerHTML = "Valentines";
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
    };
}


function countdownEaster() {
    const easterDate = new Date(easter);
    const currentDate = new Date();

    const totalSeconds = (easterDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    if(holidaySelector == 6){

    document.body.style.backgroundImage = "url('./easter.jpg')";
    eventEl.innerHTML = "Easter";
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
    };
}


function countdownBirthday() {
    const birthdayDate = new Date(birthday);
    const currentDate = new Date();

    const totalSeconds = (birthdayDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    if(holidaySelector == 7){

    document.body.style.backgroundImage = "url('./birthday.jpg')";
    eventEl.innerHTML = "My Birthday!";
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
    };
}

let holidaySelector = 0;


nextBtn.addEventListener("click", () =>
{
    holidaySelector++
    console.log(holidaySelector);
    

    // initial call for christmas
if (holidaySelector === 3)
{
countdown();

setInterval(countdown, 1000);
}

// initial call for christmas
else if (holidaySelector === 1)
{
countdownHalloween();

setInterval(countdownHalloween, 1000);
}

// initial call for christmas
else if (holidaySelector === 2)
{
countdownThanksgiving();

setInterval(countdownThanksgiving, 1000);
}

// initial call for christmas
else if (holidaySelector === 4)
{
countdownNewYears();

setInterval(countdownNewYears, 1000);
}

else if (holidaySelector == 5)
{
    countdownValentines();

    setInterval(countdownValentines, 1000);
}


else if (holidaySelector == 6)
{
    countdownEaster();

    setInterval(countdownEaster, 1000);
}

else if (holidaySelector == 7)
{
    countdownBirthday();

    setInterval(countdownBirthday, 1000);
}


else{
    holidaySelector = 1;
}


});

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}





