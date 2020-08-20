function greet( firstName, lastName, language ) {

    language = language || 'en';

    if( arguments.length < 3 ) {
        console.log("------[ ERROR ]-------");
        console.log( "Missing at least one of the three required parameters");
        console.log("----------------------");
        return;
    }

    console.log( firstName );
    console.log( lastName );
    console.log( language );
    console.log( arguments );
    console.log( '---------------------------' );

}


greet();
greet( 'John' );
greet( 'John', 'Doe' );
greet( 'John', 'Doe', 'es');