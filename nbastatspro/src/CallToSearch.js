import React, {Component} from 'react';

class CallToSearch extends Component {
  render() {
    return (<div>
      <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <h1 className="display-4 font-italic">Search your favorite player and see his statistic.</h1>
          <p className="lead my-3">This app simply determines NBA player statistics by typing his first name and last name in the form.</p>
        </div>
      </div>
    </div>);
  }
}

export default CallToSearch;