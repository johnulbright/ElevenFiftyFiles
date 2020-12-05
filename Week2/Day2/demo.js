//Solve for fizzbuzz
//make it dynamic

//write to solve for 1-100
;


function solve(limit,F,B){
    for (let i=1;i<=limit;i++){
        if(i%F==0&&i%B==0){
            console.log('FizzBuzz');
        } else if (i%B==0){
            console.log('Buzz');
        } else if(i%F==0){
            console.log('Fizz');
        } else{
        console.log(i);
        }
    }    
}





solve(30,4,6);