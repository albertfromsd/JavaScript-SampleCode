function makeGreeting( language ) {
    
    return function( firstName, lastName ) {
        // execution context of this function will look up the scope chain for language wherever it is called
        if( language === 'en' ) console.log( 'Hello,', firstName, lastName );
        if( language === 'es' ) console.log( "Hola,", firstName, lastName );
    }
}

// chaining the return function to display the greeting
makeGreeting( 'es' )( 'Albert', 'Ahn' );


// this creates separate execution contexts for both functions
// bc they are created in different spots in memory
// both greets have different closures for language variable
let greetEnglish = makeGreeting( 'en' );
let greetSpanish = makeGreeting( 'es' );


greetEnglish( 'Albert', 'Ahn' );
greetSpanish( 'Albert', 'Ahn' );