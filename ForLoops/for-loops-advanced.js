
const forLoop1 = () => {
   function isItDone(a) {
      console.log("fn called!");
      return a < 10;
   }
   
   // the stop condition can be a callback
   // return of function will get type forced into a boolean
   for(let a = 0; isItDone(a); a++) {
      console.log(a);
   };
};
// forLoop1();

const forLoop2 = () => {
   // note multiple variable control 
   // the console.log at each iteration progression
   // a and b values are changing as well as getting logged
   for(let a = 0, b = 0; a < 10 && b < 100; console.log("Your counters are at:", ++a, b+=2)){}

};
// forLoop2();

