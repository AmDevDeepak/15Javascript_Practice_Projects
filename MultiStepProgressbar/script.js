const progress = document.querySelector(".progress");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const iconsWrapper = document.querySelectorAll(".icon-wrapper");
const dots = document.querySelectorAll(".dot");
const icons = document.querySelectorAll(".icon");

let currentSelected = 1;

nextBtn.addEventListener("click", () => {
  if (currentSelected < iconsWrapper.length) {
    currentSelected++;
  }
  handleUpdateStep();
});

prevBtn.addEventListener("click", () => {
  if (currentSelected > 1) {
    currentSelected--;
  }
  handleUpdateStep();
});

function handleUpdateStep() {
  dots.forEach((item, index) => {
    if (index < currentSelected) {
      item.classList.add("active");
      icons[index].classList.add("active");
    } else {
      item.classList.remove("active");
      icons[index].classList.remove("active");
    }
  });

  const totalSteps = iconsWrapper.length - 1;
  const progressPercentage = (((currentSelected - 1) / totalSteps) * 100) / 2.8;
  progress.style.width = progressPercentage + "%";

  prevBtn.disabled = currentSelected === 1;
  nextBtn.disabled = currentSelected === iconsWrapper.length;
}
