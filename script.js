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

//-----------------------------------------------------------------------------------------
//----------------------------------------Promise------------------------------------------

// const req = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Подготовка данных...");

//     const product = {
//       name: "TV",
//       price: 2000,
//     };

//     resolve(product);
//   }, 2000);
// });

// req
//   .then((product) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         product.status = "order";
//         resolve(product);
//       }, 2000);
//     });
//   })
//   .then((data) => {
//     data.modife = true;
//     return data;
//   })
//   .then((data) => {
//     console.log(data);
//   }).catch(() => {
//     console.error('Error')
//   }).finally(() => {
//     console.log('Finally')
//   })

//--------
// const test = time => {
//   return new Promise(resolve => {
//     setTimeout(()=> resolve(), time);
//   });
// };

// // test(1000).then(() => {
// //   console.log('1000')
// // })

// Promise.all([test(1000), test(2000)]).then(() => {
//   console.log("Uspex")
// })

// Promise.race([test(1000), test(2000)]).then(() => {
//   console.log("Uspex")
// })

//---------------------------------fetch------------------------------------------

// fetch("http://localhost:8000/", {
//   method: "POST",
//   body: JSON.stringify({ name: "John" }),
//   headers: {
//     "Content-type": "application/json",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//----------------------------------------Регулярные выражение-----------------------------

// new RegExp('patter', 'flags') - старый формат
// /pattern/f

// const ans = prompt("Введите ваше имя");
// const reg = /\d/g;
// // console.log(reg.test(ans)) проверяет есть ли вхождение от reg
// console.log(ans.match(reg));

// const str = "My name is R2D2";
// console.log(str.match(/\w\d\w\d/));

// \d дигитс ищем цифры
// \w все буквы
// \s все пробелы
// \D \W обратные классы не буквы не числа

// // flagi:
// // i не зависит от регистра
// // g несколько вхождений
// // m многострочный режим

// // console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt("Password");
// console.log(pass.replace(/./g, "*"));

// console.log("12-34-56".replace(/-/g, ":"));

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

//------------------------------------------------------------------------------------------
//Получение списка тренировок
let idIzenaemogoTitle;
async function getUsers() {
  const respons = await fetch("http://localhost:8000/wokrout", {
    method: "GET",
    headers: { Accept: "application/json" },
  });
  if (respons.ok === true) {
    const workout = await respons.json();
    let row = document.querySelector(".mainCont");
    // row.replaceChildren();
    workout.forEach((item, i) => {
      const divEl = document.createElement("div");
      const idEl = document.createElement("div");
      const titleEl = document.createElement("div");
      const btnDel = document.createElement("button");
      const butPut = document.createElement("button");

      btnDel.classList.add("button");
      divEl.classList.add("divEl");
      idEl.classList.add("id");
      titleEl.classList.add("titleEl");
      butPut.classList.add("button");

      idEl.innerHTML = i + 1;
      titleEl.innerHTML = item.title;
      divEl.appendChild(idEl);
      divEl.appendChild(titleEl);
      divEl.appendChild(butPut);
      divEl.appendChild(btnDel);
      row.appendChild(divEl);

      butPut.innerHTML = "Изменить";
      btnDel.innerHTML = "Удалить";

      butPut.addEventListener("click", () => {
        document.getElementById("putWorkTitle").value = item.title;
        idIzenaemogoTitle = item.id;
      });

      btnDel.addEventListener("click", (e) => {
        e.preventDefault();
        deleteWorkout(item.id);
      });
    });
  }
}
getUsers();

// btnDel.addEventListener("click", (e) => {
//   const id = item.id;
//   const title = document.getElementById("putWorkTitle").value;
//   putWorkout(id, title);
// });

//Добавление тренировки
const forms = document.getElementById("form");

forms.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(forms);

  const json = Object.fromEntries(formData.entries());
  console.log(json);

  createWorkout(json);
});

async function createWorkout(item) {
  const respons = await fetch("http://localhost:8000/wokrout", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  if (respons.ok === true) {
    const workout = await respons.json();
  }
}

//Изменение тренировки
const formsEdit = document.getElementById("formElem");

formsEdit.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(formsEdit);
  const id = idIzenaemogoTitle;
  const title = formData.get("title");
  putWorkout(id, title);
});
async function putWorkout(id, title) {
  const respons = await fetch("http://localhost:8000/wokrout/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: id,
      title: title,
    }),
  });
}
//Удаление тренировки
async function deleteWorkout(id) {
  const respons = await fetch("http://localhost:8000/wokrout/" + id, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
}
