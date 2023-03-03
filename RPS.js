console.log ("hi");

const arrayRPS = ["Rock","Paper","Scissors"];

function getComputerChoice(){


    var random = arrayRPS[(Math.floor(Math.random() * arrayRPS.length))];
    return(random)
}
console.log(getComputerChoice())