import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

import './style/App.scss';

// Components
import Header from './js/components/Header/Header';
// Screens
import Home from './js/screens/Home/Home';
import Login from './js/screens/Login/Login';
import Locales from './js/screens/Locales/Locales';
import Locale from './js/screens/Locale/Local';

class App extends Component {

  componentDidMount() {
    this.updateConfig();
  }

  updateConfig() {
    axios.get('http://localhost:8000/api/getConfig')
      .then( res => {
        console.log('%c *-*-* STORE *-*-*', 'color:#bada55;', this.store);
        console.log('%c [SUCCESS] ', 'color:#bada55;', res.data.mainMenu.controlls);
      })
      .catch( res => {
          console.log('%c [FAIL] ', 'color:#bada55;', res);
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="O-App">
          <Header />
  
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} />
          <Route path="/locales" component={Locales} />
          <Route path="/locale" component={Locale} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
