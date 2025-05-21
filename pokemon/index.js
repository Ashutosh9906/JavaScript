async function fetchData() {

    try {

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not find resource");
        }

        const data = await response.json();
        const pokemonSpriteFront = data.sprites.front_default;
        const pokemonSpriteBack = data.sprites.back_default;
        const imgElement1 = document.getElementById("pokemonSpriteFront");
        const imgElement2 = document.getElementById("pokemonSpriteBack");

        imgElement1.src = pokemonSpriteFront;
        imgElement2.src = pokemonSpriteBack;
        imgElement1.style.display = "block";;
        imgElement2.style.display = "block"; 
    }
    catch(error){
        console.error(error);
    }
}