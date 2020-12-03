import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import ScreenView from './Components/ScreenView';
import { Button, View, Text } from 'native-base';
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
        <Text>ON</Text>
      )
    } else {
      return (
        <Text>OFF</Text>
      )
    }
  }

  render() {
    return (
      <ScreenView >
        <View style={styles.container}>
          <View style={{width: '50%', justifyContent: 'center', alignItems: 'center'}}>
            {/* <Text> Turn ON / OFF the Flash! </Text> */}
            <Button block onPress={() => this.Flash()}>
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
  }
})
