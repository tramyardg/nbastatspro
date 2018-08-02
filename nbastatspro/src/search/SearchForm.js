import React, {Component} from 'react';
import FormInput from '../components/FormInput';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: ''
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
  }

  handleFirstNameChange(e) {
    this.setState({firstName: e.target.value});
  }

  handleLastNameChange(e) {
    this.setState({lastName: e.target.value});
  }

  handleFormSubmit(e) {
    e.preventDefault();

    const payload = {
      firstName: this.state.firstName,
      lastName: this.state.lastName
    };

    console.log('Send this in a POST request:', payload);
  }

  render() {
    return (
        <form onSubmit={this.handleFormSubmit}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title font-weight-bold">Search here</h5>
              <div className="input-group d-flex">
                <div className="flex-auto">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="">First and last name</span>
                  </div>
                </div>
                <div className="flex-auto flex-grow-1">
                  <FormInput
                      inputType={'text'}
                      inputName={'firstName'}
                      onChangeFn={this.handleFirstNameChange}
                      inputPlaceholder={''}
                  />
                </div>
                <div className="flex-auto flex-grow-1">
                  <FormInput
                      inputType={'text'}
                      inputName={'lastName'}
                      onChangeFn={this.handleLastNameChange}
                      inputPlaceholder={''}
                  />
                </div>
                <div className="flex-auto">
                  <div className="input-group-append">
                    <input
                        type="submit"
                        className="btn btn-primary btn-md"
                        value="Submit"/>
                  </div>
                </div>
                <div className="input-group input-group-sm">
                  <span className="text-muted">Suggestions:</span>
                </div>
              </div>
            </div>
          </div>
        </form>
    );
  }
}

export default SearchForm;