// Task 2: Add Event Listeners for Product Selection

const priceDisplay = document.getElementById('product-price');
const sizeDropdown = document.getElementById('size-options');

sizeDropdown.addEventListener('change', function (){
    const selectedOption = sizeDropdown.options
    const newPrice = selectedOption.getAttribute('data-price');
    priceDisplay.textContent = `Price $${newPrice}`;
})