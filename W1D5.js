var fruit1 = "apples";
var fruit2 = "oranges";
    
fruit2 = fruit1; //fruit1 (apples) gets assigned to fruit2
    
console.log(fruit2 + " and " + fruit1); //output: apples and apples


var fruit1 = "apples";
var fruit2 = "oranges";
    
var temp = fruit1; // temp is a common name for this
fruit1 = fruit2; //fruit2(oranges) gets assigned to fruit1
fruit2 = temp; //temp is apples
    
console.log(fruit2 + " and " + fruit1); //output: apples and oranges


var start = 0; 
var end = 12;
    
while(start < end) { 
    console.log("start: " + start + ", end: " + end); // output: start: 0, end: 12; start: 2, end: 10; start: 4, end; 8
    start += 2; //start=2,4,6
    end -= 2; //end=10,8,6
}

// //Write a function reverse(arr) to reverse an array
var arr =["a","b","c","d","e"];

for(var i=0; i<arr.length/2; i++) {
    var temp= arr[i];
    arr[i]=arr[arr.length-1-i];
    arr[arr.length-1-i]=temp;
}
console.log(arr)
//i=OR
for(var i=0; i<arr.length/2; i++) {
    [arr[i], arr[arr.length-1-i]] = [arr[arr.length-1-i], arr[i]]; //gets rid of temp
}
console.log (arr)





