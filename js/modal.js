const reviewModal = document.querySelector(".review-modal");
const reviewModalUserName = document.querySelector(".review-modal .review-card__user-name");
const reviewModalTime = document.querySelector(".review-modal .review-card__time");
const reviewModalText = document.querySelector(".review-modal__text");
const reviewModalClose = document.querySelector(".review-modal__close");

if (reviewModal && reviewModalUserName && reviewModalTime && reviewModalText && reviewModalClose) {
  document.querySelectorAll(".review-card__expand").forEach((button) => {
    button.addEventListener("click", () => {
      const reviewCard = button.closest(".review-card");
      const userName = reviewCard.querySelector(".review-card__user-name").textContent;
      const reviewTime = reviewCard.querySelector(".review-card__time").textContent;

      reviewModalUserName.textContent = userName;
      reviewModalTime.textContent = reviewTime;
      reviewModalText.textContent = button.dataset.reviewText;
      reviewModal.showModal();
    });
  });

  reviewModalClose.addEventListener("click", () => {
    reviewModal.close();
  });

  reviewModal.addEventListener("click", (event) => {
    if (event.target === reviewModal) {
      reviewModal.close();
    }
  });
}
