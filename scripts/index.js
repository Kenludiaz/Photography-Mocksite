// ========DROPDOWN========
let navButton = document.getElementsByClassName("nav-button");
let toggle = false;
let navList = document.getElementsByClassName("nav-list");
const displayDropdown = () => {
    navList[0].classList.toggle("nav-list-toggled");
}
