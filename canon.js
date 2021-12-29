class Canon
{

    constructor(a,b,c,d,angle)
    {
        this.x=a
        this.y=b
        this.width=c
        this.height=d

    this.angle=angle
    this.canonImage=loadImage("assets/canon.png")
    this.canonBaseImage=loadImage("assets/cannonBase.png")
    }
    display(){
        //creating the top canon
        push()
        translate(this.x,this.y)
        rotate(this.angle)
        imageMode(CENTER)
        image(this.canonImage,this.x,this.y,this.width,this.height)
        pop()
        //code to create the bottom canon
        image(this.canonBaseImage,70,20,200,200)
        noFill()
    }
}