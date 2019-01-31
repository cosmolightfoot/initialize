import coinFlip from './coin-flip.js';
let winCount = 0;
let lossCount = 0;


const coinPic = document.getElementById('coin-pic');
const flipForm = document.getElementById('flip-form');
const winNode = document.getElementById('wins');
const lossNode = document.getElementById('losses');

flipForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const randomNumber = Math.random();
    const flipResult = coinFlip(randomNumber);
    
    if(flipResult === 'heads') {
        coinPic.src = '../assets/coin-button.jpg';
    }
    else {
        coinPic.src = '../assets/coin-horse.jpg';
    }
    
    const bet = flipForm.elements.flip.value;
    if(bet === flipResult) {
        winCount++;
        winNode.textContent = winCount;

    }
    else {
        lossCount++;
        lossNode.textContent = lossCount;
    }

    console.log(bet);
});