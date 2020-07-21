function PersonF( firstName, lastName ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.greet = () => {
        console.log( 'Hello, ' + this.firstName + ' ' + this.lastName + '!' );
        return 'Hello, ' + this.firstName + ' ' + this.lastName + '!';
    }
}

PersonF.prototype.getFullName = function() {
    console.log( this.firstName + ' ' + this.lastName );
    return this.firstName + ' ' + this.lastName;
}

let john = new PersonF( 'John', 'Doe' );
// console.log( john );

john.greet();


// extends
let EmployeeF = function( firstName, lastName, id, salary ) {
    PersonF.call( this, firstName, lastName, id ); // first argument is always this
    this.id = id;
    this.salary = salary; // adding a third variable to this
}
// mimicking extends
Object.setPrototypeOf( EmployeeF, PersonF.prototype ) // two arguments, what is the object and prototype
EmployeeF.prototype.getEmployeeInfo = function() {
    console.log( `${this.firstName} ${this.lastName}: ${this.id}: ${this.salary}` );
    return `${this.firstName} ${this.lastName}: ${this.id}: ${this.salary}`;
}
let albert = new EmployeeF( 'Albert', 'Ahn', 11, 250000 );
console.log( albert );
albert.getEmployeeInfo();


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