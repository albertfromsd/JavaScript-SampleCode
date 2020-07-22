
// simple example
function a() { 
    this.newVariable = 'hello'; // gets attached to global window object as a variable
    console.log( this );
}

a(); // 'this' refers to the global window object
//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////
// a little deeper example with object that has a method inside another method
let c = {
    name: 'c object',
    log: function() {
        this.name = 'Updated c object name'; // 'this' references the object it is defined in, in this case
        console.log( this );

        let self = this; // redefine 'this' to save the reference when going deeper into nested objects/functions
        let setName = function( newName ) {
            self.name = newName;
        }
        setName( 'c object name updated again!' );
        console.log( self );
    }
}

c.log(); // 'this' becomes the object the method is sitting inside of
//////////////////////////////////////////////////////////////////////////