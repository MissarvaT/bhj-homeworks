'use strict'

let editor = document.getElementById('editor');

editor.value = '';
editor.addEventListener('input', () => {
    localStorage.text = editor.value;
})

window.addEventListener('load', () => {
    editor.value = localStorage.text;
})
