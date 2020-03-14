
let sliders = document.getElementsByClassName('slider__item');
let slidesArray = Array.from(sliders);

let activeSlideNumber = 0;

let leftArrow = document.querySelector('.slider__arrow_prev');
let rightArrow = document.querySelector('.slider__arrow_next');

leftArrow.onclick = function() {
    if (activeSlideNumber === 0) {
        slidesArray[activeSlideNumber].className = "slider__item";
        activeSlideNumber = slidesArray.length - 1;
    } else {
        slidesArray[activeSlideNumber].className = "slider__item";
        activeSlideNumber = activeSlideNumber - 1;
    };
    slidesArray[activeSlideNumber].className = "slider__item slider__item_active";
};

rightArrow.onclick = function() {
    if (activeSlideNumber === slidesArray.length - 1) {
        slidesArray[activeSlideNumber].className = "slider__item";
        activeSlideNumber = 0;
    } else {
        slidesArray[activeSlideNumber].className = "slider__item";
        activeSlideNumber = activeSlideNumber + 1;
    };
    slidesArray[activeSlideNumber].className = "slider__item slider__item_active";
};
