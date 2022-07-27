const products = document.querySelectorAll(".product");
const cart = document.querySelector(".cart");

products.forEach((product) => {
  const btnIncrease = product.querySelector(".product__quantity-control_inc");
  const btnDecrease = product.querySelector(".product__quantity-control_dec");
  const btnAddProduct = product.querySelector(".product__add");

  btnIncrease.onclick = () => {
    product.querySelector(".product__quantity-value").innerText++;
  };

  btnDecrease.onclick = () => {
    if (product.querySelector(".product__quantity-value").innerText <= 1) {
      product.querySelector(".product__quantity-value").innerText = 1;
    } else {
      product.querySelector(".product__quantity-value").innerText--;
    }
  };

  btnAddProduct.onclick = () => {
    const htmlProduct = `
    <div class="cart__product" data-id=${product.dataset.id}>
        <img class="cart__product-image" src=${
          product.querySelector("img").src
        }>
        <div class="cart__product-count">${
          product.querySelector(".product__quantity-value").innerText
        }</div>
    </div>`;

    const cartProducts = cart.querySelectorAll(".cart__product");

    let addedProduct = Array.from(cartProducts).find(
      (element) => element.dataset.id === product.dataset.id
    );

    if (addedProduct) {
      addedProduct.querySelector(".cart__product-count").innerText =
        Number(addedProduct.querySelector(".cart__product-count").innerText) +
        Number(product.querySelector(".product__quantity-value").innerText);
    } else {
      cart.appendChild(
        new DOMParser()
          .parseFromString(htmlProduct, "text/html")
          .querySelector(".cart__product")
      );
    }
  };
});
