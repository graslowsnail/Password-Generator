// Assignment code here
var length;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    // var password = generatePassword();
    // var password = makeid(); // this print makeid when button is pressed
    var password = makeid();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// this prints random characters
// function makeid() {
//     var text = "";
//     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//     for (var i = 0; i < 5; i++)
//         text += possible.charAt(Math.floor(Math.random() * possible.length));

//     return text;
// }





// gets length 
var getLength = function () {
    // ask user for length
    length = prompt("Choose desired length between 8 and 128 char long");

    // convert answer form promt to an actual number
    length = parseInt(length);

    // validates prompt answer
    while (length === "" || length === null) {
        window.alert("please enter disired password length");
        return getLength();
    }

    if (length < 8 || length > 128) {
        window.alert("enter a number between 8 and 128");
        return getLength();
    }

    else if (length >= 8 && length <= 128) {
        console.log("password length is " + length);
        console.log(length);
        return;
    }
};




// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword); //prints password

generateBtn.addEventListener("click", getLength);









