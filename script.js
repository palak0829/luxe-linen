function addToCart(name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name: name, price: price, image: image || "" });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(name + " added to cart!");
}

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let countEl = document.getElementById("cart-count");
  if (countEl) countEl.innerText = cart.length;
}
fetch('http://localhost:3000/api/products')
  .then(res => res.json())
  .then(products => {
    console.log(products);
    
  });
  function offer(){

alert("🎉 Welcome! Flat 20% OFF Today");

}

let buttons=document.querySelectorAll(".card button");

buttons.forEach(function(btn){

btn.addEventListener("click",function(){

alert("Product Added to Cart");

});

});
function addToCart(name,price){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({

        name:name,

        price:price

    });

    localStorage.setItem("cart",JSON.stringify(cart));

    alert(name + " added to cart.");

    updateCartCount();

}

function searchProducts(){

    let input = document.getElementById("searchInput").value.toLowerCase();

    let cards = document.querySelectorAll(".product-card");

    cards.forEach(function(card){

        let name = card.querySelector("h3").textContent.toLowerCase();

        if(name.includes(input)){

            card.style.display="block";

        }
        else{

            card.style.display="none";

        }

    });

}
function updateCartCount(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    document.getElementById("cartCount").innerHTML = cart.length;

}

updateCartCount();

function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let container = document.getElementById("cartItems");
  let subtotalEl = document.getElementById("subtotal");
  let totalEl = document.getElementById("totalPrice");
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty</p>";
    if (subtotalEl) subtotalEl.innerText = "₹0";
    if (totalEl) totalEl.innerText = "₹0";
    return;
  }

  let total = 0;
  container.innerHTML = "";
  cart.forEach((item, index) => {
    let qty = item.quantity || 1;
    total += item.price * qty;
    container.innerHTML += `
      <div style="display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid #eee;">
        <div><b>${item.name}</b><br>Qty: ${qty}</div>
        <div>₹${item.price * qty} <button onclick="removeFromCart(${index})">Remove</button></div>
      </div>`;
  });
  if (subtotalEl) subtotalEl.innerText = "₹" + total;
  if (totalEl) totalEl.innerText = "₹" + total;
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
  updateCartCount();
}

displayCart();