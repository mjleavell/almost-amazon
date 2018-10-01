const printToDom = (stringToPrint, elementId) => {
    const selectedDiv = document.getElementById(elementId);
    selectedDiv.innerHTML += stringToPrint;
};

const writeToDom = (stringToPrint, elementId) => {
    const selectedDiv = document.getElementById(elementId);
    selectedDiv.innerHTML = stringToPrint;
};

// const showPage = () => {
//     document.getElementById('navLinks').addEventListener('click', () => {
//         if (event.target.id === "nav-cart") {
//             document.getElementById('book').innerHTML = '';
//         } else if (event.target.id === "nav-home") {
//             document.getElementById('cart').innerHTML = '';
//         }
//     })
// }

export {printToDom, writeToDom}