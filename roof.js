class roof{
    constructor(x,y){
          var options = {
              isStatic : true
          }
          this.body = Bodies.rectangle(x,y,600,50,options);
          this.width = 600;
          this.height = 50;
          World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("white");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}