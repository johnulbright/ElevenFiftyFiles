//Challenge! List the numbers 1-10

function numLister(limit){
    for (let i=1;i<=limit;i++){
        console.log(i);
    }
}

//numLister(10);


//Challenge! Given the array, create a function that lists out the values individually

let arr=['Vic','Domas','Myles','Malcolm','TJ'];

function arrayItems1(x){
    x.forEach(player => {console.log(player)});
}

//arrayItems1(arr);

function arrayItems2(x){
    for (player of x){
        console.log(player);
    }
}

//arrayItems2(arr);

