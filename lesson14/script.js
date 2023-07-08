console.log('Hello')
const userNames = {
    uName1: "admin",
    uName2: "user"
};
const passwords = {
    pass1: "root",
    pass2: "123"
};

const askName = prompt("What's your name?", "Enter your name");
const askPass = prompt(`Please, enter your password`, `Password`)

askName == userNames.uName1 && askPass == passwords.pass1 || askName == userNames.uName2 && askPass == passwords.pass2 ? alert(`Вы вошли`) : alert(`Неправильный пароль`)