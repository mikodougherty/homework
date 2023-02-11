/*
 * DOTS: Level One
 *
 */
let score = 0;
let ballEl = document.querySelector('.js-ball');
let scoreEl = document.querySelector('.js-score');

function declareWinner() {
  document.body.classList.add('game-over');
}

// click on ball, 
ballEl.addEventListener('click', scoreAdd)
// score goes up by 10,
// 

function scoreAdd () {
  // adding 10 to the score
  score +=10;
  // changing h2 text
  scoreEl.innerText=score;
  // when score reaches 100 there is a winner
  if (score >= 100) {
    declareWinner();
  }
}