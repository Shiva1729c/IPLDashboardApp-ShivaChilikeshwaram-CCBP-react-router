// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    teamsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamsList: formattedData, isLoading: false})
  }

  renderTeamCard = () => {
    const {teamsList} = this.state
    return (
      <ul className="team-cards-container">
        {teamsList.map(eachTeam => (
          <TeamCard teamDetails={eachTeam} key={eachTeam.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="ipl-dashboard-bg-container">
        <div className="responsive-container">
          <div className="logo-name-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="main-heading">IPL Dashboard</h1>
          </div>
          {isLoading ? (
            <div data-testid="loader" className="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
            </div>
          ) : (
            this.renderTeamCard()
          )}
        </div>
      </div>
    )
  }
}

export default Home
