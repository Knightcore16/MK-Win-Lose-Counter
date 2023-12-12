// Load previous match results from local storage
let player1Wins = parseInt(localStorage.getItem('player1Wins')) || 0;
let player1Losses = parseInt(localStorage.getItem('player1Losses')) || 0;
let player2Wins = parseInt(localStorage.getItem('player2Wins')) || 0;
let player2Losses = parseInt(localStorage.getItem('player2Losses')) || 0;
let matchesCount = parseInt(localStorage.getItem('matchesCount')) || 0;

// Display initial values
updateDisplay();

// Set initial player names or get from prompt
const player1Name = localStorage.getItem('player1Name') || prompt("Enter Player 1's username:") || 'Player 1';
const player2Name = localStorage.getItem('player2Name') || prompt("Enter Player 2's username:") || 'Player 2';

// Update local storage
localStorage.setItem('player1Name', player1Name);
localStorage.setItem('player2Name', player2Name);

// Update display
document.getElementById('player1-name-display').innerText = player1Name;
document.getElementById('player2-name-display').innerText = player2Name;

function recordMatchResult(winner) {
    const winAlertP1 = `${player1Name} WON!`
    const winAlertP2 = `${player2Name} WON!`
  if (winner === 'player1') {
    player1Wins++;
    player2Losses++;
    alert(winAlertP1)
  } else if (winner === 'player2') {
    player2Wins++;
    player1Losses++;
    alert(winAlertP2)
  }

  matchesCount++;

  // Update local storage
  localStorage.setItem('player1Wins', player1Wins);
  localStorage.setItem('player1Losses', player1Losses);
  localStorage.setItem('player2Wins', player2Wins);
  localStorage.setItem('player2Losses', player2Losses);
  localStorage.setItem('matchesCount', matchesCount);

  // Update display
  updateDisplay();
}



function resetGame() {
  const resetConfirm = confirm("Do you want to proceed???")
  if (!resetConfirm)  {
    console.log("User canceled. The code below won't run.");
  } else {
    // Ask for new usernames when resetting the game
  const newPlayer1Name = prompt("Enter new username for Player 1:") || 'Player 1';
  const newPlayer2Name = prompt("Enter new username for Player 2:") || 'Player 2';

  player1Wins = player1Losses = player2Wins = player2Losses = matchesCount = 0;

  // Update local storage with new names
  localStorage.setItem('player1Name', newPlayer1Name);
  localStorage.setItem('player2Name', newPlayer2Name);

  // Update display
  document.getElementById('player1-name-display').innerText = newPlayer1Name;
  document.getElementById('player2-name-display').innerText = newPlayer2Name;

  // Update local storage
  localStorage.setItem('player1Wins', player1Wins);
  localStorage.setItem('player1Losses', player1Losses);
  localStorage.setItem('player2Wins', player2Wins);
  localStorage.setItem('player2Losses', player2Losses);
  localStorage.setItem('matchesCount', matchesCount);

  // Update display
  updateDisplay();
  }   
}

function updateDisplay() {
  document.getElementById('player1-wins').innerText = player1Wins;
  document.getElementById('player1-losses').innerText = player1Losses;
  document.getElementById('player2-wins').innerText = player2Wins;
  document.getElementById('player2-losses').innerText = player2Losses;
  document.getElementById('matches-count').innerText = matchesCount;
}

