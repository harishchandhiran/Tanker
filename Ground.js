//Creates the Ground class.
class Ground {
  //Creates the constructor.
  constructor(x, y, width, height) {
    //Creates the options.
    var options = {
      //Makes the Ground static.
      isStatic : true
    }
    //Creates the bodies.
    this.body = Bodies.rectangle(x, y, width, height,options);
    this.width = width;
    this.height = height;

    //Adds the bodies to the World.
    World.add(world,this.body);
  }

  display(){
    //Stores the position of the body inside a variable.
    var pos = this.body.position;
    //Changes the colour of ground class into brown
    fill("brown");
    //Draws a object in athe body's position.
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
  }
}
