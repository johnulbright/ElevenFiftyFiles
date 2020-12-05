//NOTE! Fat arrow function (like below) don't get hoisted!

let conArrow=()=>console.log('this is concise');
conArrow();

let blockArrow=()=>{
    console.log('this is a block arrow function');
}
blockArrow();

let name1 = () => 'John'

let name2=()=>{
    return 'John';
}
console.log(name1());
console.log(name2());