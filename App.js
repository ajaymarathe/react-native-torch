/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import ScreenView from './Components/ScreenView';
import { Button, View, Text, Icon } from 'native-base';
import Torch from 'react-native-torch';

const FlashStatus = (status) => {
  return (
    <Text style={{ color: '#fff' }}>FLASHLIGHT: {status.status}</Text>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ButtonState: false,
      flashStatus: 'OFF',
      PowerButtonBgColor: '#FD7F02',
      Button2Bg: '#FD7F02',
      Button3Bg: '#826E5A',
    };
  }

  Flash() {
    if (this.state.ButtonState) {
      this.setState({
        ButtonState: false,
        flashStatus: 'OFF',
        PowerButtonBgColor: '#fff',
      });
      Torch.switchState(false);
    } else {
      this.setState({
        ButtonState: true,
        flashStatus: 'ON',
        PowerButtonBgColor: '#FD7F02',
      });
      Torch.switchState(true);
    }
  }


  render() {
    return (
      <ScreenView >
        <View style={styles.container}>
          <View style={styles.firstSubContainer}>
            <Icon style={{ color: '#FD7F02', fontSize: 70 }} name="ios-sunny-sharp" />
            <FlashStatus status={this.state.flashStatus} />
          </View>
          <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
            <Button transparent onPress={() => this.Flash()}>
              <Icon style={[styles.PowerButton, { color: this.state.PowerButtonBgColor }]} name="ios-power" />
            </Button>
          </View>
          <View style={{ justifyContent: 'space-around', flexDirection: 'row' }} >
            <Button style={{ width: '40%', backgroundColor: this.state.Button2Bg }} rounded block>
              <Text> LED</Text>
            </Button>
            <Button rounded style={{ width: '40%', backgroundColor: this.state.Button3Bg }} block>
              <Text> SCREEN</Text>
            </Button>
          </View>
        </View>
      </ScreenView>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1, flexDirection: 'column', justifyContent: 'space-around', backgroundColor: '#221E10',
  },
  firstSubContainer: {
    justifyContent: 'center', alignSelf: 'center', alignItems: 'center',
  },
  PowerButton: {
    fontSize: 125,
    color: 'white',
  },
  firstView: {
    width: 150,
    height: 150,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    overflow: 'hidden',
  },
  firstButton: {
    height: '100%',
  },
  flashIcon: {
    fontSize: 70,
    color: 'white',
  },
  firstText: {
    fontSize: 30,
    fontWeight: '600',
    color: 'white',
    marginTop: 20,
  },
});
