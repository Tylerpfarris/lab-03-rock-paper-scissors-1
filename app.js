import { rockPaperScissorsFunc, determineWinner } from './utils.js';

const shootButton = document.getElementById('shoot-button');
const computerResult = document.getElementById('computer-result');
const resultsArea = document.getElementById('results-area');
const winsCount = document.getElementById('wins-count');
const lossesCount = document.getElementById('losses-count');
const totalGamesCount = document.getElementById('total-games-count');
const resetButton = document.getElementById('reset-button');
const resetClicks = document.getElementById('reset-counter');

// initialize state
let wins = 0;
let total = 0;
let draws = 0;
let resets = 0;

// set event listeners to update state and DOM
shootButton.addEventListener('click', () => {
// a) Store computer's throw
    const computerThrow = Math.round(Math.random() * 3);
    total++

//     -Set up a function to randomly pick between rock, scissors, and paper
    const computerRockPaperScissors = rockPaperScissorsFunc(computerThrow);
    computerResult.textContent = "Computer threw: " + computerRockPaperScissors;

// b) Store user's throw
//     -grab selected input and get its value
    const radioSelection = document.querySelector('input[type="radio"]:checked');
    const userChoice = radioSelection.value;


// c) Compare user choice and computer throw. Write a function
    const winner = determineWinner(userChoice, computerRockPaperScissors);

// d) Display results of throw.
    if (winner === 'draw') {
        resultsArea.textContent = "It's a draw!";
        draws++;
    }
    else if (winner === 'rock lose') {
        resultsArea.textContent = 'Paper covers rock. You lose.';
    }
    else if (winner === 'paper lose') {
        resultsArea.textContent = 'Scissors cut paper. You lose.';
    }
    else if (winner === 'scissors lose') {
        resultsArea.textContent = 'Rock smashes scissors. You lose.';
    }
    else if (winner === 'scissors win') {
        resultsArea.textContent = 'Scissors cut paper. You win!';
        wins++;
    }
    else if (winner === 'paper win') {
        resultsArea.textContent = 'Paper covers rock. You win!';
        wins++
    }
    else if (winner === 'rock win') {
        resultsArea.textContent = 'Rock smashes scissors. You win!';
        wins++;
    }
    updateResults();
})


function updateResults() {
    winsCount.textContent = wins;
    lossesCount.textContent = total - wins - draws;
    totalGamesCount.textContent = total;
}

resetButton.addEventListener('click', () => {
    wins = 0;
    total = 0;
    draws = 0;
    resets++;

    computerResult.textContent = '';
    resultsArea.textContent = '';
    updateResults();

    // reset counter
    resetClicks.textContent = resets + ' reset(s)';
})
