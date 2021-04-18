/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Flash from './Components/Flash';

export class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Flash />
      </View>
    );
  }
}

export default App;
