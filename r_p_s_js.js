// The ability to make a choice
// CPU pick from a list
// determines a winner


let playerWins = 0;
let pcWins = 0;
let finished = false;
console.clear();

function takeUserInput(){
  return alert('Rock, Paper, or Scissors?: ').toLowerCase();
}

function generatePcAnswer() {
  const choices = ['rock','paper','scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function runRPS(){
  const userInput = takeUserInput();
  const pcInput = generatePcAnswer();
  
  if(userInput !== 'rock' && userInput !== 'paper' && userInput !== 'scissors') {
    alert('You need to write rock, paper, or scissors. Play the game ya noob.');
    takeUserInput();
  } else if(userInput === pcInput) {
    alert('The game is a tie!');
  } else if(userInput === 'rock' && pcInput === 'scissors') {
    alert('Rock smashes scissors!');
    playerWins++;
  } else if (userInput === 'scissors' && pcInput === 'paper') {
    alert('Scissors! slices paper!');
    playerWins++;
  } else if (userInput === 'paper' && pcInput === 'rock') {
    alert('Paper wraps Rock!');
    playerWins++;
  } else {
    alert('Pc Wins!, get gud');
    pcWins++
  }
  
  return prompt('Finished? ').toLowerCase() === 'yes' ? true : false;
}


while(!finished) {
  finished = runRPS();
}

console.log(`The game has ended. The final score is (Player: ${playerWins}) && (PC: ${pcWins})`);
