'use strict'

let products = Array.from(document.querySelectorAll('.product'));

for (let i = 0; i < products.length; i++) {
    let decreaseButton = products[i].querySelector('.product__quantity-control_dec');
    let increaseButton = products[i].querySelector('.product__quantity-control_inc');
    let addToCartButton = products[i].querySelector('.product__add');
    let quantity = products[i].querySelector('.product__quantity-value');
    let image = products[i].querySelector('img');
    
    decreaseButton.addEventListener( 'click', () => {
        if (quantity.innerText > 1) {
            quantity.innerText -= 1;
        };
    });

    increaseButton.addEventListener( 'click', () => {
        quantity.innerText = Number(quantity.innerText) + 1;
    });


    addToCartButton.addEventListener( 'click', () => {
        let cart = document.querySelector('.cart__products');
        let cartProductsList = Array.from(cart.querySelectorAll('.cart__product'));
        let ids = cartProductsList.map((element) => {return element.dataset.id});
        if (ids.includes(products[i].dataset.id)) {
            let alreadyAdded = cartProductsList.find(product => product.dataset.id === products[i].dataset.id);
            let productCount = alreadyAdded.querySelector('.cart__product-count');
            productCount.innerText = Number(productCount.innerText) + Number(quantity.innerText);
        } else { 
            let cartProduct = document.createElement('div');
            cart.append(cartProduct);
            cartProduct.outerHTML = `<div class="cart__product" data-id="${products[i].dataset.id}">
            <img class="cart__product-image" src="${image.getAttribute('src')}">
            <div class="cart__product-count">${quantity.innerText}</div>
            </div>`
        };
    });
};
