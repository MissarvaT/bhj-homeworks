'use strict'

const progress = document.getElementById( 'progress');
let form = document.getElementById('form');
console.log(form);

form.addEventListener('submit', event => {

    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.upload.onprogress = function(event) {
        progress.value = event.loaded / event.total;
    };
    xhr.upload.onload = function() {
        alert( 'Файл полностью загружен!' );
    };
    xhr.send(formData);
    event.preventDefault();
});

