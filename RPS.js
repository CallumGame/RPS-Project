
const arrayRPS = ["rock","paper","scissors"];

function getComputerChoice(){


    var random = arrayRPS[(Math.floor(Math.random() * arrayRPS.length))];
    return(random)
}
console.log(getComputerChoice())

function checkWinner(playerSelection,computerSelection){
if(playerSelection == computerSelection){
return "draw";
}
else if( (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")){
    return "player";
}
else {
    return "computer"
 }
}




function playRound(playerSelection,computerSelection){
  const result = checkWinner(playerSelection,computerSelection);
  if(result == "draw"){
  return "Draw play again";
}
  else if(result == "player") {
    return `You win! ${playerSelection} beats ${computerSelection}`
}
else{ (result == "computer")
    return `DSJJSHDJS Computer wins! ${computerSelection} beats ${playerSelection}`
}


    }

   
   
   

    function game(){
        console.log("Welcome");
        for (let i = 1; i <= 5; i++) {
   
            const playerSelection = "paper";
            const computerSelection = getComputerChoice();
console.log( playRound(playerSelection,computerSelection))

          }
    }
    
    game()