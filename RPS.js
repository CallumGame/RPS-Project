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
else if( (playerSelection.tolowercase == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")){
    return "player";
}
else {
    return "computer"
 }
}




function playRound(playerSelection,computerSelection){
  const result = checkwinner(playerSelection,computerSelection);
  if(result == "draw"){
  return "Draw play again";}
  else if(result == "player") {
    return "You win"}
else(result == "computer")
    return "DSJJSHDJS Computer wins"



    }