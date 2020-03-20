let dropdownValue = document.querySelector('.dropdown__value');
let dropdownList = document.querySelector('.dropdown__list');
let links = Array.from(document.querySelectorAll('.dropdown__link'));

let dropdownFunc = function() {
    if (dropdownList.className === 'dropdown__list dropdown__list_active') {
        dropdownList.className = 'dropdown__list';
    } else {
    dropdownList.className = 'dropdown__list dropdown__list_active';
    };
};

dropdownValue.addEventListener( 'click', dropdownFunc );

let onClick = function(event) {
    event.preventDefault();
    dropdownValue.textContent = this.textContent;
    dropdownList.className = 'dropdown__list';
};

for (let item of links) {
item.addEventListener('click', onClick);
};

