// Get cart elements
const cartTable = document.querySelector('#cart table');
const cartRows = cartTable.querySelectorAll('tbody tr');
const cartTotal = document.querySelector('#cart-total');

// Add event listeners to cart elements
cartTable.addEventListener('click', event => {
  const target = event.target;

  // Increment quantity
  if (target.matches('.increment')) {
    const quantity = target.parentNode.querySelector('.quantity');
    const price = target.parentNode.parentNode.querySelector('td:nth-child(2)').textContent;
    const total = target.parentNode.parentNode.querySelector('.total');
    let newQuantity = parseInt(quantity.textContent) + 1;
    quantity.textContent = newQuantity;
    total.textContent = `$${(newQuantity * price.substring(1)).toFixed(2)}`;
    updateCartTotal();
  }
  
  // Decrement quantity
  if (target.matches('.decrement')) {
    const quantity = target.parentNode.querySelector('.quantity');
    const price = target.parentNode.parentNode.querySelector('td:nth-child(2)').textContent;
    const total = target.parentNode.parentNode.querySelector('.total');
    let newQuantity = parseInt(quantity.textContent) - 1;
    if (newQuantity < 1) {
      newQuantity = 1;
    }
    quantity.textContent = newQuantity;
    total.textContent = `$${(newQuantity * price.substring(1)).toFixed(2)}`;
    updateCartTotal();
  }

  // Remove item
  if (target.matches('.remove')) {
    target.parentNode.parentNode.remove();
    updateCartTotal();
  }

  // Like item
  if (target.matches('.like')) {
    target.classList.toggle('liked');
  }
});

// Update cart total
function updateCartTotal() {
  let total = 0;
  cartRows.forEach(row => {
    total += parseFloat(row.querySelector('.total').textContent.substring(1));
  });
  cartTotal.textContent = `$${total.toFixed(2)}`;
}
