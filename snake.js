import { getInputDirection } from "./input.js"

export const snake_speed = 5

// posição inicial da cobra
const snakeBoby = [
    {
        x: 11,
        y: 11
    }]

// quantidade de segmentos adicionado a cobra
let newSegment = 0

export function update() {
    addSegment()

    const inputDirection = getInputDirection()

    for (let i = snakeBoby.length - 2; i >= 0; i--) {
        snakeBoby[i + 1] = { ...snakeBoby[i] }
    }
    // trecho referente a cabeça e controles
    // os controles estão sendo feitos no "input.js"
    snakeBoby[0].x += inputDirection.x
    snakeBoby[0].y += inputDirection.y

}

// código para a construção da cobra
export function draw(gameBoard) {
    snakeBoby.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.style.gridRowStart = segment.y
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}

// essa função é responsável pelo cresciemento da cobra adicionando um novo valor
export function expandSnake(amount) {
    newSegment += amount
}

// vai verificar a posição e comparar a posição da cobra, então se for verdadeira a função ativa
export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBoby.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return position.x === segment.x && position.y === segment.y
    })
}
export function addSegment() {
    for (let i = 0; i < newSegment; i++) {
        snakeBoby.push({ ...snakeBoby[snakeBoby.length - 1] })
    }
    newSegment = 0
}
export function getSnakeHead() {
    return snakeBoby[0]
}

export function snakeIntersection() {
    return onSnake(snakeBoby[0], {
        ignoreHead: true
    })
}