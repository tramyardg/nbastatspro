import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './css/blog.css';
import './css/player.css';
import AppHeader from "./AppHeader";
import CallToSearch from "./CallToSearch";
import SearchForm from './SearchForm';
import PlayerProfile from './PlayerProfile';
import AppFooter from "./AppFooter";

/*
 * App structure:
 * <App>
 *   <Header/>
 *   <CallToSearch/>
 *   <SearchForm>
 *     <InputFirstName/> <FirstNameHint/>
 *     <InputLastName/> <LastNameHint/>
 *     <SearchButton/>
 *   <SearchForm/>
 *   <Footer/>
 * <App/>
 * */

class App extends Component {
  render() {
    return (
        <div className="container">
          <AppHeader />
          <CallToSearch/>
          <SearchForm/>
          <PlayerProfile/>
          <AppFooter/>
        </div>
    );
  }
}

export default App;
