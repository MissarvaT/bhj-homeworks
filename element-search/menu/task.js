'use strict'

let subMenuList = document.getElementsByClassName("menu_sub");
let subMenus = Array.from(subMenuList);
let parentMenuItems = subMenus.map(item => item.closest(".menu__item"));
let parentLinks = parentMenuItems.map(item => item.querySelector("a"));

for (let i=0; i<parentMenuItems.length; i++ ){
    parentLinks[i].onclick = function() {
        return false;
    };

    parentMenuItems[i].onclick = function() {

        let subMenuStatus = subMenus.map(item => item.className);
        if (subMenuStatus.includes("menu menu_sub menu_active") && subMenus[i].className != "menu menu_sub menu_active") {
            subMenus.forEach(item => item.className = "menu menu_sub");  
        };

        if (subMenus[i].className === "menu menu_sub") {
            subMenus[i].className = "menu menu_sub menu_active";
        } else {
            subMenus[i].className = "menu menu_sub";
        };
    };
};

