import React from 'react';
import PropTypes from 'prop-types';
import playerPhoto from './img_template_method_uml.png';


const PlayerProfile = (props) => {
  return (
      <div className="player-profile-container">
        <h2>LeBron Jame<span>'s</span> Profile</h2>
        <div className="container player-profile box-rounded">
          <div className="row align-items-start">
            <div className="col-sm-4">
              <img src={playerPhoto} className="player-photo" alt="player photo" />
            </div>
            <div className="col-sm">
              <div className="player-info-block">
                <span>Name</span>
                <span>LeBron James</span>
              </div>
              <div className="player-info-block">
                <span>Current Team</span>
                <span>LeBron James</span>
              </div>
              <div className="player-info-block">
                <span>Jersey Number</span>
                <span>LeBron James</span>
              </div>
              <div className="player-info-block">
                <span>Position(s)</span>
                <span>Small Guard</span>
              </div>
            </div>
            <div className="col-sm">
              <div className="player-info-block">
                <span>Age</span>
                <span>32</span> years old
              </div>
              <div className="player-info-block">
                <span>Height</span>
                <span>192</span>cm
              </div>
              <div className="player-info-block">
                <span>Weight</span>
                <span>81</span>kg
              </div>
              <div className="player-info-block">
                <span>Nationality</span>
                <span>American</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default PlayerProfile;
// PlayerProfile.defaultProps = {
//
// };
//
// PlayerProfile.propTypes = {
//
// };