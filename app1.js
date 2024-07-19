// for graphics 
// const ctx=canvs.getContext('2d');
// ctx.fillStyle='red';
// ctx.fillRect(10,10,100,400);

// for snake game
const canvas = document.querySelector('canvas');
const pen = canvas.getContext('2d');
pen.fillStyle='yellow';
// cs --> cell size
let cs = 67;
let H=735;
let W=1200;
let Score=0;
let init_len = 5;
let Food=null;
let cells = [];
const snake={
    direction:'right',

    createSnake: function(){
        for (let i = 0; i < init_len; i++) {
            cells.push({
                x:i,
                y:0
            })
        }
    },

DrawSnake:function(){
    for(let cell of cells){
        pen.fillRect(cell.x*cs,cell.y*cs,cs-1,cs-1)
    }
},
UpdateSnake:function(){
    let headX=cells[cells.length-1],x;
    let headY=cells[cells.length-1],Y;

    if(headX=cell[cells.length-1],x);

    let nextX,nextY;
    if(this.direction==='right')
    {
        nextX=headX+1;
        nextY=headY;
    }
    else if(this.direction==='left')
    {
        nextX=headX-1;
        nextY=headY;
    }
    else if(this.direction==='up')
    {
        nextX=headX;
        nextY=headY+1;
    }
    else{
        nextX=headX;
        nextY=headY-1
    }
}

 }

 function RandomFood()

 {
    let foodX=Math.round(Math.random()*(W-cs)/cs);
    let foodY=Math.round(Math.random()*(H-cs)/cs);

    food={
        x:foodX,
        y:foodY
    }
    return food;

 }

 function init()
 {
    snake.createSnake();
    let food=RandomFood();
    pen.fillStyle='red';
    pen.fillStyle(food.x*cs,food.y*cs,cs,cs);
    function keypressed(e)
    {
        if(e.key==="ArrowUp")
        {
            snake.direction="up";
        }
        else if(e.key==="ArrowDown")
        {
           snake.direction="down"
        }
        else if(e.key==="ArrowLeft")
        {
            snake.direction="left";
        }
        else
        {
            snake.direction="right";
        }
        console.log(snake.direction);
    }
    document.addEventListener('keydown',keypressed);
 }

 function draw()
 {
    pen.clearRect(0,0,W,H);
    pen.fillStyle='green';
    pen.fillText('score : ${Score}',100,100);
    pen.fillStyle='red';
    pen.fillRect(food.x*cs,food.y*cs,cs,cs);
    pen.fillStyle='yellow';
    snake.DrawSnake();
}


 function GameLoop()
 {
    draw();
    update();
 }

 init();
setInterval(GameLoop,500);


snake.createSnake();
snake.DrawSnake();

let f=RandomFood();
console.log(f);
pen.fillStyle='red';
pen.fillRect(f.x*cs,f.y*cs,cs,cs);