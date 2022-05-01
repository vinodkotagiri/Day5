//a. Print odd numbers in an array
// using anonimous function
let PrintOdds=function(arr){
    let result=[];
    for(let i=0;i<arr.length;i++)
        if(arr[i]%2!=0)
            result.push(arr[i]);
    return result;
}
let arr=[1,2,3,4,5,6,7,8];
// using IIFE
(function(arr){
    let result=[];
    for(let i=0;i<arr.length;i++)
        if(arr[i]%2!=0)
            result.push(arr[i]);
    console.log (result);
})(arr);

console.log(PrintOdds(arr));