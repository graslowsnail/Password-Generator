// Assignment code here
// var items = [254, 45, 212, 365, 2543];
// var itemsTwo = [1, 2, 3, 4, 5, 6, 7, 8,];
// var length;
// function random_item(items) {
//     return items[Math.floor(Math.random() * items.length)];
// }

function getLength(lengthInput) {

    // conver answer to actual number
    lengthInt = parseInt(lengthInput);

    //validate prompt answer
    if (lengthInput === "" || lengthInput === null) {
        window.alert("You need to provide a valid input. try again");
        return;
    }
    if (isNaN(lengthInput)) {
        window.alert("please enter a number");
        return;
    }
    if (lengthInt < 8 || lengthInt > 128) {
        window.alert("You need to pick a number between 8 & 128");
        return;
    }
    else {
        // console.log(lengthInput);
        return lengthInput;
    }
}

// test function
function test(temp) {
    console.log("Password is " + temp + " characters long");
}

// makes password, to length of user input 
function makePassword(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

// console.log(random_item(items));

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    // var password = generatePassword();
    // var password = random_item(items);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button

// generateBtn.addEventListener("click", getLength());
var lengthInput = prompt("Choose desired length between 8 & 128 char long");
temp = getLength(lengthInput);
// console.log(temp);
test(temp);

console.log(makePassword(temp));
