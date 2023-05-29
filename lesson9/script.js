let noodlesWithWurst = {
    price: 250,
    weight: 200,
    Rating: 'acceptable',
    ingredient1: 'noodles',
    ingredient2: 'wurst',
    ingredientsPrice: 100
};
let orangeJuice = {
    price: 50,
    weight: 100,
    rating: 'tasteful',
    ingredient1: 'orange juice powder',
    ingredient2: 'water',
    ingredientsPrice: 10,
};
let cupOfTee = {
    price: 25,
    weight: 100,
    rating: 'disgusting',
    ingredient1: 'water',
    ingredient2: 'Tee Powder',
    ingredient3: 'salt',
    ingredientsPrice: 5
};
let bottleOfBeer ={
    price:250,
    weight: 250,
    rating: 'acceptable',
    ingredient1: 'wheet',
    ingredient2: 'water',
    ingredient3: 'sugar',
    ingredientsPrice: 50
};
let Menu = [
    'noodlesWithWurst',
    'orangeJuice',
    'cupOfTee',
    'bottleOfBeer'
];
Menu.pop();
Menu.unshift('bottleOfBeer');
delete bottleOfBeer.ingredient3;

let interestOfNoodlesWithWurst;
interestOfNoodlesWithWurst = noodlesWithWurst.price - noodlesWithWurst.ingredientsPrice;
let interestOfOrangeJuice;
interestOfOrangeJuice = orangeJuice.price - orangeJuice.ingredientsPrice;
let interestOfcupOfTee
interestOfcupOfTee = cupOfTee.price - cupOfTee.ingredientsPrice;
let interestOfBottleOfBeer
interestOfBottleOfBeer = bottleOfBeer.price - bottleOfBeer.ingredientsPrice;
let interest = `
выручка с товара:
макароны с сосиской: ${interestOfNoodlesWithWurst}
апельсиновый сок: ${interestOfOrangeJuice}
кружка чая : ${interestOfcupOfTee}
бутылка пива : ${interestOfBottleOfBeer}
`
console.log(interest);

Menu.pop();
Menu.pop();
Menu.pop();