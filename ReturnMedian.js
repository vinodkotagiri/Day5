// f. Return median of two sorted arrays of the same size

let arr1=[1,2,3,4,5,6];
let arr2=[6,7,8,9,10,11];

let Median=function(arr1,arr2){
    let arr=arr1.concat(arr2).sort((a,b)=>a-b);
    if(arr.length%2==0) 
        return (arr[Math.floor(arr.length/2)-1]+arr[Math.floor(arr.length/2)])/2;
    return arr[Math.floor(arr.length/2)];
}


console.log(Median(arr1,arr2));

//Using IIFE
console.log(
    (function(arr1,arr2){
        let arr=arr1.concat(arr2).sort((a,b)=>a-b);
        if(arr.length%2==0) 
            return (arr[Math.floor(arr.length/2)-1]+arr[Math.floor(arr.length/2)])/2;
        return arr[Math.floor(arr.length/2)];
    })(arr1,arr2)
);