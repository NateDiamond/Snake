import { SnakePiece } from "./snakepiece.js"

const colorSpectrum = ["crimson", "orange", "yellow", "lime", "aqua", "darkorchid"]

export class Snake {
    constructor(x, y, w, h, c) {
        this.width = w
        this.height = h
        this.color = c
        this.pieces = [new SnakePiece(x, y, w, h, c)]
    }

    head() {
        return this.pieces[0]
    }

    grow() {
        this.head().color = "green"
        this.pieces.unshift(this.head().copy())
    }

    move(velocityX, velocityY) {
        var snakeHead = this.head()
        var newX = snakeHead.x + velocityX * this.width
        var newY = snakeHead.y + velocityY * this.height
        this.pieces.unshift(new SnakePiece(newX, newY, this.width, this.height, this.color))
        this.pieces.pop()
    }

    render(context) {
        for(let i = 0; i < this.pieces.length; i++) {
            // rainbow override
            if (this.color == "rainbow") {
                this.pieces[i].color = colorSpectrum[i%colorSpectrum.length]
            }
            this.pieces[i].render(context)
        }
    }
}