class Beehive{
    constructor(x,y,r){
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x,y,r,options);
        this.x =x;
        this.y = y;
        this.r = r;
        this.image = loadImage("beehive.png");
        World.add(world, this.body)
    }
    display(){

        var pointA = this.body.position.x;
        var pointB = this.body.position.y;
        imageMode(CENTER)
        image(this.image,pointA,pointB,50);

    }
}

