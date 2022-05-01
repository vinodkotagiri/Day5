// d. Return all the prime numbers in an array
let returnPrimes=function(arr){
    let resultArr=[];
    for(let number of arr)
        if(isPrime(number))
            resultArr.push(number);
    return resultArr;
}
function isPrime(n){
    if(n===1) return false;
    if(n===2 || n===3) return true;
    if(n%2===0 || n%3===0) return false;
    for(let i=5;i*i<=n;i+=6)
        if(n%i===0 || n%(i+2)==0) return false;
    return true;
}

let arr=[12,23,16,13,7,4,15,9,3,2,18,27,19];
console.log(returnPrimes(arr));

//Using IIFE
((arr)=>{
    let resultArr=[];
    for(let number of arr)
        if((number)=>
        {
            if(n===1) return false;
            if(n===2 || n===3) return true;
            if(n%2===0 || n%3===0) return false;
            for(let i=5;i*i<=n;i+=6)
                if(n%i===0 || n%(i+2)==0) return false;
            return true;
        })
        if(isPrime(number))
            resultArr.push(number);
    console.log(resultArr);
})(arr);