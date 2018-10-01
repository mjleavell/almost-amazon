import {printToDom} from '../helpers/util.js';

const bookObj = [
    {
        title: "Homo Deus",
        author: "Yuval Noah Harari",
        price: "$35.00",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Homo_Deus.jpg/200px-Homo_Deus.jpg"
        // discount: true 
    },
    {
        title: "Something in the Water",
        author: "Catherine Steadman",
        price: "$27.00",
        image: "https://images.gr-assets.com/books/1528120440l/36388243.jpg"
        // discount: true 
    },
    {
        title: "All the Light We Cannot See",
        author: "Anthony Doerr",
        price: "$27.00",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/All_the_Light_We_Cannot_See_%28Doerr_novel%29.jpg/220px-All_the_Light_We_Cannot_See_%28Doerr_novel%29.jpg"
        // discount: true 
    },
    {
        title: "Americanah",
        author: "Chimamanda Ngozi Adichie",
        price: "$28.95",
        image: "https://cdn-images-1.medium.com/max/1200/1*zimzkP0GSiEw9CXnNizmaw.jpeg"
        // discount: true 
    },
    {
        title: "Our Final Invention",
        author: "James Barrat",
        price: "$20.00",
        image: "https://images.gr-assets.com/books/1361640176l/17286699.jpg"
        // discount: true 
    },
    {
        title: "East of Eden",
        author: "John Steinbeck",
        price: "$25.99",
        image: "https://pictures.abebooks.com/isbn/9780142000656-us-300.jpg"
        // discount: true 
    }
]

const bookBuilder = () => {
    let newString = "";
    for (let i = 0; i < bookObj.length; i++) {
        newString += `<div class="card book" style="width: 25rem;">`
        newString += `<img class="card-img-top" src="${bookObj[i].image}" style="height: 225px; width: 150px;" alt="Card image cap">`
        newString += `<div class="card-body">`
        newString += `<h3 class="card-title">${bookObj[i].title}</h3>`
        newString += `<h5 class="card-text">Author: ${bookObj[i].author}</h5>`
        newString += `<p class="card-text">Price: ${bookObj[i].price}</p>`
        newString += `<a href="#" id="btn-${i}" class="btn btn-secondary">Add to Cart</a>`
        newString += `</div>`
        newString += `</div>`;
    }
    printToDom(newString, 'book');
}

const getBooks = () => {
    return bookBuilder();
}

const cartClick = () => {
    let button = document.getElementsByClassName('btn');
    for (let i = 0; i < bookObj.length; i++) {
        button[i].addEventListener('click', () => {
            console.log('hi');
        })
    }
}

export {getBooks, cartClick}