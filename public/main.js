function main() {
  const rock = '🪨'
  const paper = '📃'
  const scissor = '✂️'

  // Selections for Team1

  // ROCK
  function selectRockOne(event) {
    const teamOneRock = document.querySelector('.team1 h3')
    teamOneRock.textContent = rock
  }
  document
    .querySelector('.team1 .rock')
    .addEventListener('click', selectRockOne)

  // PAPER
  function selectPaperOne(event) {
    const teamOnePaper = document.querySelector('.team1 h3')
    teamOnePaper.textContent = paper
  }
  document
    .querySelector('.team1 .paper')
    .addEventListener('click', selectPaperOne)

  //  SCISSORS
  function selectScissorOne(event) {
    const teamOneScissor = document.querySelector('.team1 h3')
    teamOneScissor.textContent = scissor
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
  }
  document
    .querySelector('.team2 .rock')
    .addEventListener('click', selectRockTwo)

  // PAPER
  function selectPaperTwo(event) {
    const teamOnePaper = document.querySelector('.team2 h3')
    teamOnePaper.textContent = paper
  }
  document
    .querySelector('.team2 .paper')
    .addEventListener('click', selectPaperTwo)

  //  SCISSORS
  function selectScissorTwo(event) {
    const teamOneScissor = document.querySelector('.team2 h3')
    teamOneScissor.textContent = scissor
  }
  document
    .querySelector('.team2 .scissor')
    .addEventListener('click', selectScissorTwo)

  // RESET

  const resetScore = '-'
  function resetScores(event) {
    teamOneScore = document.querySelector('.team1 h3')
    teamTwoScore = document.querySelector('.team2 h3')
    teamOneScore.textContent = resetScore
    teamTwoScore.textContent = resetScore
  }

  document.querySelector('footer').addEventListener('click', resetScores)
}

document.addEventListener('DOMContentLoaded', main)
