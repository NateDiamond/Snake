export class Piece {
  constructor(coordinates) {
    this.coordinates = coordinates
  }

  render(){
    throw new Error("Abstract function render must be overridden.")
  }
}