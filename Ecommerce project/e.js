// Cart functionality
const cartItemsElement = document.getElementById("cart-items");
const cartTotalElement = document.getElementById("cart-total");
const checkoutButton = document.getElementById("checkout");

let cart = [];

// Add to Cart button logic
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    const product = button.parentElement;
    const id = product.getAttribute("data-id");
    const name = product.getAttribute("data-name");
    const price = parseFloat(product.getAttribute("data-price"));

    const existingProduct = cart.find(item => item.id === id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.push({ id, name, price, quantity: 1 });
    }

    updateCart();
  });
});

// Update Cart
function updateCart() {
  cartItemsElement.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
    cartItemsElement.appendChild(li);

    total += item.price * item.quantity;
  });

  cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Checkout logic
checkoutButton.addEventListener("click", () => {
  if (cart.length > 0) {
    alert("Payment successful! Thank you Booking Succesful.");
    cart = [];
    updateCart();
  } else {
    alert("Your cart is empty.");
  }
});
