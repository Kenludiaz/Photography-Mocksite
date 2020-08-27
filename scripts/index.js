// ========DROPDOWN========
let navButton = document.getElementsByClassName("nav-button");
let toggle = false;
let navList = document.getElementsByClassName("nav-list");
const displayDropdown = () => {
    toggle = !toggle;
    if (toggle) {
        navList[0].classList.add("nav-button-toggled");
    }
    else {
        navList[0].classList.remove("nav-button-toggled");
    }
}
