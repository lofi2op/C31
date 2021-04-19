class Bird extends BaseClass {
  constructor(x, y) {
    super(x, y, 50, 50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");

    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();

    // console.log(this.body.position.x);
    // console.log(this.body.velocity.x);

    if (this.body.velocity.x > 1 && this.body.position.x > 200) {
      var position = [this.body.position.x, this.body.position.y]
      this.trajectory.push(position);

    }

    for (var i = 0; i < this.trajectory.length; i++) {
      image(this.smoke, this.trajectory[i][0], this.trajectory[i][1])
    }




  }
}


//  for ( var i = 0; i< this.trajectory.length; i++)
// // for (initilisation; condition; inc/dec)
// this.trajectpry = [ [200,50] , [100,82], [84,25], [] .........]

// //x
//  this.trajectory[i][0];  //200

//  //y
//  this.trajectory[i][1];  //50


// var position = [this.body.position.x,this.body.position.y]



// this.trajectory.push(position);
