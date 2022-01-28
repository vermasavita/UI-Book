const toggleBtn = document.getElementsByClassName('toggle-btn')[0];
const rightNav = document.getElementsByClassName("right-nav");

toggleBtn.addEventListner('click', () => {
    rightNav.toggle('active')
})