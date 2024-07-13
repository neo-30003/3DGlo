const today = document.querySelector(".present_day");
const welcome = document.querySelector(".welcome");
const day = document.querySelector(".day");
const time = document.querySelector(".time");
const newYear = document.querySelector(".new-year");
let currentTime;
let greeting;
let daysRemaining;
let dayTheWeek;

const getData = () => {
  let dayNow = new Date().getDay();
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  const getTillNewYear = (year) => {
    let dateStop = new Date(`01 january ${year}`).getTime();
    let dateNow = new Date().getTime();
    daysRemaining = Math.floor((dateStop - dateNow) / 1000 / 3600 / 24);

    if (daysRemaining === 1 || daysRemaining % 10 === 1) {
      daysRemaining = `${daysRemaining} день`;
    } else if (
      (daysRemaining > 1 && daysRemaining < 5) ||
      (daysRemaining % 10 > 1 && daysRemaining % 10 < 5)
    ) {
      daysRemaining = `${daysRemaining} дня`;
    } else {
      daysRemaining = `${daysRemaining} дней`;
    }

    return daysRemaining;
  };
  const getDayOfWeek = () => {
    const days = [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ];
    dayTheWeek = days[dayNow];
  };
  const timeFormat = () => {
    let halfDay = hours >= 12 ? "PM" : "AM";

    hours = hours < 10 ? `0${hours}` : `${hours}`;
    minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    currentTime = `${hours}:${minutes}:${seconds} ${halfDay}`;
  };
  const greetingFormat = () => {
    if (hours >= 5 && hours < 12) {
      greeting = "Доброе утро";
    }
    if (hours >= 12 && hours < 18) {
      greeting = "Добрый день";
    }
    if (hours >= 18 && hours < 24) {
      greeting = "Добрый вечер";
    }
    if (hours >= 0 && hours < 5) {
      greeting = "Доброй ночи";
    }
  };
  greetingFormat();
  getDayOfWeek();
  timeFormat();
  getTillNewYear("2025");

  welcome.textContent = `${greeting}`;
  day.textContent = `Сегодня: ${dayTheWeek}`;
  time.textContent = `Текущее время: ${currentTime}`;
  newYear.textContent = `До нового года осталось: ${daysRemaining}`;
};
setInterval(getData, 1000);
