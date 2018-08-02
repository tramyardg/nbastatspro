import React, {Component} from 'react';
import './css/stats.css';
import StatsPreview from "./StatsPreview";
import StatsPreviewPlus from "./StatsPreviewPlus";

class StatsTab extends Component {
  render() {
    return (
        <div className="stats-tab">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#preview" role="tab" data-toggle="tab">Preview</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#more" role="tab" data-toggle="tab">More</a>
            </li>
          </ul>
          <div className="tab-content">
            <StatsPreview/>
            <StatsPreviewPlus/>
          </div>
        </div>
    )
  }
}

export default StatsTab;