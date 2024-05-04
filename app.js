const passwordBox = document.getElementById('.password');
const passGenerator = document.getElementById('.password-generator');
const lenght = 8;

passGenerator.addEventListener("onclick", passwordGenerator());

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "~!@#$%^&*()-_+={}[]|\:;<>,.?/";

const allChar = upperCase + lowerCase + number + symbol;

function passwordGenerator() {
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random * lowerCase.length)];
    password += number[Math.floor(Math.random * number.length)];
    password += symbol[Math.floor(Math.random * symbol.length)];

    while (lenght > password.length) {
        password += allChar[Math.floor(Math.random * allChar.length)];
    }
    passwordBox.value = password;
}

