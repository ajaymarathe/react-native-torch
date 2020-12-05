import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import ScreenView from './Components/ScreenView';
import { Button, View, Text, Icon } from 'native-base';
import Torch from 'react-native-torch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ButtonState: false,
      background1: '#384D65',
      background2: '#8181FA',
    };
  }

  Flash() {
    if (this.state.ButtonState) {
      this.setState({
        ButtonState: false,
        background1: '#384D65',
        background2: '#8181FA'
      })
      Torch.switchState(false);
    } else {
      this.setState({
        ButtonState: true,
        background1: '#8181FA',
        background2: '#384D65',
      })
      Torch.switchState(true);
    }
  }

  ToggleButton() {
    if (this.state.ButtonState) {
      return (
        <Text>
          <Icon style={styles.flashIcon} name="flashlight" />
        </Text>
      )
    } else {
      return (
        <Text>
          <Icon style={styles.flashIcon} name="flashlight-outline" />
        </Text>
      )
    }
  }

  render() {
    return (
      <ScreenView >
        <View style={[styles.container, { backgroundColor: this.state.background1 }]}>
          <View style={styles.firstView}>
            <Button style={[styles.firstButton, { backgroundColor: this.state.background2 }]} block onPress={() => this.Flash()}>
              {this.ToggleButton()}
            </Button>
          </View>
          <Text style={styles.firstText}>Tap to Turn ON / OFF Flash</Text>
        </View>
      </ScreenView>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstView: {
    width: 150,
    height: 150,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    overflow: 'hidden'
  },
  firstButton: {
    height: '100%',
  },
  flashIcon: {
    fontSize: 70,
    color: 'white'
  },
  firstText: {
    fontSize: 30,
    fontWeight: '600',
    color: 'white',
    marginTop: 20
  }
})
