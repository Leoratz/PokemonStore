let pokemonCart = JSON.parse(localStorage.getItem("pokemonCartId")) || [];
const cards = document.querySelector(".cards");

console.log(pokemonCart);
if (pokemonCart.length > 0) {

    pokemonCart.forEach((pokemon) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((response) => response.json())
        .then((data) => {

            const card = document.createElement("div");
            card.classList.add("card");
            const img = document.createElement("img");
            img.src = data.sprites.front_default;
            const name = document.createElement("h2");
            name.textContent = data.name;
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Supprimer";
            
            deleteButton.addEventListener("click", () => {
                const index = pokemonCart.indexOf(pokemon);
                pokemonCart.splice(index, 1);
                localStorage.setItem("pokemonCartId", JSON.stringify(pokemonCart));
                card.remove();
                location.reload()
            });
            
            cards.appendChild(card);
            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(deleteButton);
        })
           
    });


} else {
    const h2 = document.querySelector("h2");
    h2.textContent = "Votre panier est vide";
}

