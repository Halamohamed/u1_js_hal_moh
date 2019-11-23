/**
 * simple varsion of a Black Jack game 
 */

let playerDraw=0;           // playerDraw - the value of player card. 
let playerScore=0;          // playerScore - the sum of player´s cards. 
let computerDraw=0;         // computerDraw - the value of computer´s card. 
let computerScore=0;        // computerScore - the sum of computer´s cards. 

/**
 * @desc it generate a random number and return it back
 * @returns a random number between 1 to 11
 */
  function randomNumber() {  
      let rNumber = Math.floor((Math.random()*11)+1);  
   return rNumber;
 };

/**
 * @desc logged the result of the drawn card and added it to the score
 *              of the player and logged it.
 */
function playerDraws() {
     playerDraw =  randomNumber();
    playerScore += playerDraw;
    console.log('Player drew  ' + playerDraw +'\n' + ' player score = '+ playerScore );
    
};

/**
 * @desc logged the result of the drawn card and aded it to the score
 *               of the computer and logged it.
 */
function computerDraws() {
    computerDraw =  randomNumber();
   computerScore += computerDraw;
   console.log('computer drew  ' + computerDraw +'\n' + ' computer score = ' + computerScore);
   
};

/**
 * @desc reset the player and the computer score to null
 *      alert a message to start again the game.
 */
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    alert('To Play again!, press "D" ');
    console.clear();
    
}

/**
 * @desc gives the result of the sum of card´s drawn 
 * @returns the score of both the player and computer
 */
function winGame() {    
    return('Computer score : '+ computerScore + '\nPlayer score : '+ playerScore ) ;

};

/**
 * @desc alert that the player winner and call the winGame function.
 */
function playerWinner() {
    alert('Player winner! \n' + winGame());
    resetGame();
    
}

/**
 * @desc alert that the computer winner and call the winGame function.
 */
function computerWinner() {
    alert('Computer winner! \n' + winGame());
    resetGame();
    
}

/**
 * @desc compare if the score> 21 call the function the shows the other winner.
 *      call the compareResult function. 
 */
function compareScore() {
    if(computerScore> 21){
        playerWinner();
    }
    else if(playerScore > 21){
        alert('Haha you loose!\n'+ winGame());
        resetGame();
    }
    else if((playerScore == 21) ||(computerScore == 21)){
        alert('Congratulations you win!'+ '\n' + winGame());
        resetGame();

    }

}

/**
 * @desc compare the sum of cards drawn that is less than 21
 *      alert message that says the winner
 *      and call the winGame function. 
 */
function endGame() {
    if((playerScore === 21) ||(computerScore === 21)){
        alert('Congratulations you win!'+ '\n' + winGame());
        resetGame();
    }
    else if(computerScore> 21){
        playerWinner();
    }
    else if(playerScore > 21){
        alert('Haha you loose!\n'+ winGame());
        resetGame();
    }
    else if ((playerScore < 21) && (computerScore < 21)){
        if((playerScore === computerScore )){
            alert( 'It is a Draw!'+ '\n' + winGame());
            resetGame();
        } 
        else if(playerScore > computerScore){
            playerWinner();
        }
        else if(computerScore > playerScore){
            computerWinner();
        }
    }    
    else if(playerScore > computerScore){
        playerWinner();
    }
    else if(computerScore > playerScore){
        computerWinner();
    }
}

/**
 * @desc if player presses keyD, player draw a card and computer draw two cards, compare the result
 *              if player press keyS, the computer draw a card, if his score is less than 17 
 *              otherwise alert message of the result and the winner
 *              the game ends and alert message says to start again 
 */
window.addEventListener("keydown", function(event){
    if (event.code === 'KeyD') {
        if(playerScore === 0){
            playerDraws();
            computerDraws();
            computerDraws();
            compareScore();
        }
        else{            
            playerDraws();
            compareScore();
            
        }
  
    } else if (event.code === 'KeyS') {
        if(computerScore < 17 && playerScore !== 0){
            console.log('Player stopped!');
            computerDraws();
            endGame();
        }
        else{
            endGame();
        }
                  
    }
  
  });