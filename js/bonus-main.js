const imagesList = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp",
];
let currentImgIndex = [0];
const imgSliderEl = document.getElementById("img-slider");
const thumbSliderEl = document.getElementById("thumb-slider");
const btnNextEl = document.getElementById("btn-next");
const btnPrevEl = document.getElementById("btn-prev");


/**********************CICLI****************************/

for (let i = 0 ; i < imagesList.length ; i++){
    const currentImg = imagesList[i];

    const imgEl = document.createElement("img");
    imgEl.src = currentImg;
    if ( i === 0 ) { 
        imgEl.classList.add("my-active");
        thumbSliderEl.append(imgEl);
    } else {
        thumbSliderEl.append(imgEl);
    }
}

for (let i = 0 ; i < imagesList.length ; i++){
    const currentImg = imagesList[i];

    const imgEl = document.createElement("img");
    imgEl.src = currentImg;
    if ( i === 0 ) { 
        imgEl.classList.add("my-active");
        imgSliderEl.append(imgEl);
    } else {
        imgSliderEl.append(imgEl);
    }
}



/********************EVENTS****************************/


btnNextEl.addEventListener("click" , function() {

    /*************************THUMB SLIDER REMOVE ACTIVE B.UP************************/
    const oldThumb = document.querySelector(`#thumb-slider :nth-child(${ currentImgIndex + 1})`);
    oldThumb.classList.remove("my-active");



    /********************************BIG IMAGE REMOVE ACTIVE B.UP********************************/
    const oldImg = document.querySelector(`#img-slider :nth-child(${ currentImgIndex + 1})`);
    oldImg.classList.remove("my-active");



    currentImgIndex--;
    
    if (currentImgIndex == -1){
        currentImgIndex = 4;
    }

    /*************THUMB ADD ACTIVE*************/
    const thumb = document.querySelector(`#thumb-slider :nth-child(${ currentImgIndex + 1})`);
    thumb.classList.add("my-active");

    /**************BIG IMAGE ADD ACTIVE*******************/
    const nowImg = document.querySelector(`#img-slider :nth-child(${ currentImgIndex + 1})`);
    nowImg.classList.add("my-active");


});

btnPrevEl.addEventListener("click" , function() {

    /*************************THUMB SLIDER REMOVE ACTIVE B.DOWN************************/
    const oldThumb = document.querySelector(`#thumb-slider :nth-child(${ currentImgIndex + 1})`);
    oldThumb.classList.remove("my-active");

    /********************************BIG IMAGE REMOVE ACTIVE B.DOWN********************************/
    const oldImg = document.querySelector(`#img-slider :nth-child(${ currentImgIndex + 1})`);
    oldImg.classList.remove("my-active");

    currentImgIndex++;

    if (currentImgIndex == 5){
        currentImgIndex = 0;
    }

    /**********THUMB ADD ACTIVE*********/
    const thumb = document.querySelector(`#thumb-slider :nth-child(${ currentImgIndex + 1})`);
    thumb.classList.add("my-active");

    /**************BIG IMAGE ADD ACTIVE*******************/
    const nowImg = document.querySelector(`#img-slider :nth-child(${ currentImgIndex + 1})`);
    nowImg.classList.add("my-active");
    
});
