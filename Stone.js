class Stone{
    constructor(x,y,width,height)
    {
        var options={
            restitution:0.8,
            friction:0.9,
            density:12
    }
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 150;
    this.height = 40;
    World.add(world, this.body);
    
        
    }
    display()
	{
            var stonepos=this.body.position;	
            var angle = this.body.angle;	
			push()
            translate(stonepos.x, stonepos.y);
            rotate(angle);
			rectMode(CENTER);
			strokeWeight(4);
			stroke("black");
			fill("red");
            rect(0,0,this.width, this.height);
			pop();
	}
}