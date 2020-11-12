class Player{
    constructor(board){
        this.board = board;
        this.head_cord = new p5.Vector(2,2)
        this.body_cords = [new p5.Vector(2,3)];
        this.vel = new p5.Vector(0,1);
        this.nextvel = new p5.Vector(0,1);
    }
    move(){
        this.vel = this.nextvel
        this.body_cords.splice(0, 0, new p5.Vector(this.head_cord.x,this.head_cord.y));
        this.body_cords.pop();
        this.head_cord.add(this.vel);
    }
    draw(){
        this.board.drawSquare([this.head_cord.x,this.head_cord.y],[255,0,0])
        for (let cord of this.body_cords){
            this.board.drawSquare([cord.x,cord.y],[190,0,0])
        }
        
    }
    addLength(){
        this.body_cords.push(this.body_cords[this.body_cords.length-1])
    }
    CollisionWithWall(){
        if (this.head_cord.x >= this.board.ArrayX){
            this.head_cord.x-1
            return true;
        }
        if (this.head_cord.x < 0){
            this.head_cord.x+1
            return true;
        }
        if (this.head_cord.y >= this.board.ArrayY){
            this.head_cord.y-1
            return true;
        }
        if (this.head_cord.y < 0){
            this.head_cord.y+1
            return true;
        }
        return false
    }
    CollisionWithBody(){
        for (let body_piece of this.body_cords){
            if (body_piece.equals(this.head_cord)){
                return true;
            }
        }
        return false
    }
}