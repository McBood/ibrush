const slider = document.querySelector(".slider-block");
const sliderContainer = document.querySelector(".slider-container");
const pagination = document.querySelectorAll(".slider-pagination span");

function slide(id) {
  sliderContainer.style.left = -100 * id + "%";

  pagination.forEach((pag) => {
    pag.classList.remove("active");
  });
  pagination[id].classList.add("active");
}

let imgId = 0;

function autoSlide() {
  if (imgId > pagination.length - 1) {
    imgId = 0;
  }
}

slide(imgId);

imgId++;

for (let i = 0; i < pagination.length; i++) {
  pagination[i].addEventListener("click", () => {
    slide(i);
    imgId = i + 1;
  });
}
