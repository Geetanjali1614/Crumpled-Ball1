
class Paper{
    constructor(x,y, radius){
        var options = {
            isStatic: false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.radius = radius

        world.add(world, this.body);
    }
    display(){
        ellipseMode(RADIUS);

     fill('blue');

     circle(this.body.position.x, this.body.position.y,this.width, this.height);
    }
};