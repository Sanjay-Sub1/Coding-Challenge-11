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
//Creates a function to display the message based on what was ordered
function placeOrder() {
    const productDropdown = document.getElementById('product');
    const quantityInput = document.getElementById('quantity');
    const orderSummary = document.getElementById('orderSummary');
  //Grabs the order
    const selectedProduct = productDropdown.selectedOptions[0].text;
    const quantity = parseInt(quantityInput.value) || 0;
    const totalPrice = document.getElementById('totalPrice').textContent;
  //Displays message
    const summary = `You ordered ${quantity} of ${selectedProduct} totaling to ${totalPrice}`;

    orderSummary.textContent = summary;
  }
//Dynamically updates the page
document.getElementById('product').addEventListener('change',calculateTotal);
document.getElementById('quantity').addEventListener('input', calculateTotal);
document.querySelector('button').addEventListener('click', placeOrder);
