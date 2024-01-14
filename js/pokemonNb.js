document.addEventListener("DOMContentLoaded", function() {
    let pokemonList = JSON.parse(localStorage.getItem("pokemonCartId")) || [];

    console.log("Taille de la liste : "+ pokemonList.length);

    const cart = document.querySelector("#cart");
    if(cart) {
        cart.innerHTML = pokemonList.length + "🛒";
    } else {
        console.error("No element with id 'cart' found");
    }
});