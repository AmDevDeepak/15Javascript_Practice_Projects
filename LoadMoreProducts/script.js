let count = 0;
const productsContainer = document.querySelector(".products");
const button = document.querySelector("button");

const fetchProducts = async (skip) => {
  try {
    const response = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${
        skip === 0 ? 0 : skip * 10
      }`
    );

    const data = await response.json();
    if (data.products && data.products.length) displayProducts(data.products);
  } catch (error) {
    console.error(error);
  }
};

const displayProducts = (products) => {
  products.forEach((product) => {
    const productWrapper = document.createElement("div");
    const title = document.createElement("h3");
    const price = document.createElement("p");
    const thumbnail = document.createElement("img");

    title.textContent = product.title;
    price.textContent = `$${product.price}`;
    thumbnail.src = product.thumbnail;

    productWrapper.appendChild(thumbnail);
    productWrapper.appendChild(title);
    productWrapper.appendChild(price);

    productWrapper.classList.add("product");
    productsContainer.appendChild(productWrapper);
  });
};
fetchProducts(count);

button.addEventListener("click", () => {
  button.disabled = document.querySelectorAll(".product").length === 100;
  fetchProducts((count += 1));
});
