'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const diceRoll = document.querySelector('.btn--roll');
const diceHold = document.querySelector('.btn--hold');
const diceNew = document.querySelector('.btn--new');
const current0Elem = document.querySelector('#current--0');
const current1Elem = document.querySelector('#current--1');
const player0Color = document.querySelector('.player--0');
const player1Color = document.querySelector('.player--1');

let currentScore = 0;
let playing = 1;
let activePlayer = 0;
let scores = [0, 0];
//Intialisation of game
score0El.textContent = 0;
score1El.textContent = 0;
dice.classList.add('hidden');

const switchPlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;

  currentScore = 0;
  player0Color.classList.toggle('player--active');
  player1Color.classList.toggle('player--active');
};

//adding event listner to roll dice
diceRoll.addEventListener('click', function () {
  if (playing) {
    let diceNumber = Number(Math.trunc(Math.random() * 6) + 1);
    //  console.log(diceNumber)
    dice.classList.remove('hidden');
    dice.src = `dice-${diceNumber}.png`;

    //checking the condition
    if (diceNumber !== 1) {
      currentScore += diceNumber;
      // console.log(currentScore);
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      //switching the player
      switchPlayer();
    }
  }
});
diceHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    //checking the condition
    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      dice.classList.add('hidden');

      // document
      //   .querySelector(`.player--${activePlayer}`)
      //   .classList.remove('player--active');
    }
    switchPlayer();
  }
});

diceNew.addEventListener('click', function () {
  playing = true;
  if (playing) {
    activePlayer = 0;
    // document.getElementById('current--0').textContent = 0;
    // document.getElementById('current--1').textContent = 0;
    player0Color.classList.remove('player--winner');
    player1Color.classList.remove('player--winner');
    // player0Color.classList.add('player--active');
    current0Elem.textContent = 0;
    current1Elem.textContent = 0;
    currentScore = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    scores = [0, 0];
  }
});
