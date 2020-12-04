class paperball{
    constructor(x,y,r)
    {
        var options={

        isStatic:false,
        restitution:0.3,
        friction:0,
        density:1.2,
    }

    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(x,y,r,options)

    World.add(myworld,this.body);
}

    display()
    {
        var pos= this.body.position;
        push() 
        translate(pos.x,pos.y);
       // rectMode(CENTER);
      // ImageMode(CENTER);
        ellipseMode(RADIUS);
       // Image(this.image,0,0,this.r*2,this.r*2);
        fill("WHITE");
        ellipse(0,0,this.r,this.r);
        pop()

    }
}


