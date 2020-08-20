// [ NUMBERS ]
const arr1 = [1, 7, 3, 6, 8, 9, 11, 22, 31, 99];

// returns sorted by numberic value, i/o string value
const arr1s = arr1.sort( (a, b) => a-b );


// [ STRINGS ]
const arr2 = [ 'george', 'George', '1hg7', 'apple', 'brian', 'Brian','zebra', '!', '.' ];

// case-sensitivity has priority over letter index
const arr2s = arr2.sort();

// letter index has priority over case sensitivity 
const arr2c = arr2.sort( (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()) )


// console.log( arr1s );
// console.log( arr2s );
console.log( arr2c );

