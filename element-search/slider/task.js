
let sliders = document.getElementsByClassName('slider__item');
let slidesArray = Array.from(sliders);
let classStatusArray = slidesArray.map(item=> item.className);
let dotsArray = Array.from(document.getElementsByClassName('slider__dot'));

let activeSlideNumber = 0;
console.log(activeSlideNumber);

let leftArrow = document.querySelector('.slider__arrow_prev');
let rightArrow = document.querySelector('.slider__arrow_next');

let imageSetter = function(number) {
    if (classStatusArray.includes('slider__item slider__item_active')) {
        slidesArray.forEach(item => item.className = 'slider__item');
        dotsArray.forEach(item => item.className = 'slider__dot');
    };
    slidesArray[number].className = 'slider__item slider__item_active';
    dotsArray[number].className = 'slider__dot_active';
};

leftArrow.onclick = function() {
    if (activeSlideNumber <= 0) {
        activeSlideNumber = slidesArray.length;
    };
    activeSlideNumber--;
    imageSetter(activeSlideNumber);
};

rightArrow.onclick = function() {
    activeSlideNumber++;
    if (activeSlideNumber >= slidesArray.length) {
        activeSlideNumber = 0;
    };
    imageSetter(activeSlideNumber);
};

for (let i=0; i < dotsArray.length; i++) {
    dotsArray[i].onclick = function() {
        imageSetter(i);
    }
}