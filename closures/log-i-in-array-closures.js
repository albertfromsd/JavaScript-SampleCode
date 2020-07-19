
//////////////////////////////////////////////////////////////////
// this version does not take advantage of closures 
// and will console.log i within its global execution context
// GCE is when the function is invoked

function cLog1() {
    let arr = [];

    for( var i=0; i<3; i++ ) {
        arr.push( 
            function() {
                console.log( i )
            }
        );
    }

    return arr;
}

var cL1 = cLog1();

// below returns 3, 3, 3 because at time of invokation,
// i is = 3 bc of the var delcaration
// can be fixed without closures by using let i=0 in for-loop
cL1[0]();
cL1[1]();
cL1[2]();
//////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////
// version below takes advantage of closures and IIFE to preserve the value of i 
// at the time the function is pushed into the array

function cLog2() {
    let arr = [];

    for( var i=0; i<3; i++ ) {
        arr.push( 
            (function(j) {
                return function() {
                    console.log( j )
                }
            }(i) ));
    }

    return arr;
}

var cL2 = cLog2();

// logs 0, 1, 2 as originally desired
cL2[0]();
cL2[1]();
cL2[2]();
//////////////////////////////////////////////////////////////////