var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];
    
// We can console.log the `8` in this array if we
console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array

function isPresent2d(arr, value) {
    for (var i=0; i< arr.length; i++) {
        for (var n=0; n<arr[i].length; n++) {
            if(arr[i][n] == value){
                return true;
            }
        }
    }
    return false;
}
var p= isPresent2d(arr2d,7)
console.log(p)
var d=isPresent2d(arr2d, 9)
console.log(d)


// complete the following function
function flatten(arr2d) {
    var flat = [];
    for(i=0; i<arr2d.length; i++){
        for(var i2=0; i2<arr2d[i].length; i2++){
            flat.push(arr2d[i][i2]);
        }
    }
    return flat;
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

