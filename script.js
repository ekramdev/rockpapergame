// To click the buttons with the choice the user clicked
let playerScore =0 ;
let computerScore =0;
let btns = document.querySelectorAll('#game button');
const results = document.querySelector('#results');
// to show visible score 
const score = document.querySelector('#score');
const resetBtn = document.querySelector('#reset')

// hide reset intially
resetBtn.style.display = "none"

//  generating computer pick and display both when you click
function getComputerChoice(){
   const choices = ["rock", "paper","scissors"];
   const idx = Math.floor(Math.random()*3);
   return choices[idx];
}
 // function to know who is the winner 
function playRound(player,computer){
    if ( player === computer){
        return 'It is tie ';
    }else if (
        (player === "rock" && computer === 'sicssors')
        || (player === 'sicssors' && computer === 'paper')
        || (player === 'paper' && computer === 'rock')
    ){
         return 'player';
    }else {
        return 'computer';
    }
 
}



// function to see the score of the winner 
function updateScoreBoard(){
    score.textContent =`player: ${playerScore} | computer :${computerScore}`;
    if(playerScore ==5 || computerScore ===5 ){
        const winner = playerScore ===5 ? "player" : "computer"
        results.textContent = `${winner} win the game !`;
        // disable buttons 
        btns.forEach(b => b.disabled = true);
        resetBtn.style.display = "inline-block";
    }
}
// use loop to go through each button 
btns.forEach(button => {
   button.addEventListener('click',function(e){
      const choice = e.currentTarget.dataset.choice;
      const computer= getComputerChoice();
      const roundWinner = playRound(choice ,computer);
    // update score
      if(roundWinner === 'player')playerScore++;
      else if(roundWinner === 'computer')computerScore++;

    results.textContent = `You :${choice} | Computer : ${computer}`;
     updateScoreBoard();

});

});
//  reset path 
resetBtn.addEventListener('click',() =>{
    playerScore= 0;
    computerScore=0;
    results.textContent ='';
    updateScoreBoard();
    btns.forEach(b => b.disabled = false);
    resetBtn.style.display = "none";
    updateScoreBoard();
})
//  initial render
updateScoreBoard();






