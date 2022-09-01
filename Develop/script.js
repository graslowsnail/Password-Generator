
var lengthInput;
var numInput;
var symbolInput;
var lowerCaseInput;
var upperCaseInput;

function getLength(lengthInput) {
    lengthInput = prompt("Choose desired length between 8 & 128 char long");
    // conver answer to actual number
    lengthInt = parseInt(lengthInput);

    //validate prompt answer
    if (lengthInput === "" || lengthInput === null) {
        window.alert("You need to provide a valid input. try again");
        return getLength();
    }
    if (isNaN(lengthInput)) {
        window.alert("please enter a number");
        return getLength();
    }
    if (lengthInt < 8 || lengthInt > 128) {
        window.alert("You need to pick a number between 8 & 128");
        return getLength();
    }
    else {
        return lengthInput;
    }
}
// numInput = confirm(" your password will have numbers");

function getRandomSymbol() {
    const getSymobl = confirm("Add special characters in password?");

    if (getSymobl) {
        // console.log("your password will have special characters.");

        const symbols = '!@#$%^&*_?<>-=+{}[]:;.,/';
        return symbols[Math.floor(Math.random() * symbols.length)];
    }
    else {
        console.log("your password will not have special characters.")
    }

    // const symbols = '!@#$%^&*_?<>-=+{}[]:;.,/';
    // return symbols[Math.floor(Math.random() * symbols.length)];
}

function getRandomLowerCase() {
    const getLowerCase = confirm("add Lower case latters in password?");

    if (getLowerCase) {
        // console.log("your password wil contain lowercase ");

        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    else {
        console.log("your password will not have lowercase letters");
    }

}

function getRandomUppercase() {
    const getUpperCase = confirm("add UPPER CASE latters in password?");

    if (getUpperCase) {
        // console.log("your password will contain UPPER CASE ");

        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    else {
        console.log("your password will not have lowercase letters");
    }

}

function getRandomNumber() {
    // const getNum = confirm(" your password will have numbers");
    if (numInput = true) {
        // console.log("WILL HAVE NUM");
        char = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
        return char;//String.fromCharCode(Math.floor(Math.random() * 10) + 48);

    } else {
        console.log("CONTAIN NO NUM.")
    }
}

function generatePassword(length) {
    // var lowerCase = getRandomLowerCase();
    // var upperCase = getRandomUppercase();
    // var symbol = getRandomSymbol();
    var password = '';


    while (password.length < length) {
        for (let i = 0; i < length; i++) {
            while (password.length < length) {
                password += getRandomNumber() + getRandomLowerCase() + getRandomUppercase() + getRandomSymbol();

            }
        }
        console.log("password length chekc " + password.length);
        return password;
    }
}







// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    // var password = generatePassword();
    // var password = random_item(items);
    // var passwordText = document.querySelector("#password");
    // passwordText.value = password;

}



length = getLength(lengthInput);
// symbolInput = confirm(" do you want to include Symbols?");
// lowerCaseInput = confirm("include lower case letters?  ");
// upperCaseInput = confirm("include upper case letters")
numInput = confirm(" do you want to include numbers?");



console.log("password length " + length);
console.log(getRandomSymbol());
console.log(getRandomLowerCase());
console.log(getRandomUppercase());
console.log(getRandomNumber());

console.log(generatePassword(length));


// Add event listener to generate button
// generateBtn.addEventListener("click", getLength());
// console.log(temp);





// ######## prints random characters from characters const

// const characters = '!@#$%^&*_?<>';
// function generateString(length) {
//     let result = '';
//     const charactersLength = characters.length;
//     for (let i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
// }
// console.log(generateString(length));





 // for (let i = 0; i < length; i++) {

    //     console.log(getRandomNumber() + getRandomUppercase());

    //     // return console.log();
    // }