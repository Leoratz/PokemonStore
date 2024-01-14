const mainDiv = document.querySelector("main");
const input = document.querySelector("input");
const search = document.querySelector("#search");

search.addEventListener("click", () => {
    const pokemonName = input.value;
    console.log(pokemonName);

    if (pokemonName === "") {
        alert("Veuillez saisir un nom de pokémon");
        return;
    }
    
    if(pokemonName) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then((response) => response.json())
            .then((data) => {
                
                mainDiv.innerHTML = '';

                const cardDiv = document.createElement("div");
                cardDiv.classList.add("card");
                cardDiv.dataset.id = data.id;
    
                const imgDiv = document.createElement("div");
                imgDiv.classList.add("img-card");
    
                const contentDiv = document.createElement("div");
                contentDiv.classList.add("content-card");
    
                const h3Nom = document.createElement("h3");
                h3Nom.textContent = data.name;
    
                const Textprice = document.createElement("p");
                const price = Math.floor(Math.random() * 100);
                Textprice.textContent = price + "€";
    
                mainDiv.appendChild(cardDiv);
                cardDiv.appendChild(imgDiv);
                cardDiv.appendChild(contentDiv);
    
                contentDiv.appendChild(h3Nom);
                contentDiv.appendChild(Textprice);
    
                const img = document.createElement("img");
                img.src = data.sprites.front_default;
                imgDiv.appendChild(img);
            })
            .catch((error) => {
                mainDiv.innerHTML = '';

                const div = document.createElement("div");
                div.textContent = "Pokémon non trouvé";
                mainDiv.appendChild(div);
            });
    } else {
        alert("Pas de pokémon trouvé");
    }
});