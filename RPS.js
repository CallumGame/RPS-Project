
const arrayRPS = ["rock","paper","scissors"];

function getComputerChoice(){


    var random = arrayRPS[(Math.floor(Math.random() * arrayRPS.length))];
    return(random)
}


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

   function getPlayerChoice(){
let input = false;
while(input == false){
    const choice = prompt("Choose Rock Paper or Scissors")
    if(choice == null){
        continue
    }
    const choiceLower = choice.toLowerCase();
    if(arrayRPS.includes(choiceLower)){
input = true;
return choiceLower
    }

}


   }
   
   

    function game(){
let = scorePlayer = 0;
let = scoreComputer = 0;
        console.log("Welcome");
        for (let i = 0; i <= 3; i++) {
   
            const playerSelection = getPlayerChoice();
            const computerSelection = getComputerChoice();
console.log( playRound(playerSelection,computerSelection))
console.log("-------")
if(checkWinner(playerSelection,computerSelection) == "player"){
    scorePlayer++;
}
else if(checkWinner(playerSelection,computerSelection) == "computer"){
    scoreComputer++;
}
        }

if (scorePlayer > scoreComputer){
    console.log("Player was the winner")
}
else if(scorePlayer < scoreComputer){
    console.log("Computer was the winner")
}
else {
    console.log("we have a draw")
}

console.log("Game Over!")
    }

    
    game()