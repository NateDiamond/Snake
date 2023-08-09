import {Board} from "./board.js"
import {Snake} from "./snake.js"
import {Fruit} from "./fruit.js"

export class Game {

  //board
  blockSize = 25;
  rows = 20;
  cols = 20;

  velocityX = 0;
  velocityY = 0;

  gameOver = false;
 
  constructor() {
    this.board = new Board(0,0,this.cols*this.blockSize, this.rows*this.blockSize, "blue", this.cols, this.rows)
    this.snake = new Snake(5*this.blockSize,5*this.blockSize,this.blockSize,this.blockSize, "rainbow")
    this.fruit = new Fruit(this.blockSize, this.blockSize, "white", this.board)

    this.canvas = document.getElementById("canvas");
    this.canvas.height = this.rows * this.blockSize;
    this.canvas.width = this.cols * this.blockSize;
    this.context = this.canvas.getContext("2d"); //used for drawing on the board

    document.addEventListener("keyup", Game.changeDirection(this));
  }

  run() {
    if (this.gameOver) {
        return;
    }

    this.board.render(this.context)
    this.fruit.render(this.context)

    if (this.snake.head().collides(this.fruit)) {
        this.snake.grow();
        this.fruit.shuffle()
    }

    this.snake.move(this.velocityX, this.velocityY)

    this.snake.render(this.context)


    //game over conditions
    if (this.snake.head().x < 0 || this.snake.head().x > this.board.width || this.snake.head().y < 0 || this.snake.head().y > this.board.height) {
        this.gameOver = true;
        alert("Game Over");
    }

    for (let i = 1; i < this.snake.pieces.length; i++) {
        if (this.snake.head().collides(this.snake.pieces[i])) {
            this.gameOver = true;
            alert("Game Over");
        }
    }
  }

  static changeDirection(game) {
    return function cD (e) {
      if (e.code == "ArrowUp" && game.velocityY != 1) {
        game.velocityX = 0;
        game.velocityY = -1;
      }
      else if (e.code == "ArrowDown" && game.velocityY != -1) {
        game.velocityX = 0;
        game.velocityY = 1;
      }
      else if (e.code == "ArrowLeft" && game.velocityX != 1) {
        game.velocityX = -1;
        game.velocityY = 0;
      }
      else if (e.code == "ArrowRight" && game.velocityX != -1) {
        game.velocityX = 1;
        game.velocityY = 0;
      }
    }
  }
  changeDirection(e) {
    
  }

}