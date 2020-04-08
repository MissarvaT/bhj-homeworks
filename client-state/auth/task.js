'use strict'
let form = document.getElementById('signin__form');
let welcome = document.getElementById('welcome');
let userId = document.getElementById('user_id');

window.addEventListener('load', () => {
    if (localStorage.userId !== undefined) {
        welcome.classList.add('welcome_active');
        userId.innerText = localStorage.userId;
    } else {
        signin.classList.add('signin_active');
    };
});

form.addEventListener('submit', event => {
    event.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    let formData = new FormData(form);
    xhr.send(formData);
    xhr.onreadystatechange = function() {
        if (this.readyState == xhr.DONE && this.status == 200) {
            let response = JSON.parse(this.responseText);
            if (response.success) {
                console.log(localStorage.user);
                localStorage.userId = response.user_id;
                console.log(localStorage.userId);
                userId.innerText = localStorage.userId;
                welcome.classList.add('welcome_active');
                signin.classList.remove('signin_active');
            } else {
                alert('Неверный логин/пароль');
            };
        };
    };
});


