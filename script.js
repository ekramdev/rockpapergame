humanScore = 0 ;
computerScore = 0 ;
function getComputerChoice(){
    let mathRandom = Math.floor(Math.random()*3);
    if (mathRandom == 0) {
       return "rock";
    }else if (mathRandom == 1) {
        return "paper";
    }
    return "sissors";
}
function getHumanChoice(){
    let choice = prompt("please choose a  random number ");
    let mathRandom;
    if(choice == 0){
        return "rock";
    }else if (choice == 1 ){
        return "paper;"
    }else {
        return "sissors"
    }
}
console.log(getHumanChoice());
console.log(getHumanChoice());
console.log(getHumanChoice());

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());