
function computerPlay(){
  var myArray = [
      "Rock",
      "Paper",
      "Scissors"
    ];
    
   return myArray[Math.floor(Math.random()*myArray.length)];
    
}

let computerSelection = computerPlay();

let pl = document.querySelectorAll('.btn');
for (let i = 0; i < pl.length; i++) {
//work with pl[i]
pl[i].addEventListener('click',function(){
playRound(pl[i].textContent,computerPlay());
});

}

let rck = pl[0].textContent;
let pap = pl[1].textContent;
let scis = pl[2].textContent;

let mscore = 0;
let cscore = 0;
let round = 0;
let fscore = document.getElementsByClassName('score');
fscore[0].innerHTML = 'Your Score: ' +mscore;
fscore[1].innerHTML = "Computer's Score: " +cscore;

function playRound(playerSelection,computerSelection) {
console.log(playerSelection, computerSelection);

  if( playerSelection ===rck && (computerSelection === "Rock")) {
    console.log("TIE");
  }

  else if ( playerSelection === rck && (computerSelection === "Scissors")){
    mscore = mscore + 1;
    console.log("You win rock beats scissors");
  }

  else if ( playerSelection === rck && (computerSelection === "Paper")){
    cscore = cscore + 1;
    console.log("You lose paper beats rock");
  }

  else if( playerSelection === pap && (computerSelection === "Paper")){
    console.log( "TIE");
  }

  else if ( playerSelection === pap && (computerSelection === "Scissors" )){
    cscore = cscore + 1;
    console.log("You lose Scissors beats Paper");
  }

  else if ( playerSelection === pap && (computerSelection === "Rock")){
    mscore = mscore + 1;
    console.log( "You win paper beats rock");
  }

  else if( playerSelection === scis && (computerSelection === "Scissors")){
    console.log("TIE");
  }

  else if ( playerSelection === scis && (computerSelection === "Paper")){
    mscore = mscore + 1;
    console.log("You win scissors beats paper");
  }

  else if ( playerSelection === scis && (computerSelection === "Rock")){
    cscore = cscore + 1;
    console.log( "You lose rock beats scissors");
  }

  else {
    console.log("Invalid input");
  }
  

fscore[0].innerHTML = 'Your Score: ' +mscore;
fscore[1].innerHTML = "Computer's Score: " +cscore;


  if(round === 4){
    let win = document.querySelector('.winner');
  if(mscore > cscore){
    win.innerHTML = 'You have won it all,Congrats!!';
  }
  else if(mscore === cscore){
    win.innerHTML = 'Its a tie';
  }
  else{
    win.innerHTML = 'The computer won against you lol xD!';
  }
  }
  console.log(round);
  round++;
  console.log(round);


}



 



/*
function game()
{

//const playerSelection1 = prompt("What's your choice sir");
const computerSelection1 = computerPlay();
console.log(computerSelection1);
console.log(playRound(playerSelection1.toLowerCase(),computerSelection1));


}
*/

// game();



