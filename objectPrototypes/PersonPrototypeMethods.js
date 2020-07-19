function Person( firstName, lastName ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.greet = () => {
        console.log( 'Hello, ' + this.firstName + ' ' + this.lastName + '!' );
        return 'Hello, ' + this.firstName + ' ' + this.lastName + '!';
    }
}

Person.prototype.getFullName = function() {
    console.log( this.firstName + ' ' + this.lastName );
    return this.firstName + ' ' + this.lastName;
}

let john = new Person( 'John', 'Doe' );
// console.log( john );

john.greet();



///////////////////////////////////////////////////////////////////////
////   POLYFILL - if older browsers do not support Object.create   ////
///////////////////////////////////////////////////////////////////////

// if( !Object.create) {
//     Object.create = function(obj) {
//         if( arguments.length > 1 ) {
//             throw new Error('Object.create implementation only accepts the first parameter');
//         }
//         function F() {}
//         F.prototype = obj;
//         return new F();
//     }
// }

// let person = {
//     firstName: 'Default',
//     lastName: 'Default',
//     greet: function() {
//         return ('Hi' + ' ' + this.firstName);
//     }
// }

// let john = Object.create(person);
// john.firstName = 'John';
// john.lastName = 'Doe';
// console.log( john.greet() );