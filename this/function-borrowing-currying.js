/////////////////////////////////////////////////////////////
// [ TARGET OBJECT SETUP ]
/////////////////////////////////////////////////////////////

let johnDoe = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function() {
        let fullName = this.firstName + ' ' + this.lastName;
        
        console.log( fullName );
        return fullName;
    }
}

johnDoe.getFullName();
console.log( "-------------------------" );
let janeSmith = {
    firstName: 'Jane',
    lastName: 'Smith'
}
/////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////
//      [ FUNCTION BORROWING ]
/////////////////////////////////////////////////////////////
// using apply to 'borrow' a method inside another object
// using apply, janeSmith (below) will use a method that exists in JohnDoe
// all references to 'this' in that method will now refer to janeSmith
/////////////////////////////////////////////////////////////

johnDoe.getFullName.apply( janeSmith );
console.log( "-------------------------" );
/////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////
//      [ FUNCTION CURRYING ]
/////////////////////////////////////////////////////////////
// uses bind bc bind does not execute the function
// binding as below, sets permanent value(s) for the 
// original function when the copy is made
/////////////////////////////////////////////////////////////

function multiply(a, b) {
    console.log( a * b );
    console.log("-------------------------")
    return a * b;
}

// first parameter 'this' will always be a 2 in this copy of the function
let multiplyByTwo = multiply.bind( this, 2 ); 
// MIRROR EXAMPLE
// function multiplyByTwo(b) {
//     let a = 2;
//     return a * b;
// }

multiplyByTwo(6);

// DEEPER EXAMPLE of CURRYING
// permanently set first two arguments to 2 and 2
let multiplyTwoByTwo = multiply.bind( this, 2, 2 );

// no matter what argument you pass through multiplyTwoByTwo, 
// it will always use the previously set arguments
multiplyTwoByTwo(11);