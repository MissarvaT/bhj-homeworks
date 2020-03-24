'use strict'

const changer = function() {
    let activeElement = document.querySelector('.rotator__case_active');
    let color = activeElement.dataset.color;
    activeElement.style.color = color;
    activeElement.classList.toggle('rotator__case_active');
    if (activeElement.nextElementSibling === null) {
        document.querySelector('.rotator').firstElementChild.classList.toggle('rotator__case_active');
    } else {
    activeElement.nextElementSibling.classList.toggle('rotator__case_active');
    };
}

setInterval(changer, 1000);