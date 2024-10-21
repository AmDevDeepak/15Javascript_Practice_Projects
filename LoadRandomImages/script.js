const API_ENDPOINT = "https://picsum.photos/300?random=";
const imagesWrapper = document.querySelector(".image-wrapper");
const button = document.querySelector("button");
let count = 1;

const fetchRandomImages = (count) => {
  for (let i = count; i <= count + 4; i++) {
    let img = document.createElement("img");
    img.src = `${API_ENDPOINT}${i}`;
    imagesWrapper.appendChild(img);
  }
};
fetchRandomImages(count);

button.addEventListener("click", () => {
  fetchRandomImages((count += 5));
});
