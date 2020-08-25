// for-in loops are generally for objects; 
// can use them for arrays, but will iterate over indices
// will also iterate over custom added members/methods

// for-of loops are generally for strings and arrays


let myMap = {
   uno: 1,
   dos: 2,
   tres: 3
};

const forInLoop1 = object => {
   for( const key in object ) {
      console.log( key, "=", object[key] );
   };
};
// forInLoop1( myMap );

// for-in loops when run on arrays iterate over index numbers
// second example show dangers of using for-in on arrays
let myArr = ["hello", "world"];

const forInLoopDanger = array => {
   for( const index in array ) {
      let temp = array[index];
      console.log( `${index}: ${temp}` );
   };
};
// forInLoopDanger( myArr );

// why not to use for-in over arrays
let myArr2 = [1, 2, 3, 4];
myArr2.test = () => console.log( 'myArr2.test method' );

const forInLoopDanger2 = array => {
   for( const index in array ) {
      let temp = array[index];
      // index iteration will go over custom added methods/members
      console.log( `${index}: ${temp}` );
   };
};
forInLoopDanger2( myArr2 );