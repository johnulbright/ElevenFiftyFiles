/* Write a function to find the Max of three numbers */
//My solution:
let a=Math.random();
let b=Math.random();
let c=Math.random();

maxN=(n1,n2,n3)=>Math.max(n1,n2,n3);
console.log(a,b,c);
console.log(maxN(a,b,c));

//Instructor solution1:
function getMaxNum(n1,n2,n3){
    let result=n1;
    if(n2>result){
        result=n2;
    }
    if(n3>result){
        result=n3;
    }
    return result;
}
console.log(getMaxNum(a,b,c));
//Instructor solution2:
function getMaxNum2(n1,n2,n3){
    let test=[n1,n2,n3];
    let result=n1;
    for (num of test){
        if (num>result){
            result=num;
        }
    }
    return result;
}
console.log(getMaxNum2(a,b,c));
//Instructor solution3:
function getMaxNumFromArray(x){
    if(x&&x.length>0){
        let max=x[0];
        for (num of x){
            if (num>max){
                max=num;
            }
        }
        return max;
    }
}
console.log(getMaxNumFromArray([a,b,c]));

/* Write a function to sum all numbers in a array */

//my solution:
let arr1=[];
let arrayLength=6
for (i=0;i<arrayLength;i++){
    arr1.push(Math.random());
}
console.log(arr1);

arraySum=(anyArray)=>{
    let total=0;
    for (j=0;j<anyArray.length;j++){
        total=total+anyArray[j];
    }
    return total
}

console.log(arraySum(arr1));

//instructor solution1:
function sumList(arr){
    let total=0;
    for (num of arr){
        total+=num;
    }
    return total;
}
console.log(sumList([1,2,3,4,5]));

//instructor solution2:
function sumList2(arr){
    return arr.reduce((a,b)=>a+b,0)
}
console.log(sumList2([1,2,3,4,5,6]));

/* Write a function that reverses a string*/
let str1='Rivendell';

//my solution:
function reverser(anyString){
    let reversed='';
    for (letter of anyString){
        reversed=letter+reversed;
    }
    return reversed;
}
console.log(reverser(str1));

//instructor solution1:
function reverseString1(a){
    let result="";
    for (let i=a.length-1;i>=0;i--){
        result+=a[i];
    }
    return result;
}
console.log(reverseString1(str1));

//instructor solution2:
function reverseString2(a){
    let result=[];
    let length=a.length;
    for (let i=0;i<length;i++){
        result.push(a.charAt(length-i-1));
    }
    return result.join('');
}
console.log(reverseString2(str1));

//compact instructor solution:
function reverseString3(a){
    return a.split("").reverse().join("");
}
console.log(reverseString3(str1));

/* Write a function that takes a strings and counts the number
 of upper and lower case letters and console.logs them */
let str2="ThiS Is A FUnNy stRiNg"

//my solution:
function caseSorter(anyString){
    let lowerCount=0;
    let upperCount=0;
    let lowerCases=[];
    let upperCases=[];
    for (letter of anyString){
        if(letter==' '){}
        else if(letter===letter.toUpperCase()){
            upperCount++;
            upperCases.push(letter);
        } else{
            lowerCount++;
            lowerCases.push(letter);
        }
    }
    console.log(`${anyString} has ${lowerCount} lowercase letters (${lowerCases.toString()}) and ${upperCount} uppercase letters (${upperCases.toString()})`);
}
caseSorter(str2);

//instructor solution:
function stringCaseCounter(stringToCount){
    let uppers =0;
    let spaces =0;
    for (letter of stringToCount){
        if (letter ==letter.toUpperCase()){
            if(letter!=' '){
                uppers++;
            } else{
                spaces++;
            }
       }
    }
    console.log(`uppers: ${uppers}\nspaces: ${spaces}\nlowers: ${stringToCount.length-uppers-spaces}\n${stringToCount}`);
}
stringCaseCounter(str2);


/* Write a function that takes a list of numbers and returns a new list containing only the unique numbers */

let arr2=[3,1,4,1,5,9,2,6,5,3,5];

//my solution:
function unique(anyArray){
    let uniqueValues=[];
    for (index1 in anyArray){
        let uniqueCount=0;
        for(index2 in anyArray){
            if(anyArray[index2]==anyArray[index1]){
                uniqueCount++;
            }
        }
        if(uniqueCount==1){
            uniqueValues.push(anyArray[index1]);
        }
    }
    return uniqueValues;
}
console.log(`Unique digits of ${arr2} are: ${unique(arr2)}.`);

//instructor solution:
function findUniques(a){
    let result=[];
    for (num of a){
        let match=false;
        for(unum of result){
            if(num==unum){
                match=true;
            }
        }
        if(!match){
            result.push(num);
        }
    }
    return result;
}
console.log(findUniques(arr2));

//instructor solution2:
function findUniques2(a){
    return [...new Set(a)];
}

console.log(findUniques2(arr2));