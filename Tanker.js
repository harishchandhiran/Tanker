//Creates the Tanker class.
class Tanker {
  //Creates the constructor.
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    }
      this.body = Bodies.rectangle(x, y , width, height, options);
      this.width = width;
      this.height = height;

      World.add(world,this.body);
    }

    display(){
      //Stores the position of the body inside a variable.
      var pos = this.body.position;
      var angle = this.body.angle;
      //Changes the colour of ground class into brown
      fill("red");
      //Draws a object in athe body's position.
      rectMode(CENTER);
      ellipseMode(RADIUS);
      rect(pos.x,pos.y,this.width,this.height);
      ellipse(pos.x-50,pos.y+50,75,75);
    }
}