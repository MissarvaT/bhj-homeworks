'use strict'

let currentsList = document.getElementById('items');
let loader = document.querySelector('.loader');

let xhr = new XMLHttpRequest();

xhr.open( 'GET', 'https://netology-slow-rest.herokuapp.com');

xhr.addEventListener( 'readystatechange', function() {
    if (this.readyState == xhr.DONE && xhr.status == 200) {
        
        let data = JSON.parse(this.responseText);
        let currencyInfo = data.response.Valute;
        let properties = Object.getOwnPropertyNames(currencyInfo);
        let result;
        for (let i = 0; i < properties.length; i++) {
            result += `<div class="item">
            <div class="item__code">${currencyInfo[properties[i]]['CharCode']}</div>
            <div class="item__value">${currencyInfo[properties[i]]['Value']}</div>
            <div class="item__currency">руб.</div>
            </div>`
        };
        currentsList.innerHTML = result;
        loader.classList.remove('loader_active');
    }; 
})

xhr.send();