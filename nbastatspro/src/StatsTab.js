import React, {Component} from 'react';

class StatsTab extends Component {
  render() {
    // contains StatsPreview + StatsPreviewPlus
    return (
        <div className="stats-tab">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#preview">Preview</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#more">More</a>
            </li>
          </ul>
        </div>
    )
  }
}

export default StatsTab;