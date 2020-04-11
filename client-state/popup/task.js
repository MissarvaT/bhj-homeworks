'use strict'

let pop = document.getElementById('subscribe-modal');
let closeButton = document.querySelector('.modal__close');

window.addEventListener('load', () => {
    if (getCookie('pop') !== 'closed')
        pop.classList.add('modal_active');
});

closeButton.addEventListener('click', () => {
    pop.classList.remove('modal_active');
    document.cookie = 'pop=closed'; //не добавляется по непонятной мне причине
});

const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
    return parts
    .pop()
    .split(";")
    .shift();
    }
}

