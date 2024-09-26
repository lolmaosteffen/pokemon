function caughtPokemonView() {
    app.innerHTML = /*HTML*/`
    <div class="caughtContainer">
    <h1>Du fanget ${player.Pokemon[player.Pokemon.length - 1].name}</h1>
      <div class="buttonContainer">
                <button onclick="updateView()">Finn en annen</button>
                <button onclick="showPokemon()">Vis dine pokemon</button>
            </div>
    </div>
    `;
}

function catchPokemon() {
    player.Pokemon.push(randomPokemon);
    caughtPokemonView();
    console.log(player.Pokemon)
}

function showPokemon() {
    let pokemonList = player.Pokemon.map(pokemon => `
        <div class="pokemonItem">
            <div>${pokemon.name}</div>
            <div>Level: ${pokemon.level}</div>
            <img src="${pokemon.image}" alt="${pokemon.name}">
        </div>
    `).join("");
    app.innerHTML = /*HTML*/`
    <div class="pokemonContainer">
        ${pokemonList.length > 0 ? pokemonList : '<div>You haven\'t caught any Pokémon yet.</div>'}
    </div>
    <button onclick="updateView()">Back</button>
`;
}

function getRandomPokemon() {
    let randomNum = Math.floor(Math.random() * possiblePokemon.length);
    randomPokemon = possiblePokemon[randomNum];
}