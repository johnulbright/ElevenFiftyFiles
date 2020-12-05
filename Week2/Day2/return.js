function greeter(first,last,isReturned){
    let fullName=first+" "+last;
    console.log(`Hello my name is ${fullName}!`);
    if(isReturned){
        return fullName;
    }
    console.log('You did not return full name');
}

let myGreeting=greeter('John','Ulbright',true);

console.log(myGreeting);