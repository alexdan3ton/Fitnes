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

const btnAn = document.querySelector(".btnAn");
let timeId;
let i = 0;

function myAnimation() {
  const element = document.querySelector(".box");
  let pos = 0;

  const id = setInterval(frame, 10);
  function frame() {
    if (pos === 800) {
      clearInterval();
    } else {
      pos += 1;
      element.style.top = pos + "px";
      element.style.left = pos + "px";
    }
  }
}

btnAn.addEventListener("click", (event) => {
  myAnimation();
});

// ------------------------------------------------------------------

// let timeNow = function () {
//   return let a = "dsafas";
// };
// timeMSK = setInterval(timeNow, 1000);

// let dateDiv = document.createElement("div");
// dateDiv.innerHTML = `${timeMSK}`;
// tabsParent.appendChild(dateDiv);

setInterval(function () {
  document.getElementById("current_date_time_block2").innerHTML = new Date();
}, 1000);
