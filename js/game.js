let gameHasEnded = false
function selectRandomWord(words) {
  var randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}
function hasWords() { 
  const words = sessionStorage.getItem('words')
  if (!words) {
    window.location.href = 'word.html'
    return
  }
}
function newGame() {
  let words = sessionStorage.getItem('words')
  words = JSON.parse(words)
  const randomWord = atob(selectRandomWord(words)) 
  sessionStorage.setItem('word', btoa(randomWord))
  const wordLength = randomWord.length
  generateInputLines(wordLength)
  checkWord()
}
function restartGame() { 
  window.location.reload()
}
function giveUp() {
  if(gameHasEnded) return;
  drawLosing()
  gameHasEnded = true
}
function generateInputLines(wordLength) {
  for (let i = 0; i < wordLength; i++) {
    const letterElement = document.createElement('div')
    letterElement.classList.add('game_correct__word')
    letterElement.innerHTML = `
      <div class="word__underline"></div>
    `
    document.querySelector('.game_correct__words').appendChild(letterElement)
  }
}
function endGame(endGame, hasWin) {
  if (hasWin) return drawWinning()
  if(!hasWin) return drawLosing()
  return endGame
}
function checkWord() { 
  let word = atob(sessionStorage.getItem('word'))
  let errorCount = 0
  let letterGuessed = ''
  let wordGuess = []
  document.onkeydown = function (event) {
    event.preventDefault()
    if (event.key === 'F5') return window.location.reload();
    if (!validateInput(event.key)) return;
    if (gameHasEnded) return;
    const letter = event.key.toUpperCase()
    if (letterGuessed.indexOf(letter) !== -1) return;
    if (word.indexOf(letter) !== -1) {
      const letterElements = document.querySelectorAll('.game_correct__words')
      for (let i = 0; i < word.length; i++) { 
        if (word[i] === letter) {
          wordGuess[i] = word[i]
          letterElements[0].children.item(i).innerHTML = `
            <p>${letter}</p>
            <div class="word__underline"></div>
          `
        }
      }
      const wordGuessJoined = wordGuess.join('')
      if (wordGuessJoined === word) {
        gameHasEnded = endGame(true, wordGuessJoined === word)
      }
      
    } else {
      const wrongLetterElement = document.querySelector('.game__wrong__words')
      const wrongLetter = document.createElement('p')
      wrongLetter.innerHTML = letter
      wrongLetterElement.appendChild(wrongLetter)
      errorCount++
      switch (errorCount) {
        case 1:
          headHangman()          
          break;
        case 2:
          bodyHangman()          
          break;
        case 3:
          leftArmHangman()          
          break;
        case 4:
          rightArmHangman()          
          break;
        case 5:
          leftLegHangman()          
          break;
        case 6:
          rightLegHangman()          
          break;
        case 7:
          leftFootHangman()          
          break;
        case 8:
          rightFootHangman() 
          gameHasEnded = endGame(true, gameHasEnded >= 8)
          break;
      }
    }
    letterGuessed += letter
  }
}
function validateInput(input) { 
  const pattern = /[a-zA-Z]+/g
  return pattern.test(input) && input.length === 1
}
function drawWinning() { 
  const drawArea = document.querySelector('.draw__area')
  const contestAnnouncement = document.createElement('p')
  contestAnnouncement.innerHTML = 'Você ganhou!'
  contestAnnouncement.classList.add('contest_win')
  drawArea.appendChild(contestAnnouncement)
  return true
}
function drawLosing() {
  const drawArea = document.querySelector('.draw__area')
  const contestAnnouncement = document.createElement('p')
  contestAnnouncement.innerHTML = 'Você perdeu!'
  contestAnnouncement.classList.add('contest_lose')
  drawArea.appendChild(contestAnnouncement)
  return true
}