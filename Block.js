class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }     
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
this.Visibility=255
      World.add(world, this.body);
    }
      
      
    display(){
      
      if(this.body.speed<3){
        push();
        rectMode(CENTER)
      
        pop();
      }
  else{
  
    World.remove(world, this.body);
    push();
    this.Visibility=this.Visibility-5

  pop();
  }
    }
}