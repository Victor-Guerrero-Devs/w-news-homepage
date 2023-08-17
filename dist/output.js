const modalEle = document.getElementById("modal");
const sideDrawerEle = document.getElementById("sideDrawer");
const openSideDrawerBtnEle = document.getElementById("openBtn");
const closeSideDrawerBtnEle = document.getElementById("closeBtn");

openSideDrawerBtnEle.addEventListener("click", () => {
    modalEle.classList.toggle("hidden");
    sideDrawerEle.classList.toggle("translate-x-full");
    sideDrawerEle.classList.toggle("translate-x-0");
});

modalEle.addEventListener("click", () => {
    modalEle.classList.add("hidden");
    sideDrawerEle.classList.toggle("translate-x-full");
    sideDrawerEle.classList.toggle("translate-x-0");
});

closeSideDrawerBtnEle.addEventListener("click", () => {
    modalEle.classList.toggle("hidden");
    sideDrawerEle.classList.toggle("translate-x-full");
});
