function main() {
  const rock = '🪨'
  const paper = '📃'
  const scissor = '✂️'
  const lizard = '🦎'
  const spock = '🖖🏼'

  let p1 = ''
  let p2 = ''

  function gameLogic() {
    // DRAW LOGIC
    if (p1 === p2) {
      window.alert('DRAW!')
    }

    // PLAYER 1 LOGIC
    else if (p1 === rock && p2 === scissor) {
      window.alert('PLAYER 1 WINS!!!')
    } else if (p1 === rock && p2 === lizard) {
      window.alert('PLAYER 1 WINS!!!')
    } else if (p1 === scissor && p2 === paper) {
      window.alert('PLAYER 1 WINS!!!')
    } else if (p1 === scissor && p2 === lizard) {
      window.alert('PLAYER 1 WINS!!!')
    } else if (p1 === paper && p2 === rock) {
      window.alert('PLAYER 1 WINS!!!')
    } else if (p1 === paper && p2 === spock) {
      window.alert('PLAYER 1 WINS!!!')
    } else if (p1 === lizard && p2 === spock) {
      window.alert('PLAYER 1 WINS!!')
    } else if (p1 === lizard && p2 === paper) {
      window.alert('PLAYER 1 WINS!!!')
    } else if (p1 === spock && p2 === rock) {
      window.alert('PLAYER 1 WINS!!!')
    } else if (p1 === spock && p2 === scissor) {
      window.alert('PLAYER 1 WINS!!')

      // PLAYER 2 LOGIC
    } else if (p2 === rock && p1 === scissor) {
      window.alert('PLAYER 2 WINS!!!')
    } else if (p2 === rock && p1 === lizard) {
      window.alert('PLAYER 2 WINS!!!')
    } else if (p2 === scissor && p1 === paper) {
      window.alert('PLAYER 2 WINS!!!')
    } else if (p2 === scissor && p1 === lizard) {
      window.alert('PLAYER 2 WINS!!!')
    } else if (p2 === paper && p1 === rock) {
      window.alert('PLAYER 2 WINS!!!')
    } else if (p2 === paper && p1 === spock) {
      window.alert('PLAYER 2 WINS!!!')
    } else if (p2 === lizard && p1 === spock) {
      window.alert('PLAYER 2 WINS!!!')
    } else if (p2 === lizard && p1 === paper) {
      window.alert('PLAYER 2 WINS!!!')
    } else if (p2 === spock && p1 === rock) {
      window.alert('PLAYER 2 WINS!!!')
    } else if (p2 === spock && p1 === scissor) {
      window.alert('PLAYER 2 WINS!!!')
    }
  }

  // ROCK
  function selectRockOne(event) {
    const teamOneRock = document.querySelector('.team1 h3')
    teamOneRock.textContent = rock
    p1 = rock
    console.log(p1)
    gameLogic()
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
    gameLogic()
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
    gameLogic()
  }
  document
    .querySelector('.team1 .scissor')
    .addEventListener('click', selectScissorOne)

  //  LIZARD
  function selectLizardOne(event) {
    const teamOneLizard = document.querySelector('.team1 h3')
    teamOneLizard.textContent = lizard
    p1 = lizard
    console.log(p1)
    gameLogic()
  }
  document
    .querySelector('.team1 .lizard')
    .addEventListener('click', selectLizardOne)

  //  SPOCK
  function selectSpockOne(event) {
    const teamOneSpock = document.querySelector('.team1 h3')
    teamOneSpock.textContent = spock
    p1 = spock
    console.log(p1)
    gameLogic()
  }
  document
    .querySelector('.team1 .spock')
    .addEventListener('click', selectSpockOne)

  //--------------------------------

  // Selections for Team2

  // ROCK
  function selectRockTwo(event) {
    const teamTwoRock = document.querySelector('.team2 h3')
    teamTwoRock.textContent = rock
    p2 = rock
    console.log(p2)
    gameLogic()
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
    gameLogic()
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
    gameLogic()
  }
  document
    .querySelector('.team2 .scissor')
    .addEventListener('click', selectScissorTwo)

  //  LIZARD
  function selectLizardTwo(event) {
    const teamTwoLizard = document.querySelector('.team2 h3')
    teamTwoLizard.textContent = lizard
    p2 = lizard
    console.log(p2)
    gameLogic()
  }
  document
    .querySelector('.team2 .lizard')
    .addEventListener('click', selectLizardTwo)

  //  SPOCK
  function selectSpockTwo(event) {
    const teamTwoSpock = document.querySelector('.team2 h3')
    teamTwoSpock.textContent = spock
    p2 = spock
    console.log(p2)
    gameLogic()
  }
  document
    .querySelector('.team2 .spock')
    .addEventListener('click', selectSpockTwo)

  // RESET

  const resetScore = '-'
  function resetScores(event) {
    p1 = document.querySelector('.team1 h3')
    p2 = document.querySelector('.team2 h3')
    p1.textContent = resetScore
    p2.textContent = resetScore

    console.log(resetScore)
  }

  document.querySelector('footer').addEventListener('click', resetScores)
}

document.addEventListener('DOMContentLoaded', main)
