// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchDetails

  const matchStatusClassName =
    matchStatus === 'Won' ? 'win-color' : 'lose-color'

  return (
    <li className="match-card-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo-match-card"
      />
      <p className="competing-team">{competingTeam}</p>
      <p>{result}</p>
      <p className={matchStatusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
