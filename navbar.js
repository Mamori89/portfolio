const toggleBtn = document.querySelector(".toggle_btn");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.addEventListener("click", function () {
    dropDownMenu.classList.toggle("open");
    toggleBtn.querySelector("i").classList.toggle("fa-bars");
    toggleBtn.querySelector("i").classList.toggle("fa-xmark");
});