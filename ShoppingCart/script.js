const Products = [
  {
    id: 1,
    url: "images/img-1.jpg",
    title: "Chair 1",
    price: 1000,
  },
  {
    id: 2,
    url: "images/img-2.jpg",
    title: "Chair 2",
    price: 1500,
  },
  {
    id: 3,
    url: "images/img-3.jpg",
    title: "Chair 3",
    price: 1500,
  },
  {
    id: 4,
    url: "images/img-4.jpg",
    title: "Chair 4",
    price: 1500,
  },
  {
    id: 5,
    url: "images/img-5.jpg",
    title: "Chair 5",
    price: 1500,
  },
  {
    id: 6,
    url: "images/img-6.jpg",
    title: "Chair 6",
    price: 1500,
  },
  {
    id: 7,
    url: "images/img-7.jpg",
    title: "Chair 7",
    price: 1500,
  },
];

let cartIcon = document.querySelector(".cart-icon");
let body = document.querySelector("body");
let close = document.querySelector(".close");
let productsList = document.querySelector(".product-list");
let cartList = document.querySelector(".cart-list");
let cartItems = document.querySelector(".cart-icon span");

let cart = [];
cartIcon.addEventListener("click", () => {
  body.classList.toggle("show-cart");
});

close.addEventListener("click", () => {
  body.classList.remove("show-cart");
});

const displayProducts = () => {
  productsList.innerHTML = "";
  Products.forEach((product) => {
    let productItem = document.createElement("div");
    productItem.classList.add("product");
    productItem.dataset.id = product.id;
    productItem.innerHTML = `
    <img src=${product.url} alt="" />
          <h2>${product.title}</h2>
          <div class="price">&#x20b9; ${product.price}</div>
   <button class="add-to-cart">Add To Cart</button>
    `;
    productsList.appendChild(productItem);
  });
};
displayProducts();

productsList.addEventListener("click", (event) => {
  let position = event.target;
  if (position.classList.contains("add-to-cart")) {
    let product_id = position.parentElement.dataset.id;
    addToCart(product_id);
  }
});

const addToCart = (id) => {
  let productInCart = cart.findIndex((product) => product.id === id);
  if (cart.length === 0) {
    cart = [
      {
        id: id,
        quantity: 1,
      },
    ];
  } else if (productInCart === -1) {
    cart.push({
      id: id,
      quantity: 1,
    });
  } else {
    cart[productInCart].quantity++;
  }
  cartItems.textContent = cart.length;
  addCartToHTML();
};

const addCartToHTML = () => {
  cartList.innerHTML = "";
  if (cart.length > 0) {
    cart.forEach((item) => {
      let cartItem = document.createElement("div");
      cartItem.classList.add("product");
      let productInCart = Products.findIndex(
        (value) => value.id === Number(item.id)
      );
      cartItem.dataset.id = productInCart;
      let info = Products[productInCart];
      cartItem.innerHTML = `
      <div class="image">
            <img src=${info.url} alt="" />
          </div>
          <div class="name">${info.title}</div>
          <div class="totalPrice">&#x20b9;${info.price * item.quantity}</div>
          <div class="quantity">
            <span class="minus"><</span>
            <span>${item.quantity}</span>
            <span class="plus">></span>
          </div>
    `;
      cartList.appendChild(cartItem);
    });
  }
};

cartList.addEventListener("click", (event) => {
  let position = event.target;
  if (
    position.classList.contains("minus") ||
    position.classList.contains("plus")
  ) {
    console.log(position.parentElement.parentElement.dataset.id);
  }
});
