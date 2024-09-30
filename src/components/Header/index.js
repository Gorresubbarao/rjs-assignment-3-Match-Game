import './index.css'

const Header = () => (
  <nav className="header">
    <div className="header-content">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="match-game-logo"
      />
      <div className="score-and-timer-container">
        <p className="score">
          Score: <span className="span">0</span>
        </p>
        <div className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-img"
          />
          <p className="timer-text">00 sec</p>
        </div>
      </div>
    </div>
  </nav>
)

export default Header
