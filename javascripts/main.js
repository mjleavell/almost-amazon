import {getBooks, cartClick} from './components/store.js';

const initializeApp = () => {
    getBooks();
    cartClick();
}

initializeApp();