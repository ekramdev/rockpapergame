// step one here we use function to make the computer random choice 
// and used math random methed in the array that has choices
function getComputerChoice (){
 const choices = ["rock","paper","sissors"];
 const idx = Math.floor(Math.random()*3);
 return choices[idx];
}
// step two we use function for user choice to choose & if he choose noting from exist 
// then the computer alert invalid choose again
function getHumanChoice (){
    const input= prompt("Type rock ,paper or sissors");
    let choose = ["rock", "paper","sissors"]
    if (!input)return null ;
    // make the choice input that the user picked it not case sensetive
     // & and make it stick to each other as word for trim usage 
    const choice = input.trim().toLowerCase();
    if(choose.includes(choice)){
        return choice;
    }
    alert("Invalid choice ,please type rock ,paper or sissors");
    return getHumanChoice();
}
// note this two functions are helpers to the main game we need it 
  


function playGame (){
    // score inside the game 
    let humanScore = 0;
    let computerScore =0 ;
    const cap = (s)=> s[0].toUpperCase() + s.slice(1);
 

function playRound(humanChoice,computerChoice){
    const h = humanChoice.toLowerCase();
    const c = computerChoice.toLowerCase();

    if (h==c){
        console.log( `Tie! You both chose ${cap}.`);
        return "tie";
    }
    const humanWins =
    (h === "rock" && c === "sissors")||
    (h=== "sissors" && c === "paper")||
    (h=== "paper"&& c === "rock");
     
    if (humanWins){
        humanScore++;
        console.log(`You win !${cap(h)} beats ${cap(c)}`);
        return "human";
    }else {
        computerScore++;
        console.log(`You lose! ${cap(c)} beats ${cap (h)}`);
    }
}
    for (let round=1 ; round <=5 ; round++){
        console.log(`\nRound ${round}`);
        const humanSelection = getHumanChoice();
        if(!humanSelection){
            console.log("Game cancelled");
            return;
        }
    }
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    playRound(humanSelection,computerSelection)
    console.log(`Score-You : ${humanScore}| Computer : ${computerScore}`);
    console.log("\nFinal result :");
if (humanScore > computerScore){
    console.log(`You won the game! ${humanScore} to ${computerScore}`);
}else if (computerScore > humanScore){
    console.log(`Computer won the game ! ${computerScore}to ${humanScore}`);

}else {
    console.log(`It is a tie ! ${humanScore} to ${computerScore}`);

}
}
playGame();