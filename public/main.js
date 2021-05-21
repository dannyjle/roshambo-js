function main() {
  const rock = '🪨'
  const paper = '📃'
  const scissor = '✂️'
  let p1 = ''
  let p2 = ''

  // // const gameLogic = (p1, p2) => {
  // if (p1 === p2) {
  //   window.alert('WE have a DRAW!')
  // } else if (p1 === 'rock' && p2 === 'scissor') {
  //   window.alert('PlAYER 1 WINS!')
  // } else if (p1 === 'scissor' && p2 === 'paper') {
  //   window.alert('PlAYER 1 WINS!')
  // } else if (p1 === 'paper' && p2 === 'rock') {
  //   window.alert('PlAYER 1 WINS!')
  // } else {
  //   window.alert('PlAYER 2 WINS!')
  // }

  // return
  // // }

  // Selections for Team1

  // ROCK
  function selectRockOne(event) {
    const teamOneRock = document.querySelector('.team1 h3')
    teamOneRock.textContent = rock
    p1 = rock
    console.log(p1)
  }
  document
    .querySelector('.team1 .rock')
    .addEventListener('click', selectRockOne)

  // PAPER
  function selectPaperOne(event) {
    const teamOnePaper = document.querySelector('.team1 h3')
    teamOnePaper.textContent = paper
    p1 = paper
    console.log(p1)
  }
  document
    .querySelector('.team1 .paper')
    .addEventListener('click', selectPaperOne)

  //  SCISSORS
  function selectScissorOne(event) {
    const teamOneScissor = document.querySelector('.team1 h3')
    teamOneScissor.textContent = scissor
    p1 = scissor
    console.log(p1)
  }
  document
    .querySelector('.team1 .scissor')
    .addEventListener('click', selectScissorOne)

  //--------------------------------

  // Selections for Team2

  // ROCK
  function selectRockTwo(event) {
    const teamTwoRock = document.querySelector('.team2 h3')
    teamTwoRock.textContent = rock
    p2 = rock
    console.log(p2)
  }
  document
    .querySelector('.team2 .rock')
    .addEventListener('click', selectRockTwo)

  // PAPER
  function selectPaperTwo(event) {
    const teamOnePaper = document.querySelector('.team2 h3')
    teamOnePaper.textContent = paper
    p2 = paper
    console.log(p2)
  }
  document
    .querySelector('.team2 .paper')
    .addEventListener('click', selectPaperTwo)

  //  SCISSORS
  function selectScissorTwo(event) {
    const teamOneScissor = document.querySelector('.team2 h3')
    teamOneScissor.textContent = scissor
    p2 = scissor
    console.log(p2)
  }
  document
    .querySelector('.team2 .scissor')
    .addEventListener('click', selectScissorTwo)

  // RESET

  const resetScore = '-'
  function resetScores(event) {
    teamOneChoice = document.querySelector('.team1 h3')
    teamTwoChoice = document.querySelector('.team2 h3')
    teamOneChoice.textContent = resetScore
    teamTwoChoice.textContent = resetScore
  }

  document.querySelector('footer').addEventListener('click', resetScores)
}

document.addEventListener('DOMContentLoaded', main)
