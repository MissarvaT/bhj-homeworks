let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

function getHole( index ) {
    let hole = document.getElementById(`hole${index}`);
    return hole;
};

for (let i=1; i < 10; i++) {
    let hole = getHole(i);
    hole.onclick = function() {
        if (hole.className.includes('hole_has-mole')) {
            dead.textContent = parseInt(dead.textContent) + 1;
            if (dead.textContent == 10) {
                alert( 'Вы выиграли!');
                lost.textContent = 0;
                dead.textContent = 0;
            };
        } else {
            lost.textContent = parseInt(lost.textContent) + 1;
            if (lost.textContent == 5) {
                alert('Вы проиграли!');
                lost.textContent = 0;
                dead.textContent = 0;
            };
        };
    };
};