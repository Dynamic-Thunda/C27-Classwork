class Chain {

    constructor(bodyA, bodyB){
        var options = {
            //Body A and Body B are the two bodies to be attached
        bodyA: bodyA,
        bodyB: bodyB,
        //Length is the distance between the two bodies when stationary/static
        length: 10,
        //How stiff or flimsy the bond between two bodies are
        stiffness: 0.04
        }
        //Creation of General Chain Object from the Constraint Class 
        this.chain = Constraint.create (options)
        //Object and it's world were added to the Matter.World class
        World.add(world, this.chain)
    
    }

    display(){
        //Namespaced positions of Body A and Body B 
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position
        //Push and Pop used to stop the changes from leaking into other classes
        push();
        //Strokeweight is the thickness of the line
        strokeWeight (6)
        //line (x1, y1, x2, y2)
        line (pointA.x, pointA.y, pointB.x, pointB.y)
        pop();
    }


}