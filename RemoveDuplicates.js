// g. Remove duplicates from an array

let removeDuplicates = function(arr){
    result=[];
    for(let item of arr){
        if(!result.includes(item))
        result.push(item);
    }
    return result;
}

let arr=[1,2,4,3,5,2,1,5,4,6,7,5,7,6,5,1,2];
console.log(removeDuplicates(arr));

((arr)=>{
    result=[];
    for(let item of arr){
        if(!result.includes(item))
        result.push(item);
    }
    console.log(result); 
})(arr);