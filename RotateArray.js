// h. Rotate an array by k times
let rotateArray =function(arr,k){
    let result=[];
    for(let i=0;i<arr.length;i++)
        result.push(0);
    for (let i=0;i<k;i++)
        result[i]=arr[arr.length-k+i];
    
    for(let i=k;i<arr.length;i++)
        result[i]=arr[i-k];
    return result;    
}
let arr=[1,2,3,4,5,6,7,8,9,10];
let k=3;
console.log(rotateArray(arr,k));

//USing IIFE

console.log((function(arr,k){
    let result=[];
    for(let i=0;i<arr.length;i++)
        result.push(0);
    for (let i=0;i<k;i++)
        result[i]=arr[arr.length-k+i];
    
    for(let i=k;i<arr.length;i++)
        result[i]=arr[i-k];
    return result;    
})(arr,k));