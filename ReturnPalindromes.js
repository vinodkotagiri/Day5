// e.Return all the palindromes in an array

let returnPalindromes=function(arr){
    let resultArr=[];
    for(let item of arr)
        if(isPalindrome(item))
            resultArr.push(item);
    return resultArr;
}
function isPalindrome(input){
    input=input.toString().toLowerCase();
    return input==input.split('').reverse().join('');
}


let arr=['Madam','1221','1222','1223','1224','1225','12','121'];
console.log(returnPalindromes(arr));
//Using IIFE
(function(arr){
    let resultArr=[];
    for(let item of arr)
        if((item)=>{
            input=input.toString().toLowerCase();
    return input==input.split('').reverse().join('')
        })
        if(isPalindrome(item))
            resultArr.push(item);
    console.log(resultArr);
})(arr);

