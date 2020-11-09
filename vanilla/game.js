class VanillaSnake{
    constructor(screensize,segment){
        this.screensize=screensize
        this.segment=segment;
        this.board = new Board(screensize,segment);
        this.snake = new Player(this.board);
        this.food = new Food(this.board,this.snake);
        this.points = 1
        this.GameOver = true
    }
    keyInput(keyCode){
        if (keyCode == LEFT_ARROW || keyCode == 65){
            this.snake.vel = new p5.Vector(-1,0)
        }
        if (keyCode == UP_ARROW || keyCode == 87){
            this.snake.vel = new p5.Vector(0,-1)
        }
        if (keyCode == RIGHT_ARROW || keyCode == 68){
            this.snake.vel = new p5.Vector(1,0)
        }
        if (keyCode == DOWN_ARROW || keyCode == 83){
            this.snake.vel = new p5.Vector(0,1)
        }
        if (keyCode == 32){
            if (this.GameOver){
                this.reset()
            }
        }
    }
    reset(){
        this.board = new Board(this.screensize,this.segment);
        this.snake = new Player(this.board);
        this.food = new Food(this.board,this.snake);
        this.button = new CButton(425,200,100,50,"Play Again")
        this.points = 1
        this.GameOver = false
    }
    update(){
        if (!this.GameOver){
            this.snake.move();
            if (this.snake.CollisionWithWall() || this.snake.CollisionWithBody()){
                this.GameOver = true
            }
            this.points += this.food.eaten();
        }
    }
    draw(){
        this.board.draw(); 
        this.snake.draw();
        this.food.draw();
        this.drawUI();
    }
    drawUI(){
        push();
        var length = (Math.log(this.points) * Math.LOG10E + 1 | 0);
        textSize((125*scale) - (length *25))
        textAlign(CENTER)
        text(this.points,this.screensize[0]+((width- this.screensize[0])/2),height/4)
        pop();
    }
}

