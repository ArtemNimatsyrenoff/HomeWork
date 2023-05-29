let question1 = prompt("2+2 = ?");
let question2 = prompt("2*2 = ?");
let question3 = prompt("2^2 = ?");
let question4 = prompt("5/(x – 1) – 3/(x + 1) = 15/(x 2 – 1)")
let question5 = prompt("Раствор азотной кислоты массой 25,2 г и массовой долей 10% прилили к избытку карбоната магния. Вычислите объём выделившегося газа.");

let answer1;
let answer2;
let answer3;
let answer4;
let answer5;

if (question1 == 4) {
    answer1 = 1;
}
else{
    answer1 = 0;
};

if(question2 == 4){
    answer2 = 1
}
else{
    answer2 = 0
};

if(question3 == 4){
    answer3 = 1
}
else{
    answer3 = 0
};

if(question4 == 3.5){
    answer4 = 1
}
else{
    answer4 = 0
};

if(question5 == 0.448){
    answer5 = 1
}
else{
    answer5 = 0
};

let grade = ( answer1 + answer2 + answer3 + answer4 + answer5);

console.log (grade);

if(grade == 0){
    alert("Your grade equils 0 - is't gruesome result");
};
if(grade == 1){
    alert("Your grade equils 1 - that's terrible, pal");
};
if(grade == 2){
    alert("Your grade equils 2 - that's bad, friend");
};
if(grade == 3){
    alert("Your grade equils 3 - it could be better, dude");
};
if(grade == 4){
    alert("Your grade equils 4 - that's quite acceptable, man");
};
if(grade == 5){
    alert("Your grade equils 5 - that's incredible, you're doing the best");
};

console.log(answer1 + answer2);