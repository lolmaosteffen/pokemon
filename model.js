let app = document.getElementById("app");

let pikachuName = "Pikachu"

let pikachu = {
    name: "Pikachu",
    health: 45,
    image: "Images/pikachu.png",
    level: 8,
};

let bulbasaur = {
    name: "Bulbasaur",
    health: 70,
    image: "Images/bulbasaur.png",
    level: 12,
};

let oranguru = {
    name: "Oranguru",
    health: 170,
    image: "Images/oranguru.png",
    level: 45,
};

let drowzee = {
    name: "Drowzee",
    health: 90,
    image: "Images/drowzee.png",
    level: 33,
};

let possiblePokemon = [pikachu, bulbasaur, oranguru, drowzee];
let randomPokemon = null;

let player = {
    name: "bjarne",
    image: "/Images/pokemonTrainerIdle.png",
    playerPokemon: [],
}
// let playerName = "Bjarne";
// let playerImage = "/Images/pokemonTrainerIdle.png";
// let playerPokemon = [];
