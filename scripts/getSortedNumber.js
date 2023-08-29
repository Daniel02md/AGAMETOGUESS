export const biggerNumber = 100;
export const minorNumber = 1;
export const sortedNumber = getSortedNumber();

function getSortedNumber(){
    const randomNumber = parseInt(Math.random() * (biggerNumber + 1));
    return randomNumber;
}

export function mutatingNumbers(){
    const elementBiggerNumber = document.getElementById('bigger-number');
    elementBiggerNumber.innerHTML = biggerNumber;

    const elementMinorNumber = document.getElementById('minor-number');
    elementMinorNumber.innerHTML = minorNumber;
}
