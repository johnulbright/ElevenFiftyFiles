function reverseString(inputString){
//                      (1)        (2)       (3)
    return inputString.split("").reverse().join("");
}
//1: Turns it into an array: ["J","o","h","n"]
//2: reverses it: ["n","h","o","J"]
//3: Turns it back into a string:"nhoJ"

let reversedString=reverseString('John');
//console.log(reversedString);

/*

function reverseString2(inputString){
    let rev=inputString;
    rev=rev.split("");
    rev=rev.reverse();
    rev=rev.join("");
    return rev;
}

let reversedString2=reverseString2('John');
console.log(reversedString2);
*/

//Adapter pattern
let wordArr=['John','is','making','a','pattern'];

function arrayToString(a){
    return a.join('');
}
//console.log(reverseString(arrayToString(wordArr)));

function apply(func,data){
    return func(data);
}
let result=apply(arrayToString,wordArr)
console.log(result);

console.log(apply((x)=>x*x,3));

let johnApply=apply;
johnApply(console.log,"Check out this console.log callback!");

console.log(apply(x=>x*5,4));

//Recursion
function printOne(arr){
    if (arr.length>0){
        console.log(arr[0]);
        printOne(arr.slice(1));
    }
}

printOne(wordArr);