/* 
let recipeTitle = "Bread";
let recipeServings = 2;
let recipeIngredients = ["Flour", "Water"];
console.log(recipeTitle);
console.log("Serves: " + recipeServings);
console.log("Ingredients: " + recipeIngredients)
*/

let recipe={
    title:'Bread',
    servings:2,
    ingredients:['flour','water'],
}

console.log(recipe.title);
console.log(`Serves: ${recipe.servings}`);
console.log(`Ingredients: ${recipe.ingredients}`);

//or using bracket notation:
console.log(recipe['title']);
console.log(`Serves: ${recipe['servings']}`);
console.log(`Ingredients: ${recipe['ingredients']}`);

let recipe2={
    title:'Bread',
    servings:2,
    ingredients:{
        firstStep:'flour',
        secondStep:'water',
        thirdStep:{
            ingredient:'yeast'
        }
    }
}

console.log(recipe2.ingredients.firstStep);   
console.log(recipe2['ingredients']['firstStep']);          //You can pass strings into the brackets.  DYNAMIC!

