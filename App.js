import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import ScreenView from './Components/ScreenView';
import { Button, View, Text, Icon } from 'native-base';
import Torch from 'react-native-torch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ButtonState: false
    };
  }

  Flash() {
    if (this.state.ButtonState) {
      this.setState({
        ButtonState: false
      })
      Torch.switchState(false);
    } else {
      this.setState({
        ButtonState: true,
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
        <View style={styles.container}>
          <View style={styles.firstView}>
            <Button style={styles.firstButton} block onPress={() => this.Flash()}>
              {this.ToggleButton()}
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
  firstButton:{
    height: '100%',
  },
  flashIcon:{
    fontSize:70,
    color: 'white'
  }
})
