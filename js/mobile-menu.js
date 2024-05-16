(() => {
  const refs = {
    // Додати атрибут data-menu-open на кнопку відкриття
    openMenuBtn: document.querySelector("[data-menu-open]"),
    // Додати атрибут data-menu-close на кнопку закриття
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    // Додати атрибут data-menu на мобільне меню
    menu: document.querySelector("[data-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    // is-open це клас який буде додаватися/забиратися на мобільне меню при натисканні на кнопки
    refs.menu.classList.toggle("is-open");
  }
})();