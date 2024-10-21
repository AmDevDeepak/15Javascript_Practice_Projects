const categories = [
  "Radha-Krishna",
  "Sita-Ram",
  "Laxmi-Narayan",
  "Shiv-Gori",
  "HanumanJi",
];
const Pictures = [
  {
    category: categories[0],
    url: "https://i.pinimg.com/736x/77/f5/56/77f55681edf5957c13bddfb0e4c68eae.jpg",
  },
  {
    category: categories[0],
    url: "https://i.pinimg.com/enabled_hi/236x/8c/52/df/8c52df7c57a4c2b50d031270106ee109.jpg",
  },

  {
    category: categories[1],
    url: "https://i.pinimg.com/736x/0b/a5/e2/0ba5e2352d61dda68213f8bfdd8fa562.jpg",
  },
  {
    category: categories[1],
    url: "https://i.pinimg.com/736x/b1/2d/0c/b12d0c3685f2b75e073942455d8eda43.jpg",
  },

  {
    category: categories[2],
    url: "https://i.pinimg.com/474x/5b/30/ca/5b30cacfb09f6af13c29b34192d08d35.jpg",
  },
  {
    category: categories[2],
    url: "https://i.pinimg.com/736x/7e/79/39/7e793954aa605cf72f5f048b590f0431.jpg",
  },
  {
    category: categories[3],
    url: "https://i.pinimg.com/736x/56/1e/aa/561eaaf800c5189b32813250b5b9364b.jpg",
  },
  {
    category: categories[3],
    url: "https://i.pinimg.com/736x/e7/46/4b/e7464bdcc9b64aa97b198ad649251944.jpg",
  },
  {
    category: categories[4],
    url: "https://i.pinimg.com/736x/41/a9/17/41a91747d25068d1d707fa3d88b0725c.jpg",
  },
];
const imgContainer = document.querySelector("section");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");

ul.addEventListener("click", (ev) => {
  clearActiveClass();
  let target = ev.target;
  target.classList.add("active");
  let category = target.dataset.category;
  loadImages(category);
});
function loadImages(category) {
  if (!category || category === "All") {
    imgContainer.innerHTML = "";
    Pictures.forEach((pic) => {
      let card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
            <img src=${pic.url} alt="Radha Krishna" />
        `;
      imgContainer.appendChild(card);
    });
  } else {
    const filterPictures = Pictures.filter((pic) => pic.category === category);
    imgContainer.innerHTML = "";
    filterPictures.forEach((pic) => {
      let card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
            <img src=${pic.url} alt="Radha Krishna" />
        `;
      imgContainer.appendChild(card);
    });
  }
}
loadImages("All");

function clearActiveClass() {
  li.forEach((item) => item.classList.remove("active"));
}
