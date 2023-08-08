import { Game } from './game.js';

const game = new Game()


function main() {
  game.run()
}

window.onload = function() {
  setInterval(main, 1000/10); //100 milliseconds
}