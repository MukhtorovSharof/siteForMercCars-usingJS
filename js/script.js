"use strict";
import tabs from "./modules/tabs";
import clas from "./modules/class";
import accordion from "./modules/accordion";
import data from "./modules/data";
import forms from "./modules/form";
import loader from "./modules/loader";
import modal from "./modules/modal";
import slider from "./modules/slider";

window.addEventListener("DOMContentLoaded", () => {
  tabs();
  clas();
  accordion();
  data();
  forms();
  loader();
  modal();
  slider();
  // showThanksModal ------------------------------------------
  function showThanksModal(message) {
    const prevModalDialog = document.querySelector(".modal__dialog");

    prevModalDialog.classList.add("hide");
    openModal();
    const thanksModal = document.createElement("div");
    thanksModal.classList.add("modal__dialog");
    thanksModal.innerHTML = `
      <div class="modal__content">
        <div class="modal__close" data-close>×</div>
        <div class="modal__title">${message}</div>
      </div>
    `;

    document.querySelector(".modal").append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add("show");
      prevModalDialog.classList.remove("hide");
      closeModal();
    }, 4000);
  }
});
