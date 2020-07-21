// each variable lives within its scope
// bc function b is defined in the global scope, it looks for the value of myVar there, which is its outer reference

// function a() {
//     var myVar = 2;
//     console.log(myVar);
//     b();
// }

// function b() {
//     // where a function sits lexically affects the outer environment reference
//     // because function b was physically written on the global level
//     // if function b was defined inside function a, its outer reference would be a()
//     console.log(myVar); // logs myVar = 1
// }

// var myVar = 1;
// a();

//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////

function a() {

    function b() {
        // because function b is defined inside the scope of function a,
        // the outer reference to myVar is in the next highest scope/lexical environment
        console.log(myVar); // logs myVar = 2
    }

    var myVar = 2;
    b();
}

var myVar = 1;
a();