const box = document.getElementById('box');
let snake = [0, 1, 2]

const size = 20;
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    const div = document.createElement('div')
    box.appendChild(div)
  }
}

const divs = document.querySelectorAll('#box div');
snake.forEach((index) => divs[index].classList.add('snake'))

let direction = 1;
setInterval(() => {
  moveSnake(direction)
}, 500)

function moveSnake(direction) {
  const tail = snake.shift()
  divs[tail].classList.remove('snake')
  const head = snake[snake.length - 1] + direction
  snake.push(head)
  divs[head].classList.add('snake')
}

window.addEventListener("keydown", (event) => {
  console.log(event)
  if (event.key === 'ArrowDown') {
    direction = 20
  }
  if (event.key === 'ArrowLeft') {
    direction = -1
  }
  if (event.key === 'ArrowUp') {
    direction = -20
  }
  if (event.key === 'ArrowRight') {
    direction = 1
  }
});