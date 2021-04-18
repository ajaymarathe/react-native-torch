/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const initialState = {
  switchState: false,
  ButtonState: false,
  flashStatus: 'OFF',
  PowerButtonBgColor: '#fff',
  Button2Bg: '#FD7F02',
  Button3Bg: '#826E5A',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ON':
      return {
        ...state,
        switchState: true,
        ButtonState: true,
        flashStatus: 'ON',
        PowerButtonBgColor: '#fff',
      };
    case 'OFF':
      return {
        ...state,
        switchState: false,
        ButtonState: false,
        flashStatus: 'OFF',
        PowerButtonBgColor: '#FD7F02',
      };
    default:
      return state;
  }
}

// const store = createStore(reducer);

export const store = createStore(reducer, composeWithDevTools());

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
