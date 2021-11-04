console.log("hello");
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
   const choices = ['r', 'p', 's'];
   const randomNumber = Math.floor(Math.random()* 3);
   return choices [randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
};

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow') }, 1000);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. :) I win! :)`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow') }, 1000)
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = `It's a draw....I'll get you next time...`;

    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('gray-glow') }, 1000)
}

function game(userChoice){
    document.querySelector("body").style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    const computerChoice = getComputerChoice();
    console.log(computerChoice);
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            console.log("I guess you win...");
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            console.log("Ha, you LOSE");
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            console.log("It's a draw, I guess...>:(");
            break;
    }
}

function main (){
    rock_div.addEventListener('click', function() {
        console.log("*throws a rock at you*");
        game("r");
    })
    paper_div.addEventListener('click', function() {
        console.log("*wraps you in paper*");
        game("p");
    })
    scissors_div.addEventListener('click', function() {
        console.log("*throws scissors at you, narrowly missing you*");
        game("s");
    })
}

main();