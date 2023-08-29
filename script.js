import { mutatingNumbers } from "./getSortedNumber.js";
import { validations } from './validations.js';

mutatingNumbers();
const buttonGuess = document.querySelector("#guess-button")
const numberGuessed = document.querySelector("#guess-input")

function handleClick() {
    const guessNumber = parseInt(numberGuessed.value, 10);
    validations(guessNumber);
    buttonGuess.removeEventListener("click", handleClick);
    buttonGuess.addEventListener("click", handleClick);
}

buttonGuess.addEventListener("click", () => {
    handleClick();
})