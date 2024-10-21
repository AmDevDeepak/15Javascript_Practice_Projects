const stars = document.querySelectorAll(".star");
let currentSelectedStars = -1;

stars.forEach((star, index) => {
  star.dataset.rating = index + 1;
  star.addEventListener("mouseover", handleMouseOver);
  star.addEventListener("click", handleClick);
  star.addEventListener("mouseleave", handleMouseLeave);
});

function handleUpdateRating(rating) {
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars[i].classList.replace("fa-regular", "fa-solid");
    } else {
      stars[i].classList.replace("fa-solid", "fa-regular");
    }
  }
}

function handleMouseOver(ev) {
  const currentRating = ev.target.dataset.rating;
  if (!currentRating) return;
  else handleUpdateRating(currentRating);
}
function handleClick(ev) {
  const currentRating = ev.target.dataset.rating;
  currentSelectedStars = currentRating;
  handleUpdateRating(currentSelectedStars);
}
function handleMouseLeave() {
  handleUpdateRating(currentSelectedStars);
}
