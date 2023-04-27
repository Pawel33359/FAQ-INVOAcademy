const allFaqCards = document.querySelectorAll(".faq-card");

// Set faq answer height depending on wheter it's active or not
const setAnswerHeight = function (card, active) {
  const faqCardAnswer = card.querySelector(".faq-card__answer");
  if (active) {
    faqCardAnswer.style.height =
      faqCardAnswer.querySelector("p").offsetHeight + "px";
    faqCardAnswer.style.marginTop = "1.5rem";
  } else {
    faqCardAnswer.style.height = "0px";
    faqCardAnswer.style.marginTop = "0px";
  }
};

const clearAllActive = function () {
  // Clear faq-card--active class for each faq card
  allFaqCards.forEach((card) => {
    clearSingleActive(card);
  });
};

const clearSingleActive = function (card) {
  card.classList.remove("faq-card--active");

  setAnswerHeight(card, false);

  card.querySelector(".faq-card__drop-sign").src = "/images/plus.png";
};

document.querySelector(".faq-section").addEventListener("click", (e) => {
  const faqCard = e.target.closest(".faq-card");
  if (!faqCard) return;

  // If active question then hide
  if (faqCard.classList.contains("faq-card--active")) {
    clearSingleActive(faqCard);
    return;
  }

  // Else clear active class from all questions and set a new question as active
  clearAllActive();
  faqCard.classList.add("faq-card--active");

  // Set correct height for clicked on card
  setAnswerHeight(faqCard, true);

  // Change plus img to minus
  faqCard.querySelector(".faq-card__drop-sign").src = "/images/minus.png";
});

// Set plus images at the end of each question
allFaqCards.forEach((card) => {
  card
    .querySelector(".faq-card__question")
    .insertAdjacentHTML(
      "beforeend",
      `<img src="/images/plus.png" class="faq-card__drop-sign" />`
    );
});

// Resize active question
window.addEventListener("resize", () => {
  const faqCardActive = document.querySelector(".faq-card--active");
  if (!faqCardActive) return;

  setAnswerHeight(faqCardActive, true);
});
