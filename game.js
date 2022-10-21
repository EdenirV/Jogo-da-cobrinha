import { update as updateSnake, draw as drawSnake, snake_speed, getSnakeHead, snakeIntersection } from "./snake.js"
import { update as updateFood, draw as drawFood } from "./food.js"
import { outside } from "./grid.js"
const gameBoard = document.getElementById('game-board')

let lastRenderTime = 0
let gameOver = false

requestAnimationFrame(main)

// nesse trecho do código está sendo o feito o cálculo da 
//velocidade do jogo e assim conseguir controlar a velocidade da cobra
function main(currentTime) {
    if (gameOver) {
        if (confirm('Você perdeu!')) {
            location = '/'
        }
        return
    }
    requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

    if (secondsSinceLastRender < 1 / snake_speed) return

    lastRenderTime = currentTime
    update()
    draw()
}


function update() {
    updateSnake()
    updateFood()
    death()
}

// as funções desse trecho do código estão vindo do arquivo "snake.js".
// essa função "draw" está desenhando a cobra na tela.
function draw() {
    gameBoard.innerHTML =""
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function death(){
    gameOver = outside(getSnakeHead()) || snakeIntersection()
}