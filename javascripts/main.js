import {getBooks, cartClick} from './components/store.js';
// import {showPage} from './helpers/util.js';
import {continueShopping} from './components/cart.js';


const initializeApp = () => {
    // showPage();
    getBooks();
    cartClick();
    continueShopping();
}

initializeApp();