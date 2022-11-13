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

//--------------------------Функции конструкторы------------------------------------
// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function () {
//     console.log(`Hello ${this.name}`);
//   };
// }
// // Добавление нового метода в прототип
// User.prototype.exit = function () {
//   console.log(`User ${this.name} exit`);
// };
// const ivan = new User("Ivan", 28);
// ivan.hello();
// console.log(ivan);
// ivan.exit();

// --------------------------------------Контекст вызова функции. this---------------
// function showThis(a,b) {
//   console.log(this);
//   function sum(){
//     console.log(this);
//     return a + b;
//   }
//   console.log(sum())
// }
// showThis(4,5);

// 1) с use strict веренет window, без - undefined. В обычной функции.

// const obj = {
//   a:20,
//   b: 15,
//   sum: function() {
//     console.log(this);
//   }
// }

// console.log(obj.sum)
// 2) если используем метод внутри объекта, то контекст вызова всегда будет ссылаться
// на этот объект

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true; }

//     let ivan = new User('Ivan', 23);

//3) this в констуркторах и классах - это новый экземпляр объекта

// finction sayName(surname){
//   console.log(this);
//   console.log(this.name + surname);
// }

// const user = {
//   name: 'John'
// }

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num){
//   return this*num;
// }

// const double = count.bind(2);
// console.log(double(3))

// 4) Ручная привязка this: call, apply, bind

//------------------------------------Class--------------------------------------
// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;

//   }
//   calcArea(){
//     return  this.height * this.width;
//   }
// }

// class ColoredRectangleWithText extends Rectangle {
//   constructor(height, width, text, bgColor){
//     super(height, width);
//     this.text = text;
//     this.bgColor = bgColor;

//   }

//   showMyProps(){
//     console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`)
//   }
// }

// const div = new ColoredRectangleWithText(25, 10, 'Hellow Wrold', 'red');

// div.showMyProps()

// // const square = new Rectangle(10, 10);
// // const long = new Rectangle(20, 100);

// // console.log(square.calcArea());
// // console.log(long.calcArea());

// //---------------------.rest-`...`-----Оставшиеся элементы------------------------------
// const log = function (a, b, ...rest) {
//   console.log(a, b, rest);
// };

// log("basci", "rest", "opera", "click");

// function calcOrDouble(numb, basis = 2) {
//   console.log(numb * basis);
// }

// calcOrDouble(15);

//----------------------------------------------------------------------------------
//-----------------------------------------Добавляем карточки с тренировками---------------

class TrainCard {
  constructor(groupMuscle, opisanieUpr, podxodi, povtor, parent) {
    this.groupMuscle = groupMuscle;
    this.opisanieUpr = opisanieUpr;
    this.podxodi = podxodi;
    this.povtor = povtor;
    this.parent = document.querySelector(parent);
    this.vsegoPovtor();
  }
  vsegoPovtor() {
    let a = this.povtor * this.podxodi;
    return a;
  }
  render() {
    const element1 = document.createElement("div");
    element1.innerHTML = `<div class='cont'>${this.vsegoPovtor()}${
      this.groupMuscle
    } ${this.opisanieUpr} ${this.podxodi} ${this.povtor}</div>`;
    this.parent.append(element1);
  }
}

const jim = new TrainCard(
  "grudnie",
  "Жим лежа на плоской скамье",
  "5",
  "8",
  ".container"
);

const biseps = new TrainCard(
  "grudnie",
  "Подъем на бицепс",
  "5",
  "8",
  ".container"
);

const jimnad = new TrainCard(
  "grudnie",
  "Жим из-за головы",
  "5",
  "8",
  ".container"
);

const triceps = new TrainCard("grudnie", "Брусья", "5", "8", ".container");

const nogi = new TrainCard(
  "grudnie",
  "Присед со штангой",
  "5",
  "8",
  ".container"
);

jim.render();
nogi.render();
biseps.render();
triceps.render();
jimnad.render();

//--------------------------------------------------------------------------------------
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

//--------------------------Тест this--------------------------------------------

// const btnTest = document.querySelector(".btnTestThis");

// btnTest.addEventListener("click", function () {
//   this.style.backgroundColor = "red";
//   console.log(this);
// });

// const obj = {
//   num: 5,
//   sayNumber: function () {
//     const say = () => {
//       console.log(this.num);
//     };
//     say();
//   },
// };
// obj.sayNumber();

//-------------------------------Обменник---------------------------------------------------

const inputRub = document.querySelector("#rub");
const inputUsd = document.querySelector("#usd");

inputRub.addEventListener("input", () => {
  const request = new XMLHttpRequest();

  request.open("GET", "http://localhost:3000/");
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
    }
  });

  // status
  // statusText
  // response
  // readyState
});
