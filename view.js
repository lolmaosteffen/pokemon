updateView();
function updateView() {
    getRandomPokemon()
    app.innerHTML = /*HTML*/ `
    <div class="container">
      <div class="opposingPokemon">
          <div>${randomPokemon.name}</div> 
          <div>lvl: ${randomPokemon.level}</div>
          <img src="${randomPokemon.image}">
      </div>
      
      <div class="bottomScreen">
          <div class="player">
              <img src="${player.image}">
              <div>${player.name}</div>
          </div>
  
          <div class="buttonContainer">
              <button onclick="catchPokemon()">Fang</button>    
              <button onclick="updateView()">Finn en annen</button>
              <button onclick="showPokemon()">Vis dine pokemon</button>       
          </div>
  
      </div>
    </div>
    `;
}