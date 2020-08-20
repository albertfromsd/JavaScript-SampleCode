// [ CSS styling ] to browser console by adding %c
// second argument is CSS styling
console.log( '%c My CSS console', 'color: skyblue;' );


// consolidating multiple variables to a single clog
const obj1 = {
   name: 'a',
   address: 'asdf',
};
const obj2 = {
   name: 'b',
   number: '222',
};
const obj3 = {
   name: 'c',
   address: 'csdf',
};
const objArray = [ obj1, obj2, obj3 ];

console.log( { obj1, obj2, obj3} );
console.table( { obj1, obj2, obj3} );
console.table( objArray );


// [ console.time ]
// arguments of .time and .timeEnd should match
console.time('looper');

let i=0;
while( i < 1000000 ) i++;

console.timeEnd('looper');


// [ console.trace ]
// will tell you where the function was called: referred to by filename and line number
const deleteMe = () => console.trace('Trace Deletion');
deleteMe();

