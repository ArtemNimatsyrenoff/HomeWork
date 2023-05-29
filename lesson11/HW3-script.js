let noodlesWithSausage = {
    name: "Noodles with sausage",
    ingredients: ["noodles", "sausage"],
    price: 350
};
let porrigde = {
    name: "porridge",
    ingredients: ["wheet", "water"],
    price:150
};
let pelmens = {
    name: "pelmens",
    ingredients:["flour", "water", "meat"],
    price: 300
};
const foodArray = [noodlesWithSausage, porrigde, pelmens];

const prices = {
    noodles:10,
    sausage:30,
    wheet:15,
    water:1,
    flour:5,
    meat:20,
};

const costOfFood = function(food){
    food.cost = 0
    for(let i=0; i<food.ingredients.length; i++){
        const ingrPrice = food.ingredients[i];
        food.cost += prices[ingrPrice];
    }
};

for(food of foodArray){
    costOfFood(food);
    food.profit = food.price - food.cost;
}

console.log(foodArray)