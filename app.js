const canvas = document.getElementById('gameCanvas');
const pen = canvas.getContext('2d');

const cs = 67;
const rows = canvas.height / cs;
const cols = canvas.width / cs;

let snake;
let food;
let gameLoop;

function init() {
    snake = {
        body: [],
        direction: 'right',
        initLength: 5,

        createSnake: function() {
            for (let i = this.initLength; i > 0; i--) {
                this.body.push({ x: i, y: 0 });
            }
        },

        drawSnake: function() {
            pen.fillStyle = 'yellow';
            for (let i = 0; i < this.body.length; i++) {
                pen.fillRect(this.body[i].x * cs, this.body[i].y * cs, cs, cs);
                pen.strokeRect(this.body[i].x * cs, this.body[i].y * cs, cs, cs);
            }
        },

        updateSnake: function() {
            let headX = this.body[0].x;
            let headY = this.body[0].y;

            if (this.direction === 'right') headX++;
            else if (this.direction === 'left') headX--;
            else if (this.direction === 'down') headY++;
            else if (this.direction === 'up') headY--;

            this.body.pop();
            this.body.unshift({ x: headX, y: headY });

            if (headX === food.x && headY === food.y) {
                food = getRandomFood();
                this.body.push({});
            }
        }
    };

    snake.createSnake();
    food = getRandomFood();

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' && snake.direction !== 'left') snake.direction = 'right';
        else if (e.key === 'ArrowLeft' && snake.direction !== 'right') snake.direction = 'left';
        else if (e.key === 'ArrowDown' && snake.direction !== 'up') snake.direction = 'down';
        else if (e.key === 'ArrowUp' && snake.direction !== 'down') snake.direction = 'up';
    });

    gameLoop = setInterval(gameEngine, 100);
}

function drawFood() {
    pen.fillStyle = 'red';
    pen.fillRect(food.x * cs, food.y * cs, cs, cs);
    pen.strokeRect(food.x * cs, food.y * cs, cs, cs);
}

function getRandomFood() {
    const foodX = Math.floor(Math.random() * cols);
    const foodY = Math.floor(Math.random() * rows);

    return { x: foodX, y: foodY };
}

function gameEngine() {
    pen.clearRect(0, 0, canvas.width, canvas.height);
    snake.updateSnake();
    snake.drawSnake();
    drawFood();

    if (checkCollision()) {
        clearInterval(gameLoop);
        alert("Game Over");
    }
}

function checkCollision() {
    let headX = snake.body[0].x;
    let headY = snake.body[0].y;

    if (headX < 0 || headX >= cols || headY < 0 || headY >= rows) return true;

    for (let i = 1; i < snake.body.length; i++) {
        if (headX === snake.body[i].x && headY === snake.body[i].y) return true;
    }

    return false;
}

init();
