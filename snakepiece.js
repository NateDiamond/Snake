import {Piece} from "./piece.js"

export class SnakePiece extends Piece {
  copy() {
    return new SnakePiece(this.x,this.y,this.width,this.height,this.color)
  }
}