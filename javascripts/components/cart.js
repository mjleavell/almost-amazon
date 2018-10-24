import {writeToDom, discountPrice} from '../helpers/util.js';
import {getBooks} from './store.js';

const shoppingCartBuilder = (bookObject) => {
    console.log(bookObject)
    let newString = "";
    newString = `<div class="shopping-cart mx-auto">
                    <h2>Your Shopping Cart</h2>
                    <div class="card shopping-cart-card">
                        <div class="card-body p-0 m-0">
                            <h3 class="card-title">${bookObject.title}</h3>
                            <img class="card-img-top" src="${bookObject.image}" style="height: 225px; width: 150px;" alt="Card image cap">
                            <p class="card-text" id="cart-price">Price: $${bookObject.price}</p>
                            <a href="#" id="btn-discount" class="btn btn-secondary mx-2">Apply Discount (15%)</a>
                            <a href="#book" id="btn-shopping" class="btn btn-secondary mx-2">Continue Shopping</a>
                        </div>
                    </div>
                </div>`;
    writeToDom(newString, 'cart');
    isDiscountAvail(bookObject);
    discountEvent(bookObject.price)
    continueShopping();
}

const continueShopping = () => {
    document.getElementById('cart').addEventListener('click', (e) => {
        if (e.target.id === 'btn-shopping') {
            document.getElementById('cart').innerHTML = '';
            getBooks();
            // cartClick();
        }
    })
}

const discountEvent = (originalPrice) => {
    document.getElementById('cart').addEventListener('click', (e) => {
        if (e.target.id === 'btn-discount') {
            const newPrice = discountPrice(originalPrice);
            document.getElementById('cart-price').innerHTML = `$${newPrice}`;
            document.getElementById('btn-discount').setAttribute("disabled", "disabled");
            document.getElementById('btn-discount').classList.add("disabled");
        }
    })
}

const isDiscountAvail = (book) => {
 if (book.discountAvail === false) {
        document.getElementById('btn-discount').setAttribute("disabled", "disabled");
        document.getElementById('btn-discount').classList.add("disabled");
    }
}

export {shoppingCartBuilder}