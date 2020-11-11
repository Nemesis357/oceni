import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actionTypes from '../src/js/store/actions/actionTypes';
import * as actionCreators from '../src/js/store/actions/index';

import './style/App.scss';

// Components
import Header from './js/components/Header/Header';
import Modal from './js/components/UI/Modal/Modal';
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
        console.log('%c *-*-* STORE *-*-*', 'color:#bada55;', this.props.config.user);
        // console.log('%c [SUCCESS] ', 'color:#bada55;', res.data);

        this.props.onConfigChange(res.data);
      })
      .catch( res => {
          console.log('%c [FAIL] ', 'color:#bada55;', res);
      })
  }
  updateConfigManula = () => {
    const config = {
      user: {
        firstName: "Sanja",
        lastName: "Martinovic"
      }
    }
    this.props.updateAppConfig(config);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="O-App">
          <Header />
          <Modal>
            <Login />
          </Modal>

          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} />
          <Route path="/locales" component={Locales} />
          <Route path="/locale" component={Locale} />
          <button onClick={this.updateConfigManula}>Update Config</button>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    config: state.config,
    modalActive: state.modalActive
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onConfigChange: (config) => dispatch({
      type: actionTypes.SET_CONFIG,
      payload: config
    }),
    updateAppConfig: (newConfig) => dispatch(actionCreators.updateAppConfig(newConfig))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
