import {Piece} from "./piece.js"

export class Board extends Piece {
  constructor(x, y, w, h, c, cols, rows) {
    super(x,y,w,h,c)
    this.cols = cols
    this.rows = rows
  }
}