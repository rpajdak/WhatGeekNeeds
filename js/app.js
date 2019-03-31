// Open/close menu funtion.
const hamburderBtn = document.querySelector(".hamburger-menu-icon");
const navDiv = document.querySelector(".navigation");
const crossBtn = document.querySelector(".hamburger-menu-icon-visible");

function closeNav() {
    navDiv.style.transform = "translateY(-100vh)";
    document.body.style.overflow = "auto";

}
crossBtn.addEventListener("click", closeNav);

function openNav() {
    navDiv.style.transform = "translateY(100vh)"
    document.body.style.overflow = "hidden";
}
hamburderBtn.addEventListener("click", openNav);



// Open/close navigation function
const plusBtn = document.querySelector(".navigation-list-plus");
const productList = document.querySelector(".navigation-list-products");
let rotateDeg = 90;
plusBtn.addEventListener("click", () => {
    productList.classList.toggle("hidden");
    // plusBtn.style.transform = "rotate(" + rotateDeg + "deg)";
    plusBtn.classList.toggle("rotated");
    rotateDeg += 45;
})
// Function that changes images on item page
function changeThumbnails() {
    const current = document.getElementById('current');
    const imgs = document.querySelector('.thumbnails');

    imgs.addEventListener('click', (e) => {
        current.src = e.target.src;
    });
}

// Function that changes bordes on thumbnail
function highlightThumbnail() {
    const thmbImg = document.querySelectorAll(".thumbnails_img")
    for (let i = 0; i < thmbImg.length; i++) {
        thmbImg[i].addEventListener("click", () => {
            for (let i = 0; i < thmbImg.length; i++) {
                thmbImg[i].classList.remove("highlighted")
            }
            thmbImg[i].classList.add("highlighted");
        })

    }
}

// Show/hide faq paragraph
function showHideParagraph() {
    const faqBtn = document.querySelectorAll(".faq-btn");
    const faqPar = document.querySelectorAll(".faq-par");
    for (let i = 0; i < faqBtn.length; i++) {
        faqBtn[i].addEventListener("click", () => {
            faqPar[i].classList.toggle("shown");
            faqBtn[i].classList.toggle("active");
        })
    }
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
// Open/close sort and filter menu
const sortMenuOpenBtn = document.querySelector(".sort-filter");
const sortMenuCloseBtn = document.querySelector(".close-menu");
const sortMenuDiv = document.querySelector(".sort-filter-option");
const fadeDiv = document.querySelector(".fade")
const body = document.body;


/* Open menu */
function openCloseSortMenu() {
    sortMenuOpenBtn.addEventListener("click", () => {
        sortMenuDiv.classList.remove("hide");
        fadeDiv.classList.toggle("active-fade");
        document.body.style.overflow = "hidden";
    });
    /* Close menu */

    sortMenuCloseBtn.addEventListener("click", () => {
        sortMenuDiv.classList.add("hide");
        fadeDiv.classList.toggle("active-fade");
        document.body.style.overflow = "auto";
    })
}
/* Change thumbnails on item page */


function highlightSize() {
    const sizes = document.querySelectorAll(".size-variant")
    for (let i = 0; i < sizes.length; i++) {
        sizes[i].addEventListener("click", () => {
            for (let i = 0; i < sizes.length; i++) {
                sizes[i].classList.remove("highlighted")
            }
            sizes[i].classList.add("highlighted");
        })

    }
}

// function borderChange() {
//     const sqr = document.querySelectorAll(".kwadrat");
//     for (let i = 0; i < sqr.length; i++) {
//         sqr[i].addEventListener("click", () => {
//             for (let i = 0; i < sqr.length; i++) {
//                 sqr[i].classList.remove("red")
//             }
//             sqr[i].classList.add("red");
//         })
//     }
// }