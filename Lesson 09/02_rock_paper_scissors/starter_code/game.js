



// Create a function that determines the computer choice.  It should return one of the three values: 'rock', 'paper', or 'scissors'
function computerChoice() {

    // make a random number bewteen 1 and 3
let random = Math.ceil(Math.random()* 3);
    //if its 1, return rock
if (random == 1) {
    return "rock";
//if its 2, return scissors
} else if (random == 2) {
    return "scissors";
//else return paper
} else {
    return "paper";
}
    
};


/* Create a function that compares the user's selection to the computer's selection.  It should then output the opponent's choice to #computerSelection and display who is the winner.

 */
function compare(me, opponent) {
    let winner = "";

    // if me == opponent
    if(me == opponent){
        winner = "Tie!";
    }else if(me == "paper"){
        // If me is paper and opp is rock, I win
        if(opponent == "rock"){
            winner = "I win!"
        }else{
            winner = "Computer Wins!"
        }
    }else if(me == "rock"){
        // If me is paper and opp is rock, I win
        if(opponent == "paper"){
            winner = "Computer Wins!"
        }else{
            winner = "I win!"
        }
    }else{
        // Assume I picked scissors
        if(opponent == "rock"){
            winner = "Computer Wins!"
        }else{
            winner = "I win!"
        }
    }

    document.getElementById('decision').innerText = winner;

    document.getElementById('computerSelection').innerText = opponent;

};



document.addEventListener('DOMContentLoaded',function(){

    // Bind a click event onto each of the three buttons.  It should run the compare function and then put the result to the #decsision id in the html
    document.querySelector('#scissors').addEventListener('click', function(e){
        e.preventDefault();
        let comChoice = computerChoice();
        compare("scissors", computerChoice());
    });

    document.querySelector('#paper').addEventListener('click', function(e){
        e.preventDefault();
        let comChoice = computerChoice();
        compare("paper", computerChoice());
    });

    document.querySelector('#rock').addEventListener('click', function(e){
        e.preventDefault();
        let comChoice = computerChoice();
        compare("rock", computerChoice());
    });

});