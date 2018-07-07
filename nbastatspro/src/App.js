import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './css/blog.css';
import AppHeader from "./AppHeader";
import CallToSearch from "./CallToSearch";
import SearchForm from './SearchForm';
import AppFooter from "./AppFooter";

class App extends Component {
  render() {
    return (
        <div className="container">
          <AppHeader />
          <CallToSearch/>
          <SearchForm/>
          <AppFooter/>
        </div>
    );
  }
}

export default App;
