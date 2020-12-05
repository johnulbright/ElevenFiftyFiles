//scope
//remember: let keeps variables inside the curly brackets

// let x=12;

// function scope(){
//     let x=33;
//     console.log(x);
// }

// scope();
// console.log(x);

// let y=12;
// function scope(){
//     y=33;
//     console.log(y)
// }
// scope();
// console.log(y);

// var x=12;

// function varTest(){
//     var x=33;
//     if(true){
//         var x =45;
//         console.log(x);
//     }
//     console.log(x);
// }

// varTest();
// console.log(x);

let x=12;

function letText(){
    var x=33;
    if (true){
        let x=45;
        console.log(x);
    }
    console.log(x);
}

letText();
console.log(x);
