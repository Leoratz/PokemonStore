// async function fetchPokemon() {
//     const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
//     const data = await response.json();

//     console.log("Affichage Pokemon dans le DOM");

//     const cards = document.querySelector(".cards");

//     for (const pokemon of data.results) {
//         const pokemonResponse = await fetch(pokemon.url);
//         const pokemonData = await pokemonResponse.json();

//         const cardDiv = document.createElement("div");
//         cardDiv.classList.add("card");
//         cardDiv.dataset.id = pokemonData.id;

//         const imgDiv = document.createElement("div");
//         imgDiv.classList.add("img-card");

//         const contentDiv = document.createElement("div");
//         contentDiv.classList.add("content-card");

//         const h3Nom = document.createElement("h3");
//         h3Nom.textContent = pokemonData.name;

//         const Textprice = document.createElement("p");
//         const price = Math.floor(Math.random() * 100);
//         Textprice.textContent = price + "€";

//         cards.appendChild(cardDiv);
//         cardDiv.appendChild(imgDiv);
//         cardDiv.appendChild(contentDiv);

//         contentDiv.appendChild(h3Nom);
//         contentDiv.appendChild(Textprice);

//         const img = document.createElement("img");
//         img.src = pokemonData.sprites.front_default;
//         imgDiv.appendChild(img);

//         setTimeout(() => {
//             cardDiv.classList.add("fade-in");
//         }, 500);
//     }
// }

// fetchPokemon();

// const main = document.querySelector("main");

// main.addEventListener("click", async (event) => {
//     const clickedCard = event.target.closest(".card");

//     if (clickedCard) {
//         const pokemonId = clickedCard.dataset.id;

//         const pokemon = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

//         try {
//             const response = await fetch(pokemon);
//             const data = await response.json();
//             localStorage.setItem("pokemonId", pokemonId);
//             window.location.href = `product.html?${pokemonId}`;
//             console.log(`Données du Pokémon ${pokemonId} stockées`);
//         } catch (error) {
//             console.error("Erreur lors de la récupération du Pokémon :", error);
//         }
//     }
// });


// fetch("https://pokeapi.co/api/v2/type")
//     .then((response) => response.json())
//     .then((data) => {
        
//         const filter = document.querySelector("#type-filter");
        
//         data.results.forEach((type) => {
//             const pokemonType = type.name;
        
//             const option = document.createElement("option");
//             option.value = pokemonType;
//             option.textContent = pokemonType;
//             filter.appendChild(option);
//         });

//         filter.addEventListener("change", async (event) => {
//             const selectedType = event.target.value;
//             const response = await fetch(`https://pokeapi.co/api/v2/type/${selectedType}`);
//             const data = await response.json();
//             const pokemonList = data.pokemon;
//             const cards = document.querySelectorAll(".card");
            
//             setTimeout(() => {
//                 cards.forEach((card) => {
//                     card.remove();
//                 });
//                 pokemonList.forEach(async (pokemon) => {
//                     const pokemonResponse = await fetch(pokemon.pokemon.url);
//                     const pokemonData = await pokemonResponse.json();

//                     const cards = document.querySelector(".cards");
//                     const cardDiv = document.createElement("div");
//                     cardDiv.classList.add("card");
//                     cardDiv.dataset.id = pokemonData.id;
//                     const imgDiv = document.createElement("div");
//                     imgDiv.classList.add("img-card");
//                     const contentDiv = document.createElement("div");
//                     contentDiv.classList.add("content-card");
//                     const h3Nom = document.createElement("h3");
//                     h3Nom.textContent = pokemonData.name;

//                     const Textprice = document.createElement("p");
//                     const price = Math.floor(Math.random() * 100);
//                     Textprice.textContent = price + "€";

//                     cards.appendChild(cardDiv);
//                     cardDiv.appendChild(imgDiv);
//                     cardDiv.appendChild(contentDiv);
//                     contentDiv.appendChild(h3Nom);
//                     contentDiv.appendChild(Textprice);

//                     const img = document.createElement("img");
//                     img.src = pokemonData.sprites.front_default;
//                     imgDiv.appendChild(img);

