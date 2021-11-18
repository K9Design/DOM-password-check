const passwordInput = document.querySelector(".passwordInput");
const feedbackBar = document.querySelector(".feedbackBar");
const feedbackText = document.querySelector(".feedbackText");

const inputHandler = (e) => checkPassword(e.target.value);

passwordInput.addEventListener("input", inputHandler);
passwordInput.addEventListener("propertychange", inputHandler);

const checkPassword = (string) => {
  feedbackBar.style.width = Math.min(100, (100 / 12) * string.length) + "%";

  if (string.length < 8) {
    feedbackBar.style.backgroundColor = "#ff0000";
    feedbackText.innerHTML = "Should be longer";
  } else if (string.length < 12) {
    feedbackBar.style.backgroundColor = "#ffff00";
    feedbackText.innerHTML = "Pretty good";
  } else if (string.length >= 12) {
    feedbackBar.style.backgroundColor = "#00ff00";
    feedbackText.innerHTML = "Grrrreat!";
  }
};
