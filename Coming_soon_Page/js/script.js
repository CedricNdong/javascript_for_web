console.log("Autor : Cedric Ndong");

const seconds = document.querySelector(".seconds .number");
const minutes = document.querySelector(".minutes .number");
const hours = document.querySelector(".hours .number");
const days = document.querySelector(".days .number");

let deadlineDate = new Date(" Sep 18, 2022 23:59:58").getTime();

const timeFunction = setInterval(() => {
    let currentDate = new Date().getTime();

    let restTime = deadlineDate - currentDate;

    const tempSecValue = 1000;
    const tempMinValue = tempSecValue * 60;
    const tempHourValue = tempMinValue * 60;
    const tempDayValue = tempHourValue * 24;

    let dayValue = Math.floor(restTime / tempDayValue);
    let hourValue = Math.floor((restTime % tempDayValue) / tempHourValue);
    let minValue = Math.floor((restTime % tempHourValue) / tempMinValue);
    let secValue = Math.floor((restTime % tempMinValue) / tempSecValue);


    if (dayValue === 0) {
    clearInterval(timeFunction);
    }
    seconds.textContent =  `${secValue}` ;
    minutes.textContent = `${minValue}`;
    hours.textContent = `${hourValue}`;
    days.textContent =`${dayValue}`;
  
}, 1000); 


