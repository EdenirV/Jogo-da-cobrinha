import { onSnake, expandSnake } from "./snake.js"
import {randomGridPosition} from "./grid.js"
// posição inicial da comida
let food = {
    x: 2,
    y: 8
}

//quantos quadrados a cobra vai aumentar
const expansion_rate = 1

export function update() {
    if (onSnake(food)) {
        expandSnake(expansion_rate)
        food = getRandomFood()
    }

}

// aqui está recebendo o valor incial da comida, que no caso é x:2 e y:8  e o css
export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridColumnStart = food.x
    foodElement.style.gridRowStart = food.y
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

// vai verificar a posição da comida(se é nula ou não e se não está no mesmo lugar que a cobra) e colocar em outro lugar no mapa
function getRandomFood() {
    let newFood
    while (newFood == null || onSnake(newFood)) {
        newFood = randomGridPosition()
    }
    return newFood
}