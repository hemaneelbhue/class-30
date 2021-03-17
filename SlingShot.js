class SlingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,stiffness:0.1,
            length:10

        }
        this.pointB=pointB
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
        this.sling=Constraint.create(options)
        World.add(world,this.sling);

    }
    fly(){
  this.sling.bodyA=null

    }
    display(){
        image(this.sling1,200,20)
        image(this.sling2,170,20)
        
        if(this.sling.bodyA){
            var pointA= this.sling.bodyA.position
            push()
            stroke(48,22,8)
        strokeWeight(7)
        if(pointA.x<220){
            line(pointA.x-20,pointA.y,this.pointB.x-10,this.pointB.y)
        line(pointA.x-20,pointA.y,this.pointB.x+30,this.pointB.y-3)
        image(this.sling3,pointA.x-30,pointA.y-10,15,30)
        }
        else{
            line(pointA.x+25,pointA.y,this.pointB.x-10,this.pointB.y)
            line(pointA.x+25,pointA.y,this.pointB.x+30,this.pointB.y-3)
            image(this.sling3,pointA.x+25,pointA.y-10,15,30)
        }
        
        pop()
        }
    }
}