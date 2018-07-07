import React from 'react';
import ReactDOM from 'react-dom';

import 'jquery/dist/jquery.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

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
