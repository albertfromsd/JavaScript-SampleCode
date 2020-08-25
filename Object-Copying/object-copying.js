// [ DEEP COPY ]
// note nested arrays make this unsuitable for shallow copy
const matrix1 =[
   [1,2,3,4],
   [5,1,2,3],
   [9,5,1,2]
];

const matrix1Copy = JSON.parse( JSON.stringify(matrix1) );
matrix1Copy[0][0] = 'test';

console.log( '--------------------------------------' );
console.log( "matrix1: ", matrix1 );
console.log( "matrixCopy1: ", matrix1Copy );
console.log( '--------------------------------------' );

// [ SHALLOW COPY ]
// making changes to the copy past the first level will change the original
// shallow copies only make copies 1 level deep
// the deeper nested objects/arrays are then stored by reference
const matrix2 =[
   [1,2,3,4],
   [5,1,2,3],
   [9,5,1,2]
];

const matrix2Copy = [ ...matrix2 ];
matrix2Copy[0][0] = 'test';

console.log( "matrix2: ", matrix2 );
console.log( "matrix2Copy: ", matrix2Copy );
console.log( '--------------------------------------' );
