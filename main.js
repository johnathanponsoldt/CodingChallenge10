// Task 2: Add Event Listeners for Product Selection

const priceDisplay = document.getElementById('product-price');
const sizeDropdown = document.getElementById('size-options');

sizeDropdown.addEventListener('change', function (){
    const selectedOption = sizeDropdown.options
    const newPrice = selectedOption.getAttribute('data-price');
    priceDisplay.textContent = `Price $${newPrice}`;
})

// Task 3: Handle stock availability and disable purchase button when out of stock

const purchaseButton = document.getElementById('purchase-btn');
sizeDropdown.addEventListener('change', function () {
    const selectedOption = sizeDropdown.options[sizeDropdown.selectedIndex];
    const newPrice = selectedOption.getAttribute('data-price');
    const isInstock = selectedOption.getAttribute('data-stock') === 'true';

    priceDisplay.textContent = `Price: $${newPrice}`;
    if (!isInstock) {
        purchaseButton.disabled = true;
 }   else {
    purchaseButton.disabled = false;
 }
    
});

// Task 4: Create a Checkout Event

purchaseButton.addEventListener('Click', function () {
    const selectedOption = sizeDropdown.options[sizeDropdown.selectedIndex];
    const isInstock = selectedOption.getAttribute('data-stock') === 'true';

    if (isInstock) {
        alert('The purchase is confirmed, thank you for buying');
      } else {
        alert('Sorry the size you tried ordering is not in stock');
      }
});

// Task 5: Implement Event Delegation for Dynamic Product List

