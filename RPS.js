console.log ("hi");

const arrayRPS = ["Rock","Paper","Scissors"];

function getComputerChoice(){


    var random = arrayRPS[(Math.floor(Math.random() * arrayRPS.length))];
    return(random)
}
console.log(getComputerChoice())

function checkWinner(playerSelection,computerSelection){
if(playerSelection == computerSelection){
return "Draw";
}
else if( (playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Scissors" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Rock")){
    return "player";
}
else {
    return "computer"
 }
}




function playRound(playerSelection,computerSelection){
  const result = checkWinner(playerSelection,computerSelection);
  if(result == "Draw"){
  return "Draw play again";}
  else if(result == "player") {
    return `You win! ${playerSelection} beats ${computerSelection}`}
else(result == "computer")
    return `DSJJSHDJS Computer wins! ${computerSelection} beats ${playerSelection}`



    }

    const playerSelection = "Paper"
    const computerSelection = "Rock"
    console.log(playRound(playerSelection,computerSelection))

    function game(){

        for (let i = 1; i <= answer; i++) {


            console.log(i);
          }
    }
    
    let answer = parseInt(prompt("Let's play Rock Paper Scissors."));