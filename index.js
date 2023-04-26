const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let blankBtnElOne = document.getElementById("blank-btn-1");
let blankBtnElTwo = document.getElementById("blank-btn-2");

let passwordLengthInput = document.getElementById("pwLength")

let passwordLength = 16;

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function randomPassword() {
    passwordLength = passwordLengthInput.value;
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
    }
    return randomPassword

}

function generateRandomPassword() {
    const generatedPasswordOne = randomPassword()
    const generatedPasswordTwo = randomPassword()

    blankBtnElOne.textContent = generatedPasswordOne;
    blankBtnElTwo.textContent = generatedPasswordTwo;
}

function resetPasswords() {
    const generatedPasswordOne = ""
    const generatedPasswordTwo = ""
    blankBtnElOne.textContent = generatedPasswordOne;
    blankBtnElTwo.textContent = generatedPasswordTwo;
        
    }