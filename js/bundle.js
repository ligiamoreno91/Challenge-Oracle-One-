const newWordInput = document.querySelector('#newWordInput')
function openCreateWord() {
  window.location.href = 'word.html'
  newWordInput.addEventListener('input', function (event) { 
  event.preventDefault()
  const pattern = /[a-zA-Z]+/g
  if (!pattern.test(event.data)) {
    this.value = this.value.replace(event.data, '')
  }
  this.value = this.value.toUpperCase()
  if (this.value.length >= 8) {
    console.log('Max 8 characters allowed')
  }
})
}
function cancelWordCreation () {
  window.location.href = 'index.html'
}
function createWord() {
  if(newWordInput.value.length === 0) {
    alert('Oops! Você precisa digitar uma palavra')
    return
  }
  let words = sessionStorage.getItem('words')
  if (!words) {
    words = JSON.stringify([])
  }
  words = JSON.parse(words)
  words.push(btoa(newWordInput.value.toUpperCase()))
  sessionStorage.setItem('words', JSON.stringify(words))
  window.location.href = 'index.html'
}
function addNewWord() {
  let words = sessionStorage.getItem('words')
  if (!words) {
    words = JSON.stringify([])
  }
  words = JSON.parse(words)
  words.push(btoa(newWordInput.value.toUpperCase()))
  newWordInput.value = ''
  sessionStorage.setItem('words', JSON.stringify(words))
}
function startGame() {
  window.location.href = 'game.html'
}