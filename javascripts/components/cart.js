import {writeToDom} from '../helpers/util.js';
import {getBooks, cartClick} from './store.js';

const shoppingCartBuilder = (title,image,price) => {
    let newString = "";
    newString = `<div class="shopping-cart mx-auto">
                    <h2>Your Shopping Cart</h2>
                    <div class="card shopping-cart-card">
                        <div class="card-body p-0 m-0">
                            <h3 class="card-title">${title}</h3>
                            <img class="card-img-top" src="${image}" style="height: 225px; width: 150px;" alt="Card image cap">
                            <p class="card-text">Price: ${price}</p>
                            <a href="#" id="btn-discount" class="btn btn-secondary mx-2">Apply Discount (15%)</a>
                            <a href="#book" id="btn-shopping" class="btn btn-secondary mx-2">Continue Shopping</a>
                        </div>
                    </div>
                </div>`;
    writeToDom(newString, 'cart');
}

const continueShopping = () => {
    document.getElementById('cart').addEventListener('click', (e) => {
        if (e.target.id === 'btn-shopping') {
            document.getElementById('cart').innerHTML = '';
            getBooks();
            cartClick();
        }
    })
}


export {shoppingCartBuilder,continueShopping}