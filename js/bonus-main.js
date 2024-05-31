const imagesList = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp",
];
const imgSliderEl = document.getElementById("img-slider");
const thumbSliderEl = document.getElementById("thumb-slider");
const btnNextEl = document.getElementById("bnt-next");
const btnPrevEl = document.getElementById("btn-prev");


/**********************CICLI****************************/

for (let i = 0 ; i < imagesList.length ; i++){
    const currentImg = imagesList[i];

    const imgEl = document.createElement("img");
    imgEl.src = currentImg;

    if ( i = 0 ) {
        imgEl.classList.add("my-active");
        thumbSliderEl.append(imgEl);
    } else {
        thumbSliderEl.append(imgEl);
    }

}



/********************EVENTS****************************/


btnNextEl.addEventListener("click" , function() {

})