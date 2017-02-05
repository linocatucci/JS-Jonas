/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 1; //0 is first player, 1 is second player

dice = Math.floor(Math.random() * 6) + 1;
//console.log(dice);

// methods to select elements from our webpage querySelector
// input is : id of the element (score-0) for player 0 
// first you select the element by the id, then the textContext to change the text, which is the value of the dice.
// don't forget the '#' to select an id.
// textContect kan alleen plain text zetten, geen html
// hiervoor gebruik je innerHTML method.

// setter
document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';


// getter
// var x = document.querySelector('#score-0').textContent;
// console.log(x);
// to show that you can hide and show an html element via the css property: display : none;
// document.querySelector('.dice').style.display = 'none';