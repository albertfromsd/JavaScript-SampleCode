let PersonC = class {
    constructor( name, id ) {
        this.name = name;
        this.id = id;
    }

    getDetails() {
        console.log( `${this.name}: ${this.id}` );
        return `${this.name}: ${this.id}`;
    }

    greet() {
        console.log( `Hello, ${this.name}!` );
        return `Hello, ${this.name}!`;
    }
}

let bob = new PersonC( 'Bob', 123 );
bob.getDetails();

//

let EmployeeC = class extends PersonC {
    constructor( name, id, salary ) {
        super( name, id );
        this.salary = salary;
    }

    getEmployeeInfo() {
        console.log( `${this.name}: ${this.id}: $${this.salary}` );
        return `${this.name}: ${this.id}: $${this.salary}`;
    }
}

let albert = new EmployeeC( 'Albert', 111, 250000 );
albert.getEmployeeInfo();
albert.getDetails();
albert.greet();