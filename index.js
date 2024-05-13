let score1 = 0;
let score2 = 0;
let setupScore;

function start() {
  setupScore = parseInt(document.getElementById('scoreSetup').value);
  let element = document.getElementById('hideSec');
  if (isNaN(setupScore) || setupScore <= 0) {
    alert("Please enter a valid score greater than zero.");
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}

function checkGameEnd() {
  if (score1 === setupScore || score2 === setupScore) {
    if (score1 === setupScore) {
      alert("Player Wins the game!");
    } else {
      alert("Computer Wins the game!");
    }
    
    score1 = 0;
    score2 = 0;
    document.getElementById('score1').textContent = `Player Score: ${score1}`;
    document.getElementById('score2').textContent = `Computer Score: ${score2}`;
    
  }
}

function rock() {
  let computerMove = Math.floor(Math.random() * 3) + 1;

  if (computerMove === 1) {
    alert("Player picked rock. Computer picked rock. Tie!");
  } else if (computerMove === 2) {
    alert("Player picked rock. Computer picked paper. Computer Wins!");
    score2++;
    document.getElementById('score2').textContent = `Computer Score: ${score2}`;
  } else if (computerMove === 3) {
    alert("Player picked rock. Computer picked scissors. Player Wins!");
    score1++;
    document.getElementById('score1').textContent = `Player Score: ${score1}`;
  }
  checkGameEnd();
}

function paper() {
  let computerMove = Math.floor(Math.random() * 3) + 1;

  if (computerMove === 1) {
    alert("Player picked paper. Computer picked rock. Player Wins!");
    score1++;
    document.getElementById('score1').textContent = `Player Score: ${score1}`;
  } else if (computerMove === 2) {
    alert("Player picked paper. Computer picked paper. Tie!");
  } else if (computerMove === 3) {
    alert("Player picked paper. Computer picked scissors. Computer Wins!");
    score2++;
    document.getElementById('score2').textContent = `Computer Score: ${score2}`;
  }
  checkGameEnd();
}

function scissors() {
  let computerMove = Math.floor(Math.random() * 3) + 1;

  if (computerMove === 1) {
    alert("Player picked scissors. Computer picked rock. Computer Wins!");
    score2++;
    document.getElementById('score2').textContent = `Computer Score: ${score2}`;
  } else if (computerMove === 2) {
    alert("Player picked scissors. Computer picked paper. Player Wins!");
    score1++;
    document.getElementById('score1').textContent = `Player Score: ${score1}`;
  } else if (computerMove === 3) {
    alert("Player picked scissors. Computer picked scissors. Tie!");
  }
  checkGameEnd();
}
