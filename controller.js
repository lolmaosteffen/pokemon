const app = document.getElementById("app");
function caughtPokemonView() {
    app.innerHTML = /*HTML*/`
    <div class="caughtContainer">
      <h1>Du fanget ${playerPokemon[playerPokemon.length - 1].name}</h1>
      <div class="buttonContainer">
                <button onclick="updateView()">Finn en annen</button>
                <button onclick="showPokemon()">Vis dine pokemon</button>
            </div>
    </div>
    `;
}

function catchPokemon() {
    playerPokemon.push(randomPokemon);
    caughtPokemonView();
}

function showPokemon() {
    app.innerHTML = /*HTML*/`
    
    <div>${playerPokemon}</div>
    
    
    `;
    console.log(playerPokemon);
}

function getRandomPokemon() {
    let randomNum = Math.floor(Math.random() * possiblePokemon.length);
    randomPokemon = possiblePokemon[randomNum];
}