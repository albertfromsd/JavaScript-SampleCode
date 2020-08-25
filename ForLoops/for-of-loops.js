let myArr = ["hello", "world"]

// destructuring two values from an array
const forOfLoop = arr => {
   for( [idx, value] of arr.entries() ) {
       console.log(idx, '=', value)
   };

   return;
};

const forOfLoop2 = arr => {
   // destructuring the first and second values of each iterable item
   for( [firstValue, secondValue] of arr ) {
      // logs the first two chars of the current string element from array
       console.log( {firstValue, secondValue} );
   };

   return;
};

forOfLoop2( myArr );