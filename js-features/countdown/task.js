'use strict'

const countdown = function() {
    const timer = document.getElementById('timer');
        timer.textContent -= 1;

    if (timer.textContent == 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(counting);
    };
};

const counting = setInterval(countdown, 1000);