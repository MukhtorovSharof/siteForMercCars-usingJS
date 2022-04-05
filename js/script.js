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

  function showTabContent(i = 0) {
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
});
