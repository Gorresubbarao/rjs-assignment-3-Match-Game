import './index.css'

const ScoreCard = props => {
  const {matchScore, onClickResetButton} = props

  return (
    <div className="score-card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="tropy-img"
      />
      <p className="score-text">YOUR SCORE</p>
      <p className="score">{matchScore}</p>
      <button
        type="button"
        className="reset-button"
        onClick={onClickResetButton}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default ScoreCard
