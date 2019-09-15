let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div= document.getElementById("r");
const paper_div= document.getElementById("p");
const scissor_div= document.getElementById("s");


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices [randomNumber];

}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissor";

}


function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}  beats  ${convertToWord(computerChoice)}. You win! 👍 `;

    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function () {document.getElementById(userChoice).classList.remove('green-glow')}, 400);
}



function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}  gets beaten by  ${convertToWord(computerChoice)}. You lost! 💩`;

    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function () {document.getElementById(userChoice).classList.remove('red-glow')}, 400);
}


function draw(userChoice, computerChoice){
    result_p.innerHTML = `${convertToWord(userChoice)}  equals ${convertToWord(computerChoice)}. It's a draw 😐`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function () {document.getElementById(userChoice).classList.remove('gray-glow')}, 600);

}




function game(userChoice) {
    const computerChoice = getComputerChoice();


    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
         win(userChoice, computerChoice);
         break;

        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;



    }
}


function main() {
    rock_div.addEventListener('click',() => game("r"));

    paper_div.addEventListener('click', () => game("p"));

    scissor_div.addEventListener('click', () => game("s"));
}


main();

