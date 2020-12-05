let FB=35;

if(FB%15==0){
    console.log('Fizz Buzz');
} else if(FB%3==0){
    console.log('Fizz');
} else if (FB%5==0){
    console.log('Buzz');
} else{
    console.log(FB);
}




//My switch
switch(FB%3==0){
    case true:
        switch(FB%5==0){
            case true:
                console.log('Fizz Buzz');
                break;
            default:
                console.log('Fizz');
                break;
        }
        break;
    case false:
        switch(FB%5==0){
            case true:
                console.log('Buzz');
                break;
            default:
                console.log(FB);
                break;
        }
        break;
    default:
        console.log(FB);
}

//instructor switch
switch(true){
    case (FB%15==0):
        console.log('FizzBuzz');
        break;
    case (FB%3==0):
        console.log('Fizz');
        break;
    case (FB%5==0):
        console.log('Buzz');
        break;
    default:
        console.log(FB);
}

FB%15==0?console.log("Fizz Buzz"):
FB%3==0?console.log("Fizz"):
FB%5==0?console.log("Buzz"):
console.log(FB)

for (let i=0;i<=2000000;i++){
    i%15==0?console.log("Fizz Buzz"):
    i%3==0?console.log("Fizz"):
    i%5==0?console.log("Buzz"):
    console.log(i);
}