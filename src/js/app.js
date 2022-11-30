import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const product = document.querySelector("#product");
  const price = document.querySelector(".price");
  product.dataset.price = price.textContent;
});
