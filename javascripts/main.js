import {getBooks, cartClick} from './components/store.js';
import {continueShopping} from './components/cart.js';


const initializeApp = () => {
    getBooks();
    cartClick();
    continueShopping();
}

initializeApp();