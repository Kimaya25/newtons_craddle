class rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA : bodyA,
            bodyB:  bodyB,
           pointB : {x: this.offsetX , y: this.offsetY}
        }
        this.body = Constraint.create(options);
        World.add(world,this.body);

    }
    display(){
        var pointA = this.body.bodyA.position; 
        var pointB = this.body.bodyB.position; 
        strokeWeight(2); 
        var Anchor1 = pointA.x; 
        var Anchor2 = pointA.y; 
        var Anchor3 = pointB.x + this.offsetX; 
        var Anchor4 = pointB.y + this.offsetY; 
        line (Anchor1,Anchor2,Anchor3,Anchor4); 
    } 


    }
