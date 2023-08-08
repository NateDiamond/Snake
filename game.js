export class Game {

  //board
  blockSize = 25;
  rows = 20;
  cols = 20;
  board;
  context; 

  velocityX = 0;
  velocityY = 0;

  snakeBody = [];

  //food
  foodX;
  foodY;

  gameOver = false;
 
  constructor() {
    //snake head
    this.snakeX = this.blockSize * 5;
    this.snakeY = this.blockSize * 5;

    this.board = document.getElementById("board");
    this.board.height = this.rows * this.blockSize;
    this.board.width = this.cols * this.blockSize;
    this.context = this.board.getContext("2d"); //used for drawing on the board
    this.context.fillStyle="black";

    this.placeFood();
    document.addEventListener("keyup", Game.changeDirection(this));
  }

  run() {
    if (this.gameOver) {
        return;
    }

    this.context.fillStyle="black";
    this.context.fillRect(0, 0, this.board.width, this.board.height);

    this.context.fillStyle="red";
    this.context.fillRect(this.foodX, this.foodY, this.blockSize, this.blockSize);

    if (this.snakeX == this.foodX && this.snakeY == this.foodY) {
        this.snakeBody.push([this.foodX, this.foodY]);
        this.placeFood();
    }

    for (let i = this.snakeBody.length-1; i > 0; i--) {
        this.snakeBody[i] = this.snakeBody[i-1];
    }
    if (this.snakeBody.length) {
        this.snakeBody[0] = [this.snakeX, this.snakeY];
    }

    this.context.fillStyle="lime";
    this.snakeX += this.velocityX * this.blockSize;
    this.snakeY += this.velocityY * this.blockSize;

    this.context.fillRect(this.snakeX, this.snakeY, this.blockSize, this.blockSize);
    for (let i = 0; i < this.snakeBody.length; i++) {
        this.context.fillRect(this.snakeBody[i][0], this.snakeBody[i][1], this.blockSize, this.blockSize);
    }

    //game over conditions
    if (this.snakeX < 0 || this.snakeX > this.cols*this.blockSize || this.snakeY < 0 || this.snakeY > this.rows*this.blockSize) {
        this.gameOver = true;
        alert("Game Over");
    }

    for (let i = 0; i < this.snakeBody.length; i++) {
        if (this.snakeX == this.snakeBody[i][0] && this.snakeY == this.snakeBody[i][1]) {
            this.gameOver = true;
            alert("Game Over");
        }
    }
  }

  static changeDirection(game) {
    return function cD (e) {
      if (e.code == "ArrowUp" && this.velocityY != 1) {
        game.velocityX = 0;
        game.velocityY = -1;
      }
      else if (e.code == "ArrowDown" && this.velocityY != -1) {
        game.velocityX = 0;
        game.velocityY = 1;
      }
      else if (e.code == "ArrowLeft" && this.velocityX != 1) {
        game.velocityX = -1;
        game.velocityY = 0;
      }
      else if (e.code == "ArrowRight" && this.velocityX != -1) {
        game.velocityX = 1;
        game.velocityY = 0;
      }
    }
  }
  changeDirection(e) {
    
  }

  placeFood() {
    //(0-1) * cols -> (0-19.9999) -> (0-19) * 25
    this.foodX = Math.floor(Math.random() * this.cols) * this.blockSize;
    this.foodY = Math.floor(Math.random() * this.rows) * this.blockSize;
  }
}