class CButton{
    constructor(x,y,width,height,text){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.text = text
    }
    mouseClicked(){
        if (mouseX < this.x + this.width & mouseX > this.x){
            if (mouseY > this.y & mouseY < this.y + this.height){
                console.log("CLICKED")
            }
        }
    }
    draw(){
        push();
        rect(this.x,this.y,this.width,this.height)
        textAlign(CENTER,CENTER)
        textSize(20)
        text(this.text,this.x + (this.width/2),this.y + (this.height/2))
        pop();
    }
}