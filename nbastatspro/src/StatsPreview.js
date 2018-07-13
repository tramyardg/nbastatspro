import React, {Component} from 'react';

/**
 * will display avg:
 * ppg, rpg, asp, stl, min, FG_PCT, FG3_PCT, FT_PCT, tov, pts, rank
 */
class StatsPreview extends Component {
  render() {
    return (
        <div role="tabpanel" className="tab-pane active" id="preview">Stats preview</div>
    )
  }
}

export default StatsPreview;