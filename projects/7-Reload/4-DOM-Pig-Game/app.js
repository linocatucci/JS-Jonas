/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// score voor beide spelers

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0; //0 is the first player and will be used to read the score out the array. /zero based.


// document.querySelector('#current-' + activePlayer).textContent = dice;
// second way, textContent can only set plain text.
// innerHTML will write html in string format.
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// set a value
// var x = document.querySelector('#score-0').textContent;
// console.log(x);
// change css with querySelector:
document.querySelector('.dice').style.display = 'none';

// another DOM selector, set the values to 0
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function () {

    console.log('button is geklikt hoor!');

    // 1. we need to have a random nr.
    var dice = Math.floor((Math.random() * 6) + 1);
    //console.log(dice);

    // 2. Display the result of the nr (dice plaatje 
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';


    // 3. Update the round score IF the rolled number was NOT a 1
    if (dice !== 1) {
        // add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // next player
        /*
        if (activePlayer === 0) {
            activePlayer = 1;
        } else {
            activePlayer = 0;
        }
        */
        // kan ook zo geschreven worden
        // ? is de if and : is de else
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        // player-0-panel active class
        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active');
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        // hide the dice when 1 has been rolled
        document.querySelector('.dice').style.display = 'none';

    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {

    //1. add the current score to the global score

    //2. update the UI with the global score

    //3. check if player won the game (score >= 100)

    //4. 

});