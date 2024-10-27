function calculateTotal(){
    const productDopdown = document.getElementById('product');
    const quantityInput = document.getElementById('quantity');
    const totalPriceDisplay = document.getElementById('totalPrice');

const priceOfProduct = parseFloat(productDopdown.value);
const quantity = parseInt(quantityInput.value);

const totalPrice = priceOfProduct * quantity;
totalPriceDisplay.textContent = totalPrice.toFixed(2);
}

document.getElementById('product').addEventListener('change',calculateTotal);
document.getElementById('quantity').addEventListener('input', calculateTotal);
