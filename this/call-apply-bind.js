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
// [ BIND ] 
// bind() - one line bind for later invocations
// creates a copy of the original function but with a new binded 'this' reference
/////////////////////////////////////////////////////////////

let logName = function( lang1, lang2 ) {
    console.log( 'Logged: ' + this.getFullName() );
}

let logPersonName = logName.bind( johnDoe ); //

logPersonName();
console.log( "-------------------------" );
/////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////
// [ CALL ]
// call() - immediately invoke
// parameters: 'this' target just like bind
// second parameter: arguments for the original function
/////////////////////////////////////////////////////////////

logName.call( johnDoe, 'eng', 'esp' );
console.log( "-------------------------" );
/////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// [ APPLY ]
// apply() - immediately invoke
// parameters: 'this' target just like bind
// second parameter: accepts and ARRAY of arguments for the original function
/////////////////////////////////////////////////////////////

logName.apply( johnDoe, ['eng', 'esp'] );
console.log( "-------------------------" );
/////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////
// [ IIFE with CALL/APPLY ]
// function statements to immediately invoke with call/apply
/////////////////////////////////////////////////////////////

( function( lang1, lang2 ) {
    console.log("Immediately invoked function using call/apply");
    console.log("Arguments: " + lang1, lang2);
}).apply( johnDoe, ['eng', 'esp'] );
/////////////////////////////////////////////////////////////

