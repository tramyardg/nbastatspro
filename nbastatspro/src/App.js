import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './css/blog.css';
import './css/player.css';
import './css/stats.css';
import AppHeader from "./AppHeader";
import CallToSearch from "./CallToSearch";
import SearchForm from './SearchForm';
import PlayerProfile from './PlayerProfile';
import StatsTab from './StatsTab';
import AppFooter from "./AppFooter";
import SampleData from "./SampleData";

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
 *   <PlayerProfile playerProfileData={SampleData.profile}/>
 *   <PlayerStats/>
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
          <div className="box-rounded  mt-3 p-3">
            <PlayerProfile playerProfileData={SampleData.profile}/>
            <StatsTab/>
          </div>
          <AppFooter/>
        </div>
    );
  }
}

export default App;
