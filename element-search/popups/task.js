'use strict'

let mainPop = document.getElementById("modal_main");
mainPop.className = "modal modal_active";
let successPop = document.getElementById("modal_success");

let closeButtons = document.getElementsByClassName("modal__close");
let closeArray = Array.from(closeButtons);

closeArray[0].onclick = function() {
    mainPop.className = "modal";
};

closeArray[1].onclick = function() {
    mainPop.className = "modal";
    successPop.className = "modal modal_active";
};

closeArray[2].onclick = function() {
    successPop.className = "modal";
};
