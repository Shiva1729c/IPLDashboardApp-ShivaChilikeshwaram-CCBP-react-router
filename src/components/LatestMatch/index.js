// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails
  return (
    <div className="latest-match-bg-container">
      <div className="logo-and-details-container">
        <div className="team-date-venue-won-container">
          <p className="opposite-team">{competingTeam}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam} `}
          className="competing-team-logo"
        />
      </div>
      <hr className="separator" />
      <div className="innings-man-of-match-umpires-container">
        <p className="second-part-titles">First Innings</p>
        <p className="second-part">{firstInnings}</p>
        <p className="second-part-titles">Second Innings</p>
        <p className="second-part">{secondInnings}</p>
        <p className="second-part-titles">Man of the Match</p>
        <p className="second-part">{manOfTheMatch}</p>
        <p className="second-part-titles">Umpires</p>
        <p className="second-part">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
