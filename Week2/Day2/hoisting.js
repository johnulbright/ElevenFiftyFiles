let name='John';
console.log(name);
b();

function b(){
    console.log('I have been hoisted!');
}

//variables DON'T get hoisted
//functions DO get hoisted