const toggleBtnTwo = document.querySelector(".toggle-btn");
const rightNavTwo = document.querySelector(".right-nav");
const docContainer = document.querySelector(".doc-container");

toggleBtnTwo.addEventListener("click", () => {
  rightNavTwo.classList.toggle("active");
  docContainer.classList.toggle("body-margin-top");
  console.log(rightNavTwo);
});
