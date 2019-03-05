// Open/close menu funtion.
const hamburderBtn = document.querySelector(".hamburger-menu-icon");
const navDiv = document.querySelector(".navigation");
const crossBtn = document.querySelector(".hamburger-menu-icon-visible");

function openNav() {
    navDiv.style.transform = "translateY(-100vh)";
}
crossBtn.addEventListener("click", openNav);

function closeNav() {
    navDiv.style.transform = "translateY(100vh)"
}
hamburderBtn.addEventListener("click", closeNav);
// Open/close navigation function
const plusBtn = document.querySelector(".navigation-list-plus");
const productList = document.querySelector(".navigation-list-products");
let rotateDeg = 90;
plusBtn.addEventListener("click", () => {
    productList.classList.toggle("hidden");
    plusBtn.style.transform = "rotate(" + rotateDeg + "deg)";
    rotateDeg += 45;
})
// Function that changes images on item page
const current = document.getElementById('current');
const imgs = document.querySelector('.thumbnails');

imgs.addEventListener('click', imgClick);

function imgClick(e) {
    current.src = e.target.src;

}
// // Show/hide item description, detail sizing function
// const description = document.getElementById("description");
// const details = document.getElementById("details");
// const sizing = document.getElementById("sizing");

// const itemDescriptionDiv = document.getElementById("description-div");
// const itemDetailsDiv = document.getElementById("details-div");
// const itemSizingDiv = document.getElementById("sizing-div");
// // Show description
// description.addEventListener("click", () => {
//     itemDescriptionDiv.style.display = "block";
//     itemDetailsDiv.style.display = "none";
//     itemSizingDiv.style.display = "none";
// })
// // Show details
// details.addEventListener("click", () => {
//     itemDescriptionDiv.style.display = "none";
//     itemDetailsDiv.style.display = "block";
//     itemSizingDiv.style.display = "none";
// })
// // Show sizing
// sizing.addEventListener("click", () => {
//     itemDescriptionDiv.style.display = "none";
//     itemDetailsDiv.style.display = "none";
//     itemSizingDiv.style.display = "block";
// })

// Show/hide faq paragraph
const faqBtn = document.querySelectorAll(".faq-btn");
const faqPar = document.querySelectorAll(".faq-par");
for (let i = 0; i < faqBtn.length; i++){
    faqBtn[i].addEventListener("click", ()=>{
        faqPar[i].classList.toggle("shown");
        }
    )
    }
// Show/hide item description, detail sizing function
const itemBtn = document.querySelectorAll(".description-list-element");
const descriptionParagraphs = document.querySelectorAll(".item-details");
for (let i = 0; i < itemBtn.length; i++) {
    itemBtn[i].addEventListener("click", () => {
        for (let i = 0; i < descriptionParagraphs.length; i++) {
            descriptionParagraphs[i].classList.add("hide");
        }
        descriptionParagraphs[i].classList.remove("hide");
    })
}