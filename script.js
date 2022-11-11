// Урок 2 ClassList и делегирование событий

// .className показывает все классы
// .сlassList позволяет работать с классами узла
// .length возвращает кол-во классов
// .item(0) показывает класс по индексу
// .add() добавляет класс
// .remove() удаляет класс
// .toggle() либо добавляет класс, либо удаляет, если он уже есть

// // querySelectorAll Возвращает NodeList, содержащий
// // все подходящие узлы.
// const btns = document.querySelectorAll("button"),
//   wrapper = document.querySelector(".btn-block");

// btns[1].classList.add("button", "red");

//Добавляем обработчик событий на кнопку btns[0],
// при нажатии, проверяет, есть ли у btns[1] класс 'red',
// если нет удаляет, если есть - добавляет
// btns[0].addEventListener("click", () => {
//   if (!btns[1].classList.contains("red")) {
//     btns[1].classList.add("red");
//   } else {
//     btns[1].classList.remove("red");
//   }
//   // либо так
//   //   btns[1].classList.toggle('red');
// });

//Проверяем есть ли класс 'red' у элемента btns[1]
// if (btns[1].classList.contains("red")) {
//   console.log(true);
// }

//event содержит в себе
//всю информацию, о том элементе, в котором происходит событие
// .tagName
// Делегируем событие с родителя wrapper на его потомка с классом blue
// //Продвинутое делегирование от GOOGLE event.target.matches("button.blue")
// wrapper.addEventListener("click", (event) => {
//   if (event.target && event.target.matches("button.blue")) {
//     console.log("hello");
//   }
// });

//Перебирает все кнопки bnts и вешает на них обработчик событий,
// !!! НО НЕ ВЕШАЕТ ЕГО НА ДИНАМИЧЕСКИ ДОБАВЛЕННЫЕ ЭЛЕМЕНТЫ
// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('Hello')
//     })
// })

//.createElement создает элемент на странице
// //потом добавляем класс 'red' к кнопе и добавляем кнопку в родитель wrapper
// const btn = document.createElement("button");
// btn.classList.add("blue");
// wrapper.append(btn);

// const tabsParent = document.querySelector(".buttons");

const initialTab = document.querySelectorAll(".btn");
const tabsParent = document.querySelector(".buttons");
const content = document.querySelectorAll(".cont");

function contentDontShow(tab) {
  content.forEach((item) => {
    item.classList.add("hide");
    item.classList.remove("show", "fade");

    tab.forEach((item) => {
      item.classList.remove("active");
    });
  });
}

function contentShow(tab, i = 0) {
  content[i].classList.add("show", "fade");
  content[i].classList.remove("hide");

  tab[i].classList.add("active");
}
//Добавляем новую кнопку
let p = document.createElement("button");
p.innerHTML = "Вторник";
p.classList.add("btn");
tabsParent.appendChild(p);

contentDontShow(initialTab);
contentShow(initialTab);

tabsParent.addEventListener("click", (event) => {
  const tab = tabsParent.querySelectorAll(":scope > .btn");
  tab.forEach((item, i) => {
    if (event.target === item) {
      contentDontShow(tab);
      contentShow(tab, i);
    }
  });
});

//_________________________

// const btnAn = document.querySelector(".btnAn");
// let timeId;
// let i = 0;

// function myAnimation() {
//   const element = document.querySelector(".box");
//   let pos = 0;

//   const id = setInterval(frame, 10);
//   function frame() {
//     if (pos === 800) {
//       clearInterval();
//     } else {
//       pos += 1;
//       element.style.top = pos + "px";
//       element.style.left = pos + "px";
//     }
//   }
// }

// btnAn.addEventListener("click", (event) => {
//   myAnimation();
// });

// ------------------------------------------------------------------

// let timeNow = function () {
//   return let a = "dsafas";
// };
// timeMSK = setInterval(timeNow, 1000);

// let dateDiv = document.createElement("div");
// dateDiv.innerHTML = `${timeMSK}`;
// tabsParent.appendChild(dateDiv);
document.getElementById("current_date_time_block2").innerHTML = new Date();

setInterval(function () {
  document.getElementById("current_date_time_block2").innerHTML = new Date();
}, 1000);

//-----------------До начала лета-----------------------------------

const deadLine = "2023-06-01";

function getTimeout(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date());
  const days = Math.floor(t / (1000 * 60 * 60 * 24));
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((t / 1000 / 60) % 60);
  const second = Math.floor((t / 1000) % 60);

  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    second: second,
  };
}

function setClock(selector, endtime) {
  const timer = document.querySelector(selector);
  const days = timer.querySelector("#days");
  const hours = timer.querySelector("#hours");
  const minutes = timer.querySelector("#minutes");
  const second = timer.querySelector("#seconds");
  const timeInterval = setInterval(updateClock, 1000);

  updateClock();

  function updateClock() {
    const t = getTimeout(endtime);

    days.innerHTML = t.days;
    hours.innerHTML = t.hours;
    minutes.innerHTML = t.minutes;
    second.innerHTML = t.second;

    if (t.total < 0) {
      clearInterval(timeInterval);
    }
  }
}

setClock(".timer", deadLine);

// -----------------------------Окно обратной связи-------------------------

//Modal

const btnClose = document.querySelector(".modal__close");
const modalBox = document.querySelector(".modal");
const inputInfo = modalBox.querySelectorAll(".modal__input");
const btnCall = modalBox.querySelector(".btn_dark");
const btnPlsCall = document.querySelector("[data-model]");
const modalWindow = document.querySelector(".modal__dialog");
const modalContent = document.querySelector(".modal__content");

//Закрыть модальное окно
btnClose.addEventListener("click", () => {
  modalBox.style.display = "none";
});

modalBox.addEventListener("click", (event) => {
  if (event.target === modalBox) {
    modalBox.style.display = "none";
  }
});

//Получить данные, по нажатию кнопки

btnCall.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(inputInfo.values);
});

btnPlsCall.addEventListener("click", () => {
  modalBox.style.display = "block";
});
