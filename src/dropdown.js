const dropdowns = document.querySelectorAll(".form__select");

dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".selector");
  const menu = dropdown.querySelector(".selector__menu");
  const options = dropdown.querySelectorAll(".selector__menu li");
  const selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () => {
    select.classList.toggle("selector-clicked");
    menu.classList.toggle("menu-open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerHTML = options.innerText;
      selected.classList.remove(".selecror-clicked");
      menu.classList.remove(".menu-open");

      options.forEach((option) => {
        option.classList.remove(".active");
      });

      option.classList.add(".active");
    });
  });
});
