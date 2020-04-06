'use strict'

let hint = document.createElement('div');
hint.setAttribute('class', 'tooltip');
hint.setAttribute('style', 'left: 0; top: 0');
let hintWords = Array.from(document.querySelectorAll('.has-tooltip'))


for (let i = 0; i < hintWords.length; i++) {

    hintWords[i].addEventListener('click', (event) => {
        event.preventDefault();
        hint.classList.add('tooltip_active');
        hint.innerText = hintWords[i].getAttribute('title');
        hintWords[i].insertAdjacentElement('beforeBegin', hint);
        let hintWordsBottom = hintWords[i].getBoundingClientRect().bottom;
        let hintWordsLeft = hintWords[i].getBoundingClientRect().left;
        hint.style.left = hintWordsLeft + 'px';
        hint.style.top = hintWordsBottom + 'px';
    })
}

