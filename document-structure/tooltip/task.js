'use strict'

let hintWords = Array.from(document.querySelectorAll('.has-tooltip'))

for (let i = 0; i < hintWords.length; i++) {

    hintWords[i].addEventListener('click', (event) => {
        event.preventDefault();
        let newHint = document.createElement('div');
        newHint.setAttribute('class', 'tooltip tooltip_active');
        newHint.innerText = hintWords[i].getAttribute('title');
        hintWords[i].insertAdjacentElement('beforeBegin', newHint);
    })
}

