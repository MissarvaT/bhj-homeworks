'use strict'

let input = document.querySelector('.tasks__input');
let tasksList = document.querySelector('.tasks__list');
let form = document.querySelector('.tasks__control');
let button = document.querySelector('.tasks__add');

form.addEventListener('submit', e => {
  e.preventDefault();
});

let addTask = function () {
  let newTask = document.createElement('div');
  tasksList.appendChild(newTask);
  newTask.outerHTML = `<div class="task">
  <div class="task__title">
  ${input.value}
  </div>
  <a href="#" class="task__remove">&times;</a>
  </div>`;
  input.value = '';
};

input.addEventListener('keydown', () => {
  if (input.value !== '' && event.key === 'Enter') {
    addTask;
  };
});

button.addEventListener('click', addTask);

tasksList.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.classList.contains('task__remove')) {    
       event.target.parentElement.remove();
   }
})