//                     setTimeout(() => {
//                         cardDiv.classList.add("fade-in");
//                     }, 500);

//                 });
//             }, 500);
//         });
//     });

let perPage = 20;
let currentPage = 1;

async function fetchPokemon(currentPage, perPage) {
    const offset = (currentPage - 1) * perPage;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`);
    const data = await response.json();

    const cards = document.querySelector(".cards");
    cards.innerHTML = '';

    for (const pokemon of data.results) {
        const pokemonResponse = await fetch(pokemon.url);
        const pokemonData = await pokemonResponse.json();

        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.dataset.id = pokemonData.id;

        const imgDiv = document.createElement("div");
        imgDiv.classList.add("img-card");

        const contentDiv = document.createElement("div");
        contentDiv.classList.add("content-card");

        const h3Nom = document.createElement("h3");
        h3Nom.textContent = pokemonData.name;

        const Textprice = document.createElement("p");
        const price = Math.floor(Math.random() * 100);
        Textprice.textContent = price + "€";

        cards.appendChild(cardDiv);
        cardDiv.appendChild(imgDiv);
        cardDiv.appendChild(contentDiv);

        contentDiv.appendChild(h3Nom);
        contentDiv.appendChild(Textprice);

        const img = document.createElement("img");
        img.src = pokemonData.sprites.front_default;
        imgDiv.appendChild(img);

        
        cardDiv.classList.add("fade-in");
        
    }
}

fetchPokemon(currentPage, perPage);

document.querySelector("#prev-page").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        fetchPokemon(currentPage, perPage);
    }
});

document.querySelector("#next-page").addEventListener("click", () => {
    currentPage++;
    fetchPokemon(currentPage, perPage);
});

const main = document.querySelector("main");

main.addEventListener("click", async (event) => {
    const clickedCard = event.target.closest(".card");

    if (clickedCard) {
        const pokemonId = clickedCard.dataset.id;

        const pokemon = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

        try {
            const response = await fetch(pokemon);
            const data = await response.json();
            localStorage.setItem("pokemonId", pokemonId);
            window.location.href = `product.html?${pokemonId}`;
        } catch (error) {
            console.error("Erreur lors de la récupération du Pokémon :", error);
        }
    }
});

fetch("https://pokeapi.co/api/v2/type")
    .then((response) => response.json())
    .then((data) => {
        const filter = document.querySelector("#type-filter");

        data.results.forEach((type) => {
            const pokemonType = type.name;

            const option = document.createElement("option");
            option.value = pokemonType;
            option.textContent = pokemonType;
            filter.appendChild(option);
        });

        filter.addEventListener("change", async (event) => {
            const selectedType = event.target.value;
            const response = await fetch(`https://pokeapi.co/api/v2/type/${selectedType}`);
            const data = await response.json();
            const pokemonList = data.pokemon;
            const cards = document.querySelectorAll(".card");

            cards.forEach((card) => {
                card.remove();
            });

            pokemonList.forEach(async (pokemon) => {
                const pokemonResponse = await fetch(pokemon.pokemon.url);
                const pokemonData = await pokemonResponse.json();

                const cards = document.querySelector(".cards");
                const cardDiv = document.createElement("div");
                cardDiv.classList.add("card");
                cardDiv.dataset.id = pokemonData.id;
                const imgDiv = document.createElement("div");
                imgDiv.classList.add("img-card");
                const contentDiv = document.createElement("div");
                contentDiv.classList.add("content-card");
                const h3Nom = document.createElement("h3");
                h3Nom.textContent = pokemonData.name;

                const Textprice = document.createElement("p");
                const price = Math.floor(Math.random() * 100);
                Textprice.textContent = price + "€";

                cards.appendChild(cardDiv);
                cardDiv.appendChild(imgDiv);
                cardDiv.appendChild(contentDiv);
                contentDiv.appendChild(h3Nom);
                contentDiv.appendChild(Textprice);

                const img = document.createElement("img");
                img.src = pokemonData.sprites.front_default;
                imgDiv.appendChild(img);

                cardDiv.classList.add("fade-in");
                
            });
        });
    });