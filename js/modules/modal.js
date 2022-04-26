function modal() {
  //MODAL---------------------------------------

  const allModalBtn = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal");

  allModalBtn.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.getAttribute("data-close") === "") {
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
}

export default modal;
