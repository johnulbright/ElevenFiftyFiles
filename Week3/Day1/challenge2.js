let monsters={
    Martin :{
        traits : ['furry','smelly','ogre'],
        size:'smedium for an ogre',
        description:'usually can be found hanging around golf courses',
        dangerous:true,
        defeatMethods:{
            words:'logic',
            tools:'putter'
        }
    },
    Jeff :{
        traits : ['short','white','Republican'],
        size:'short and stout',
        description:'likes handling rich people\'s money',
        dangerous:false,
        defeatMethods:{
            words:'accepting',
            tools:'herbs'
        }
    },
    Russell :{
        traits : ['swimmer','tall','curly toes'],
        size:'slouchy',
        description:'recovering libertarian',
        dangerous:false,
        defeatMethods:{
            words:'confounding',
            tools:'miller lite'
        }
    }
}

 //!Console.log the following
 //*Description for monster 1
 console.log(monsters["Martin"]["description"]);
 //*The last trait for monster 2
 console.log(monsters["Jeff"]["traits"][monsters["Jeff"]["traits"].length-1]);
 //*One of the defeat methods for monster 3
 let method='tools';
 console.log(monsters["Russell"]["defeatMethods"][method]);