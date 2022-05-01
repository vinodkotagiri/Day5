let returnPalindromes=(arr)=>{
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