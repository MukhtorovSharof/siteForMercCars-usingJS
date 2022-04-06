"use strict";

window.addEventListener("DOMContentLoaded", () => {
  // LOADER----------------------------------------

  const loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.style.opacity = "0";
    setTimeout(function () {
      loader.style.display = "none";
    }, 500);
  }, 1000);

  // TABS------------------------------------------

  const headerParent = document.querySelector(".tabheader__items"),
    tabs = document.querySelectorAll(".tabheader__item"),
    tabContent = document.querySelectorAll(".tabcontent");

  function hideTabContent() {
    tabContent.forEach((item) => {
      item.style.display = "none";
    });
    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(i = 1) {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
  }

  hideTabContent();
  showTabContent();

  headerParent.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  // MODAL---------------------------------------

  const allModalBtn = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal"),
    modalClose = document.querySelector(".modal__close");

  allModalBtn.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  modalClose.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  const modalTimer = setTimeout(openModal, 5000);

  function openModal() {
    modal.classList.remove("hide");
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
    clearTimeout(modalTimer);
  }

  function closeModal() {
    modal.classList.remove("show");
    modal.classList.add("hide");
    document.body.style.overflow = "";
  }

  function showMyModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal();
      window.removeEventListener("scroll", showMyModalByScroll);
    }
  }

  window.addEventListener("scroll", showMyModalByScroll);

  // DATA------------------------------------------------

  const deadline = "2022-08-11";

  function getTime(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor(total / (1000 * 60 * 60 * 24)),
      hours = Math.floor((total / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((total / 1000 / 60) % 60),
      seconds = Math.floor((total / 1000) % 60);
    return {
      total: total,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const time = getTime(endtime);
      days.innerHTML = getZero(time.days);
      hours.innerHTML = getZero(time.hours);
      minutes.innerHTML = getZero(time.minutes);
      seconds.innerHTML = getZero(time.seconds);
      if (time.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(".timer", deadline);

  // CLASS CONSTRUCTOR---------------------------------------

  class CarCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      (this.src = src),
        (this.alt = alt),
        (this.title = title),
        (this.descr = descr),
        (this.price = price),
        (this.parent = document.querySelector(parentSelector)),
        (this.classes = classes),
        (this.transfer = 10.5),
        this.changeToUSD();
    }

    changeToUSD() {
      this.price *= this.transfer;
    }

    render() {
      const element = document.createElement("div");
      // if (this.classes.length === 0) {
      //   this.classes = "menu__item";
      //   element.classList.add(this.classes);
      // } else {
      //   this.classes.forEach((className) => element.classList.add(className));
      // }
      element.innerHTML = `
      <div class="menu__item">
        <img src=${this.src} alt=${this.alt} />
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
          <div class="menu__item-cost">Price:</div>
          <div class="menu__item-total"><span>${this.price}</span> $</div>
      </div>
    </div>
      `;

      this.parent.append(element);
    }
  }

  new CarCard(
    "img/tabs/1.jpg",
    "vegy",
    "2021 Mercedes-Benz C-Class",
    `The 2021 Mercedes-Benz C-Class finishes in the top half of our
    luxury small car rankings. It's powerful and upscale, but it has
    so-so handli...`,
    100,
    ".menu .container",
    //"pRed",
    //"bBlack"
  ).render();

  new CarCard(
    "img/tabs/2.jpg",
    "elite",
    "2021 Mercedes-Benz CLA-Class",
    `The 2021 Mercedes-Benz CLA offers punchy powertrains, an elegant
    interior, and easy-to-use tech features, but it also has a firm
    ride and a ..`,
    500,
    ".menu .container",
    //"pRed",
    //"bBlack"
  ).render();

  new CarCard(
    "img/tabs/3.jpg",
    "post",
    "2021 Mercedes-Benz SCLA-Class",
    `The German luxury car-manufacturer has been around for more than a
    century, having elegantly drifted rough curves of automobile.`,
    200,
    ".menu .container",
    //"pRed",
    //"bBlack"
  ).render();
});
