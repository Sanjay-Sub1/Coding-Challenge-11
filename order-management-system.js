//Function to calculate the total price
function calculateTotal(){
    const productDopdown = document.getElementById('product');
    const quantityInput = document.getElementById('quantity');
    const totalPriceDisplay = document.getElementById('totalPrice');

//Changes the html inputs into both a float point and an integer
const priceOfProduct = parseFloat(productDopdown.value);
const quantity = parseInt(quantityInput.value);

//mulitplies the quantity by price to get total amount
const totalPrice = priceOfProduct * quantity;
totalPriceDisplay.textContent = totalPrice.toFixed(2);
}

//Dynamically updates the page
document.getElementById('product').addEventListener('change',calculateTotal);
document.getElementById('quantity').addEventListener('input', calculateTotal);
