import React, {Component} from 'react';

class SearchForm extends Component {
  render() {
    return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title font-weight-bold">Search here</h5>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="">First and last name</span>
              </div>
              <input type="text" className="form-control"/>
              <input type="text" className="form-control"/>
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">Search</button>
              </div>
              <div className="input-group input-group-sm">
                <span className="text-muted">Suggestions:</span>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default SearchForm;