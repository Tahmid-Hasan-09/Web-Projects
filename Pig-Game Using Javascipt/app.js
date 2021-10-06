/*

3. Add another dice to the game, so that there are two dices
now. The player looses his current score when one of them is
a 1. (Hint: you will need CSS to position the second dice,
so take a look at the CSS code for the first one.)
*/



var activePlayer,scores,roundScore,gamePlaying;
init();
var preDefinedValue;

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
        var dice = [];
        
        dice[0] = Math.floor(Math.random() * 6) + 1;
        dice[1] = Math.floor(Math.random() * 6) + 1;
        
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        
        document.getElementById('dice-1').src = 'dice-'+dice[0]+'.png';
        document.getElementById('dice-2').src = 'dice-'+dice[1]+'.png';
        var winningscore;

        preDefinedValue=document.querySelector('.final-Score').value;
            
            if(preDefinedValue){
                winningscore = preDefinedValue;
            }else{
                winningscore = 100;
            }

        if(dice[0] !== 1 && dice[1] !== 1){
            //Add to the RoundScore
            roundScore = roundScore + dice[0]+dice[1];
            document.querySelector('#current-'+activePlayer).textContent = roundScore;
            if(roundScore >= winningscore){
                WinnerLogic();
            }
        }else{
            //NextPlayer
            nextPlayer();
        }
    }
    
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    //Add roundScore to globalScore
    if(gamePlaying){
        scores[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        preDefinedValue=document.querySelector('.final-Score').value;
        
        if(scores[activePlayer] >= preDefinedValue && preDefinedValue){
            WinnerLogic();
        }
        else if (scores[activePlayer] >= 100) {
            WinnerLogic();
        }else{
        nextPlayer();
        }
    }
});

function WinnerLogic(){
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    document.getElementById('current-'+activePlayer).textContent = '0';
    gamePlaying = false;
}

document.querySelector('.btn-new').addEventListener('click',init);

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.add('active');
}










