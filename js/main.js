const images = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp",
];
let currentImgIndex = [0];
const imgColumnEl = document.getElementById ("img-column");
const sliderImgEl = document.querySelector (".slider-container .img-slider")
const dotsContainerEl = document.querySelector(".dots-container");
const btnNext = document.getElementById ("btn-next");
const btnPrev = document.getElementById ("btn-prev");

//**************************************************
/*              CICLI                            */


/*puntini*/
for ( let i = 0 ; i < images.length ; i++) {
    if ( i == 0 ) {
        dotsContainerEl.innerHTML += (`<div class="dot active"></div>`);
    } else {
        dotsContainerEl.innerHTML += (`<div class="dot"></div>`);
    }
}





//**************************************************


sliderImgEl.src = images [currentImgIndex];

btnNext.addEventListener("click" , function () {
    const oldDot = document.querySelector(`.dots-container :nth-child(${ currentImgIndex + 1})`);
    oldDot.classList.remove("active");


    currentImgIndex++;


    if (currentImgIndex == 5){
        currentImgIndex = 0;
    }


    sliderImgEl.src = images [currentImgIndex];


    const dot = document.querySelector(`.dots-container :nth-child(${ currentImgIndex + 1})`);
    dot.classList.add("active");
});

btnPrev.addEventListener("click" , function () {
    const oldDot = document.querySelector(`.dots-container :nth-child(${ currentImgIndex + 1})`);
    oldDot.classList.remove("active");


    currentImgIndex--;


    if (currentImgIndex == -1){
        currentImgIndex = 4;
    }


    sliderImgEl.src = images [currentImgIndex];


    const dot = document.querySelector(`.dots-container :nth-child(${ currentImgIndex + 1})`);
    dot.classList.add("active");
});



