const imagesList = [
  {
    id: 0,
    url: "./images/img-1.jpg",
  },
  {
    id: 1,
    url: "./images/img-2.jpg",
  },
  {
    id: 2,
    url: "./images/img-3.jpg",
  },
  {
    id: 3,
    url: "./images/img-4.jpg",
  },
  {
    id: 4,
    url: "./images/img-5.jpg",
  },
];
const slider = document.querySelector(".slider");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const images = document.getElementsByClassName("image");
(function DisplayImages() {
  slider.innerHTML = imagesList
    .map((image) => `<img src=${image.url} class="image" alt=${image.id} />`)
    .join(" ");
})();

btnNext.addEventListener("click", () => {
  const firstElem = images[0];
  slider.append(firstElem);
});
btnPrev.addEventListener("click", () => {
  const lastElem = images[images.length - 1];
  slider.prepend(lastElem);
});
