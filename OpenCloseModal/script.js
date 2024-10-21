const modal = document.querySelector(".modal");
const open = document.querySelector(".open-button");
const close = document.querySelector(".close-button");

open.addEventListener("click", function () {
  this.style.display = "none";
  modal.style.display = "flex";
});

close.addEventListener("click", function () {
  open.style.display = "block";
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target.classList[0] === "main") {
    modal.style.display = "none";
    open.style.display = "block";
  } else {
    return;
  }
});
