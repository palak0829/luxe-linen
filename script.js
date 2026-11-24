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