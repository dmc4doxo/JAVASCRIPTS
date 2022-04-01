
function ExtendObject(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child; // would be set to Parent after above.
    };
    // Intermediat function enheretence.
    
    function Circle(radius, color){
    Shape.call(this, color); // Call the property 'color' of Shape into Circle.
    this.Circle=radius;
    };
    
    
    ExtendObject(Circle, Shape);
    
    Circle.prototype.draw = function(){
        console.log('Draw');
    };
    
    
    function Shape(color){  // Add color to Shape object
        this.color =color;
    }
    
    Shape.prototype.duplicate = function(){   // Method of Shape.
        console.log('Duplicate');
    }
    
     // Extend Circle with methods in Shape
    // Extend Circle with Shape -- Enheretence. 
    // Intermediat function enheretence.
    
    
    function Square(size){  // Create Squate constructor an extended it with Shape
     this.size =size;
    } ;
    
    
    
    ExtendObject(Square, Shape);  // Extend with Shape.
    
    
    const s = new Shape();
    const c = new Circle(1, 'red');
    // const sq = new Square(10);
    
    