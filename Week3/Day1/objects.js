let johnAge=18;
let johnMarried=false;
let johnLikes=['Pacers','math'];
let johnBirthCity='Indianapolis';
let johnBirthState='Indiana';

console.log('All about me:');
console.log(`John is ${johnAge} years old.`);
console.log(`John is ${johnMarried?"married":"not married"}.`);
console.log(`John likes ${johnLikes[0]} and ${johnLikes[1]}`);
console.log(`John was born in ${johnBirthCity}, ${johnBirthState}.`);

let john={
    age:18,
    married:false,
    father:false,
    likes:['Pacers','math'],
    birthPlace:{city:'Indianapolis',state:'Indiana'}
};

console.log('All about me:');
console.log(`John is ${john.age} years old.`);
console.log(`John is ${john.married?"married":"not married"}.`);
console.log(`John likes ${john.likes[0]} and ${john.likes[1]}`);
console.log(`John was born in ${john.birthPlace.city}, ${john.birthPlace.state}.`);

//You can also change the values in an object
john.age--;
john.birthPlace.city='Montreal';
john.birthPlace.state='Quebec'

console.log('All about me:');
console.log(`John is ${john.age} years old.`);
console.log(`John is ${john.married?"married":"not married"}.`);
console.log(`John likes ${john.likes[0]} and ${john.likes[1]}`);
console.log(`John was born in ${john.birthPlace.city}, ${john.birthPlace.state}.`);

// while(john.age<=39){
//     if(john.age==27){
//         john.married=true;
//         john.wife='Janna';
//         john.likes.push(john.wife);
//     }
//     if(john.age==30){
//         john.father=true;
//         john.son='Jack';
//         john.likes.push(john.son);
//     }
//     if(john.age==34){
//         john.likes.push('running');
//     }
//     john.age++;
//     console.log(`age: ${john.age}, married: ${john.married}, likes: ${john.likes}`);
//}
let john2={
    age:18,
    married:false,
    father:false,
    likes:['Pacers','math'],
    birthPlace:{city:'Indianapolis',state:'Indiana'},
    eat: function(food){
        console.log('Yum, I love '+food);
    },
    sleep:function(numMinutes){
        for (let i=0;i<numMinutes;i++){
            console.log('z');
        }
    }

}

john2.eat('oysters');
john2.sleep(15);

let x=[1,2,64,2,4];
console.log(x.length);