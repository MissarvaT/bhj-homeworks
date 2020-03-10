//'use strict'

let clickerCounter = document.getElementById('clicker__counter');

let cookie = document.getElementById('cookie');
let counter = 0;


cookie.onclick = function() {
    counter += 1;
     clickerCounter.textContent = counter;

    if (counter % 2 === 0) {
        cookie.width = 220;
    } else {
        cookie.width = 200;
    };
}

