import Character from "./domain";

class Game {
  start() {
    console.log("game started");
  }
}

class GameSavingData {
}

function readGameSaving() {
}

function writeGameSaving() {
}

export { 
    Game, 
    GameSavingData, 
    readGameSaving as loadGame, 
    writeGameSaving as saveGame 
};