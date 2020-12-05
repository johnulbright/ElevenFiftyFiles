

function calcTip(bill,tip){
    let total=Math.round(100*bill*(1+tip))/100;
    let total2=bill*(1+tip);
    return [total,total2];
}

let bigMeal=calcTip(50,.11)[0];
let bigMeal2=calcTip(50,.11)[1];
console.log(bigMeal);

console.log(bigMeal2);