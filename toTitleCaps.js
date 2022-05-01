//b. Convert all the strings to title caps in a string array
let titleCase=function(str){
    return str.toLowerCase().split(' ').map(function(word){
        return (word.charAt(0).toUpperCase()+word.slice(1));
    }).join(' ');
}
let StringsToTitle=(arr)=>{
    let resultArr=[];
    for(let str of arr){
        resultArr.push(titleCase((str)));
    }
    return resultArr;
}
let arr=['Hello','how','are','you','doing?'];
console.log(StringsToTitle(arr));

//Using IIFE

(function(arr){
    let resultArr=[];
    for(let str of arr){
        resultArr.push(titleCase((str)=>{
        return str.toLowerCase().split(' ').map(function(word){
            return (word.charAt(0).toUpperCase()+word.slice(1));
        }).join(' ')
    }))
    }
    console.log(resultArr);

}
)(arr);