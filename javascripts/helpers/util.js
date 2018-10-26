const printToDom = (stringToPrint, elementId) => {
    const selectedDiv = document.getElementById(elementId);
    selectedDiv.innerHTML += stringToPrint;
};

const writeToDom = (stringToPrint, elementId) => {
    const selectedDiv = document.getElementById(elementId);
    selectedDiv.innerHTML = stringToPrint;
};

const discountPrice = (priceToDiscount) => {
    return (priceToDiscount - parseFloat(priceToDiscount) * 0.15).toFixed(2);
}

export {printToDom, writeToDom, discountPrice}