// ========DROPDOWN========
let navButton = document.getElementsByClassName("nav-button");
let toggle = false;
let navList = document.getElementsByClassName("nav-list");
const displayDropdown = () => {
    toggle = !toggle;
    if (!toggle) {
        navList[0].style.display = "none";
    }
    else {
        navList[0].style.display = "block";
    }
}
navButton.addEventListener(onclick, displayDropdown);