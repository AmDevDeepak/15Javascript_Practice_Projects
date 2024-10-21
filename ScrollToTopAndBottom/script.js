const scrollToTop = document.querySelector("#toTop");
const scrollToBottom = document.querySelector("#toBottom");
const ul = document.querySelector("ul");

for (let i = 0; i < 500; i++) {
  let li = document.createElement("li");
  li.textContent = `List ${i}`;
  ul.appendChild(li);
}

scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
scrollToBottom.addEventListener("click", () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
});
