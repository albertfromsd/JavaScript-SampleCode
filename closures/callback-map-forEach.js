function mapForEach( arr, fn ) {
    
    let newArr = [];
    for( let i=0; i<arr.length; i++ ) {
        newArr.push(
            fn( arr[i] )
        );
    }

    return newArr;
}

let arr1 = [1, 2, 3];

let arr2 = mapForEach( arr1, function( item ) {
    return item*2;
});

console.log( arr2 );