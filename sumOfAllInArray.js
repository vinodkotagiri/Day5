
// c. Sum of all numbers in an array
let SumOfNumbers=function(arr){
    return arr.reduce((a,b)=>a+b);
}

let arr=[1,2,3,4,5,6,7,8,9,10];
console.log(SumOfNumbers(arr));

//Using IIFE
((array)=>{
    console.log(array.reduce((a,b)=>a+b));
})(arr);