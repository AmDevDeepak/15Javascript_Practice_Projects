const buttons = document.querySelectorAll("button");
const content = document.querySelectorAll(".content");

buttons.forEach((button, index) => {
  button.addEventListener("click", function () {
    removeActiveClassFromButton();
    button.classList.add("btn-active");
    content.forEach((content) => {
      content.classList.remove("active");
    });
    content[index].classList.add("active");
  });
});

function removeActiveClassFromButton() {
  buttons.forEach((btn) => btn.classList.remove("btn-active"));
}
