export class Piece {
  constructor(x, y, w, h, c) {
    this.x = x
    this.y = y
    this.width = w
    this.height = h
    this.color = c
  }

  collides(piece){
    return this.x == piece.x && this.y == piece.y
  }

  render(context){
    context.fillStyle = this.color
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}