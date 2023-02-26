import {Component} from 'react'
import './index.css'
import StyledScore from './StyledComponents'

import PlayingOption from '../PlayingOption'
import RulesButton from '../RulesButton'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    testId: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    testId: 'scissorsButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    testId: 'paperButton',
  },
]

class RockPaperScissors extends Component {
  state = {
    score: 0,
    resultChoice:
      choicesList[Math.floor(Math.random() * choicesList.length)].id,
    selectedChoice: '',
    completed: false,
    resultStatus: '',
  }

  onChoiceSelection = id => {
    const {score, resultChoice} = this.state
    let newScore = score
    let result = ''

    if (id === 'ROCK') {
      if (resultChoice === 'PAPER') {
        newScore -= 1
        result = 'YOU LOSE'
      } else if (resultChoice === 'SCISSORS') {
        newScore += 1
        result = 'YOU WIN'
      } else {
        result = 'IT IS DRAW'
      }
    } else if (id === 'PAPER') {
      if (resultChoice === 'ROCK') {
        newScore += 1
        result = 'YOU WIN'
      } else if (resultChoice === 'SCISSORS') {
        newScore -= 1
        result = 'YOU LOSE'
      } else {
        result = 'IT IS DRAW'
      }
    } else if (id === 'SCISSORS') {
      if (resultChoice === 'ROCK') {
        newScore -= 1
        result = 'YOU LOSE'
      } else if (resultChoice === 'PAPER') {
        newScore += 1
        result = 'YOU WIN'
      } else {
        result = 'IT IS DRAW'
      }
    }
    this.setState({
      selectedChoice: id,
      completed: true,
      score: newScore,
      resultStatus: result,
    })
  }

  renderPlayingView = () => (
    <ul className="choices-list-container">
      {choicesList.map(each => (
        <PlayingOption
          optionDetails={each}
          key={each.id}
          onChoiceSelection={this.onChoiceSelection}
        />
      ))}
    </ul>
  )

  playAgain = () => {
    this.setState({
      resultChoice:
        choicesList[Math.floor(Math.random() * choicesList.length)].id,
      selectedChoice: '',
      completed: false,
    })
  }

  renderCompletionView = () => {
    const {selectedChoice, resultChoice, resultStatus} = this.state

    const selectedOption = choicesList.find(each => each.id === selectedChoice)
    const resultOption = choicesList.find(each => each.id === resultChoice)
    return (
      <div className="result-view-container">
        <div className="you-opponent-images-container">
          <div>
            <p className="result-player-name">YOU</p>
            <img
              src={selectedOption.imageUrl}
              alt="your choice"
              className="option-image"
            />
          </div>
          <div>
            <p className="result-player-name">OPPONENT</p>
            <img
              src={resultOption.imageUrl}
              alt="opponent choice"
              className="option-image"
            />
          </div>
        </div>
        <p className="result-status-text">{resultStatus}</p>
        <button
          type="button"
          className="play-again-btn"
          onClick={this.playAgain}
        >
          PLAY AGAIN
        </button>
      </div>
    )
  }

  render() {
    const {score, completed} = this.state
    return (
      <div className="bg-container">
        <h1>Rock Paper Scissors</h1>
        <div className="header-container">
          <div className="header-text-container">
            <p className="header-text">ROCK</p>
            <p className="header-text">PAPER</p>
            <p className="header-text">SCISSORS</p>
          </div>
          <div className="score-container">
            <p className="score-container-text-1">Score</p>
            <StyledScore>{score}</StyledScore>
          </div>
        </div>

        <div className="game-container">
          {completed ? this.renderCompletionView() : this.renderPlayingView()}
        </div>
        <RulesButton />
      </div>
    )
  }
}

export default RockPaperScissors
