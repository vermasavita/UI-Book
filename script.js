const toggleBtnTwo = document.querySelector(".toggle-btn");
const rightNavTwo = document.querySelector(".right-nav");

toggleBtnTwo.addEventListener("click", () => {
  rightNavTwo.classList.toggle("active");
  console.log(rightNavTwo);
});
