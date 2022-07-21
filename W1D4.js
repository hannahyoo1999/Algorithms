var x = 5; //Set variable x as 5
    
function setX(newValue) { 
    x = newValue; //Set variable x as variable newValue
}
    
console.log(x); //output: 5
setX(15); //Set variable x as 15
console.log(x); //output: 15


var x = 5; //Set variable x as 5
    
function addToX(amount) {
    return x + amount; //sending value back to result and ends function
    console.log("hello there");
}
    
console.log(x); //output:5
var result = addToX(-10); //Set variable result as x+amount
console.log(result); //output: -5
console.log(x); //output: 5


function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        var right = arr.length-1-left;
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] ); //for arr[1] != arr[3]; second time throughloop
console.log(result1); //Output: Not a pal-indrome
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] ); //for all arr[left]=arr[right]
console.log(result2); //output: Pal-indrome