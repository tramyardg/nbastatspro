import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

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
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
