'use strict'

let fontButtons = Array.from(document.querySelectorAll('.font-size'));

let changeSize = function() {
    for (let i=0; i < fontButtons.length; i++) {
        if (fontButtons[i].classList.contains('font-size_active')) {
            fontButtons[i].classList.remove('font-size_active');
        };
    };

    let text = document.querySelector('.book__content')

	if (text.classList.contains('book_fs-small')) {
		text.classList.remove('book_fs-small');
	};
	if (text.classList.contains('book_fs-big')) {
		text.classList.remove('book_fs-big');
	};

    this.classList.add('font-size_active');
    if (`${this.dataset.size}` !== undefined) {
        text.classList.add(`book_fs-${this.dataset.size}`)
    };
};


for (let i=0; i <fontButtons.length; i++) {
    fontButtons[i].addEventListener('click', changeSize);
};