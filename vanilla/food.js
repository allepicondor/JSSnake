class Food{
    constructor(board,snake){
        this.board = board;
        this.snake = snake
        this.pos = new p5.Vector()
        this.spawn();
    }
    draw(){
        this.board.drawSquare([this.pos.x,this.pos.y],[0,255,0]);
    }
    spawn(){
        while(true){
            this.pos.x = int(random(0, this.board.ArrayX));
            this.pos.y = int(random(0, this.board.ArrayY));
            let good = true
            if (this.pos.equals(this.snake.head_cord)){
                good = false
            }
            for (let cord of this.snake.body_cords){
                if (this.pos.equals(cord)){
                    good = true;
                    break
                }
            }
            if (good){
                break
            }
        }

    }
    eaten(){
        if (this.snake.head_cord.equals(this.pos)){
            this.snake.addLength();
            this.spawn()
            return 1;
        }
        return 0;
    }
}