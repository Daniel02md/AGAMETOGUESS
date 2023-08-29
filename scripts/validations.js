import { sortedNumber } from './getSortedNumber.js';

export function validations(guessNumber){
    const container = document.getElementById("information-container")

    if(!validateAsNumber(guessNumber)){
        container.innerHTML = `
        <h2 class="information-state">ONLY NUMBERS!</h2>
        `;
    }

    if(guessNumber == sortedNumber){
        container.innerHTML = `
            <h2 class="information-state">YOU WON!</h2>
            <input type="button" id="play-again" class="play-again" value="PLAY AGAIN!">
        `;
        playAgain();

    }else if(guessNumber > sortedNumber){
        container.innerHTML = `
        <h2 class="information-state">THE SORTED NUMBER IS SMALLER!</h2>
    `;
    }else {
        container.innerHTML = `
        <h2 class="information-state">THE SORTED NUMBER IS BIGGER!</h2>
        `;
    }
}

function validateAsNumber(guessNumber){
    return Number.isNaN(guessNumber);
}

function playAgain(){
    const playAgainButton = document.getElementById('play-again')
    playAgainButton.addEventListener('click', function(){
        window.location.reload();
    })
}