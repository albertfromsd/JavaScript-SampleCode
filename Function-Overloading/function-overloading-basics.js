function makeGreeting( language ) {
    
    return function( firstName, lastName ) {
        if( language === 'en' ) console.log( 'Hello,', firstName, lastName );
        if( language === 'es' ) console.log( "Hola,", firstName, lastName );
    }
}


console.log("makeGreeting chained:");
makeGreeting( 'es' )( 'Albert', 'Ahn' );
console.log("--------------------------");
//////////////////////////////////////



//////////////////////////////////////

let greetEnglish = makeGreeting( 'en' );
let greetSpanish = makeGreeting( 'es' );


console.log( '-----[ greetEnglish using closures ]-----' )
greetEnglish( 'Albert', 'Ahn' );
console.log("--------------------------");

console.log( '-----[ greetSpanish using closures ]-----' )
greetSpanish( 'Albert', 'Ahn' );
console.log("--------------------------");