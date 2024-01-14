const pokemon = localStorage.getItem("pokemonId");

const api = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

fetch(api)
  .then((response) => response.json())
  .then((data) => {

    if(pokemon) {
      
        const img = document.querySelector("#pokemon");
        img.src = data.sprites.front_default;
        const h2Nom = document.querySelector("h2");
        h2Nom.textContent = data.name;
        const textprice = document.querySelector("p");
        textprice.textContent = Math.floor(Math.random() * 100) + "€";
        const type = document.querySelector(".type");
        type.textContent = data.types[0].type.name;
        
        const ab = document.querySelector("#ab");
        ab.textContent = "Abilité : " + data.abilities[0].ability.name;
        const weight = document.querySelector("#weight");
        weight.textContent = "Poids : " + data.weight / 10 + "kg";
        const gen = document.querySelector("#gen");

        if (data.id <= 151) {
        gen.textContent = "Génération : 1";
        } else if (data.id <= 251) {
            gen.textContent = "Génération : 2";
        } else if (data.id <= 386) {
            gen.textContent = "Génération : 3";
        } else if (data.id <= 493) {
            gen.textContent = "Génération : 4";
        } else if (data.id <= 649) {
            gen.textContent = "Génération : 5";
        } else if (data.id <= 721) {
            gen.textContent = "Génération : 6";
        } else if (data.id <= 809) {
            gen.textContent = "Génération : 7";
        } else if (data.id <= 898) {
            gen.textContent = "Génération : 8";
        };

        const cart = document.querySelector("#addToCart");
        let cartItems = JSON.parse(localStorage.getItem("pokemonCartId")) || [];
        
        cart.addEventListener("click", () => {
            console.log("Ajouté au panier");
            cartItems.push(pokemon);
            localStorage.setItem("pokemonCartId", JSON.stringify(cartItems));
            location.reload();
        });
    }
    else {
      console.error("Aucun Pokémon sélectionné dans le localStorage.");}
});

const bounceButtons = document.querySelectorAll("#addToCart");

bounceButtons.forEach((bounceButton) => {
    bounceButton.addEventListener("click", () => {
        bounceButton.classList.add("bounce");
        setTimeout(function () {
            bounceButton.classList.remove("bounce");
        }, 1000);
    });
});