const quantityControl = document.querySelectorAll(".product__quantity-control");
const addCartButtons = document.querySelectorAll(".product__add");
const cart = document.querySelector(".cart__products");

// обработка клика по + или -
quantityControl.forEach((buttonPlusOrMinus) => {
  buttonPlusOrMinus.addEventListener("click", (button) => {
    let currentButton = button.target;
    if (currentButton.classList.contains("product__quantity-control_inc")) {
      // увеличение счетчика товара
      currentButton.previousElementSibling.innerText++;
    } else if (currentButton.nextElementSibling.innerText >= 2) {
      // уменьшение счетчика товара
      currentButton.nextElementSibling.innerText--;
    }
  });
});

//обработка клика по кнопке добавления товара
addCartButtons.forEach((addButton) => {
  addButton.addEventListener("click", () => {
    //id товара нажатой кнопки добавления
    //console.log(addButton.closest('.product').dataset.id);

    //url картинки товара нажатой кнопки добавления
    //console.log(addButton.parentElement.parentElement.previousElementSibling.src);

    //количество товара нажатой кнопки добавления
    //console.log(addButton.previousElementSibling.firstElementChild.nextElementSibling.textContent);

    // создание и добавление div class="cart__product" - продукт
    const cartProduct = document.createElement("div");
    cart.appendChild(cartProduct);
    cartProduct.classList.add("cart__product");
    let currentId = addButton.closest(".product").dataset.id;
    cartProduct.setAttribute("data-id", currentId);

    // создание и добавление img class="cart__product-image"
    const cartImgProduct = document.createElement("img");
    cartProduct.appendChild(cartImgProduct);
    cartImgProduct.classList.add("cart__product-image");
    const cartImgProductUrl =
      addButton.parentElement.parentElement.previousElementSibling.src;
    cartImgProduct.setAttribute("src", cartImgProductUrl);

    // создание и добавление div class="cart__product-count"
    const productCount = document.createElement("div");
    cartProduct.appendChild(productCount);
    productCount.classList.add("cart__product-count");
    let currentCount =
      addButton.previousElementSibling.firstElementChild.nextElementSibling
        .textContent;
    productCount.innerText = currentCount;

    //console.log(cart);


  });
});
