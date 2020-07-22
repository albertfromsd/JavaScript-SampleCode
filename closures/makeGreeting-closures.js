function makeGreeting( language ) {
    
    return function( firstName, lastName ) {
        // execution context of this function will look up the scope chain for language wherever it is called
        if( language === 'en' ) console.log( 'Hello,', firstName, lastName );
        if( language === 'es' ) console.log( "Hola,", firstName, lastName );
    }
}

// chaining the return function to display the greeting
console.log("makeGreeting chained:");
makeGreeting( 'es' )( 'Albert', 'Ahn' );
console.log("--------------------------");
//////////////////////////////////////



//////////////////////////////////////
// this creates separate execution contexts for both functions
// bc they are created in different spots in memory
// both greets have different closures for language variable
let greetEnglish = makeGreeting( 'en' );
let greetSpanish = makeGreeting( 'es' );


console.log( 'greetEnglish using closures:' )
greetEnglish( 'Albert', 'Ahn' );
console.log("--------------------------");

console.log( 'greetSpanish using closures:' )
greetSpanish( 'Albert', 'Ahn' );
console.log("--------------------------");