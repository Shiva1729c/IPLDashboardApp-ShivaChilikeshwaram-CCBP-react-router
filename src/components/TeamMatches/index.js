// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    latestMatchDetails: {},
    recentMatchesList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formattedLatestMatchDetails = {
      id: data.latest_match_details.id,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      teamBannerUrl: data.team_banner_url,
    }
    const formattedRecentMatches = data.recent_matches.map(eachMatch => ({
      competingTeamLogo: eachMatch.competing_team_logo,
      competingTeam: eachMatch.competing_team,
      result: eachMatch.result,
      matchStatus: eachMatch.match_status,
      id: eachMatch.id,
    }))
    this.setState({
      latestMatchDetails: formattedLatestMatchDetails,
      recentMatchesList: formattedRecentMatches,
      isLoading: false,
    })
  }

  renderMatchCard = () => {
    const {recentMatchesList} = this.state
    return (
      <ul className="recent-matches-container">
        {recentMatchesList.map(eachMatch => (
          <MatchCard matchDetails={eachMatch} key={eachMatch.id} />
        ))}
      </ul>
    )
  }

  renderTeamMatchesContent = () => {
    const {latestMatchDetails} = this.state
    const {teamBannerUrl} = latestMatchDetails
    return (
      <>
        <img
          src={teamBannerUrl}
          alt="team banner"
          className="team-banner-image"
        />
        <h1 className="latest-matches-heading">Latest Matches</h1>
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        {this.renderMatchCard()}
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <div className={`team-matches-bg-container ${id}`}>
        <div className="responsive-container">
          {isLoading ? (
            <div data-testid="loader" className="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
            </div>
          ) : (
            this.renderTeamMatchesContent()
          )}
        </div>
      </div>
    )
  }
}

export default TeamMatches
