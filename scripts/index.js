// ========DROPDOWN========
let navButton = document.getElementsByClassName("nav-button");
let toggle = false;
let navList = document.getElementsByClassName("nav-list");
const displayDropdown = () => {
    navList[0].classList.toggle("nav-list-toggled");
}


//========Xtra========
function changePic() {
    let picture = document.getElementsByClassName('extra-info-picture');
    if (window.screen.width <= 800) {
        picture[0].src = "http://localhost:5500/images/waterfall700w.jpg";
    }
    else {
        picture[0].src = "http://localhost:5500/images/waterfall.jpg";
    }

}