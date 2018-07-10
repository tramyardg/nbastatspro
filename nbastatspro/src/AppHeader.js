import React, {Component} from 'react';

class AppHeader extends Component {

  render() {
    return (
        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-between">
            <a className="p-2 text-muted" href="">NBAStatsPro</a>
          </nav>
        </div>
    );
  }

}

export default AppHeader;
