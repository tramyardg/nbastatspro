import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './css/player.css';
import playerPhoto from './img_template_method_uml.png';

class PlayerProfile extends Component {
  render() {
    const players = this.props.playerProfileData;
    const rows = players.map(function (row, index) {
      return (
          <div className="player-profile-container" key={index}>
            <h2>{row.name}<span>'s</span> Profile</h2>
            <div className="container player-profile">
              <div className="row align-items-start">
                <div className="col-sm-4">
                  <img src={playerPhoto} className="player-photo" alt="player photo"/>
                </div>
                <div className="col-sm">
                  <div className="player-info-block">
                    <span>Name</span>
                    <span>{row.name}</span>
                  </div>
                  <div className="player-info-block">
                    <span>Current Team</span>
                    <span>{row.team}</span>
                  </div>
                  <div className="player-info-block">
                    <span>Jersey Number</span>
                    <span>{row.jersey}</span>
                  </div>
                  <div className="player-info-block">
                    <span>Position(s)</span>
                    <span>{row.positions}</span>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="player-info-block">
                    <span>Age</span>
                    <span>{row.age}</span> years old
                  </div>
                  <div className="player-info-block">
                    <span>Height</span>
                    <span>{row.height}</span>cm
                  </div>
                  <div className="player-info-block">
                    <span>Weight</span>
                    <span>{row.weight}</span>kg
                  </div>
                  <div className="player-info-block">
                    <span>Nationality</span>
                    <span>{row.nationality}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      );
    });
    return (rows);
  }
}

export default PlayerProfile;

