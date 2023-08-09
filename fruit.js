import {Piece} from "./piece.js"

export class Fruit extends Piece {
  constructor(w, h, c, board) {
    super(0,0,w,h,c)
    this.board = board
    this.shuffle()
  }

  shuffle() {
    this.x = Math.floor(Math.random() * this.board.cols) * this.width;
    this.y = Math.floor(Math.random() * this.board.rows) * this.height;
  }

}