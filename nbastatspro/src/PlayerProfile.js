import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './css/player.css';
// import playerPhoto from './img_template_method_uml.png';

class PlayerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      team: '',
      jersey: 0,
      positions: '',
      age: 0,
      height: 0,
      weight: 0,
      nationality: ''
    }
  }

  componentDidMount() {
    const apiUrl = 'http://stats.nba.com/stats/commonplayerinfo?LeagueID=00&PlayerID=201566&SeasonType=Regular+Season';
    fetch(apiUrl)
        .then(response => response)
        .then(contents => console.log(contents))
        .catch(() => console.log("Can’t access " + apiUrl + " response. Blocked by browser?"))
  }

  render() {
    return (
        <div className="player-profile-container">
          <h2>{this.state.name}<span>'s</span> Profile</h2>
          <div className="container player-profile">
            <div className="row align-items-start">
              <div className="col-sm-4">
                <img src="http://stats.nba.com/media/players/230x185/201566.png" className="player-photo"
                     alt="player photo"/>
              </div>
              <div className="col-sm">
                <div className="player-info-block">
                  <span>Name</span>
                  <span>{this.state.name}</span>
                </div>
                <div className="player-info-block">
                  <span>Current Team</span>
                  <span>{this.state.team}</span>
                </div>
                <div className="player-info-block">
                  <span>Jersey Number</span>
                  <span>{this.state.jersey}</span>
                </div>
                <div className="player-info-block">
                  <span>Position(s)</span>
                  <span>{this.state.positions}</span>
                </div>
              </div>
              <div className="col-sm">
                <div className="player-info-block">
                  <span>Age</span>
                  <span>{this.state.age}</span> years old
                </div>
                <div className="player-info-block">
                  <span>Height</span>
                  <span>{this.state.height}</span>cm
                </div>
                <div className="player-info-block">
                  <span>Weight</span>
                  <span>{this.state.weight}</span>kg
                </div>
                <div className="player-info-block">
                  <span>Nationality</span>
                  <span>{this.state.nationality}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

// PlayerProfile.propTypes = {
//   name: PropTypes.string.isRequired,
//   team: PropTypes.string.isRequired,
//   jersey: PropTypes.number.isRequired,
//   positions: PropTypes.string.isRequired,
//   age: PropTypes.number.isRequired,
//   height: PropTypes.number.isRequired,
//   weight: PropTypes.number.isRequired,
//   nationality: PropTypes.string.isRequired
// };

export default PlayerProfile;

