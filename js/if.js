'use strict';

const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  let choise = select.value;

  // if (choise === "sunny") {
  //   para.textContent = "Сегодня хорошо и солнечно. Носите шорты! Идите на пляж, или в парк, и купите мороженое.";
  // } else if (choise === "rainy") {
  //   para.textContent = "Дождь падает за окном; возьмите плащ и зонт, и не находитесь слишком долго на улице.";
  // } else if (choise === "snowing") {
  //   para.textContent = "Снег падает - морозно! Лучше всего посидеть с чашкой горячего шоколада или слепить снеговика.";
  // }
  // else if (choise === "overcast") {
  //   para.textContent = "Дождя нет, но небо серое и мрачное; он все может измениться в любую минуту, поэтому на всякий случай возьмите дождевик.";
  // } else {
  //   para.textContent = '';
  // }

  switch (choise) {
    case "sunny":
      para.textContent = "Сегодня хорошо и солнечно. Носите шорты! Идите на пляж, или в парк, и купите мороженое.";
      break;
    case "rainy":
      para.textContent = "Дождь падает за окном; возьмите плащ и зонт, и не находитесь слишком долго на улице.";
      break;
    case "snowing":
      para.textContent = "Снег падает - морозно! Лучше всего посидеть с чашкой горячего шоколада или слепить снеговика.";
      break;
    case "overcast":
      para.textContent = "Дождя нет, но небо серое и мрачное; он все может измениться в любую минуту, поэтому на всякий случай возьмите дождевик.";
      break;

    default: para.textContent = '';
      break;
  }

}

