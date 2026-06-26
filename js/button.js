document.querySelectorAll(".product-detail__size-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".product-detail__size-button").forEach((sizeButton) => {
      sizeButton.classList.remove("product-detail__size-button--selected");
      sizeButton.setAttribute("aria-pressed", "false");
    });

    button.classList.add("product-detail__size-button--selected");
    button.setAttribute("aria-pressed", "true");
  });
});
