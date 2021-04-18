/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import ScreenView from './ScreenView';
import { Button, View, Text, Icon } from 'native-base';
import Torch from 'react-native-torch';

import { connect } from 'react-redux';

const FlashStatus = (status) => {
  return (
    <Text style={{ color: '#fff' }}>FLASHLIGHT: {status.status}</Text>
  );
};

class Flash extends Component {
  Flash() {
    if (this.props.ButtonState) {
      this.props.dispatch({ type: 'OFF' });
      Torch.switchState(this.props.switchState);
    } else {
      this.props.dispatch({ type: 'ON' });
      Torch.switchState(this.props.switchState);
    }
  }


  render() {
    console.log('this.props:', this.props);
    return (
      <ScreenView >
        <View style={styles.container}>
          <View style={styles.firstSubContainer}>
            <Icon style={{ color: this.props.PowerButtonBgColor, fontSize: 70 }} name="ios-sunny-sharp" />
            <FlashStatus status={this.props.flashStatus} />
          </View>
          <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
            <Button transparent onPress={() => this.Flash()}>
              <Icon style={[styles.PowerButton, { color: this.props.PowerButtonBgColor }]} name="ios-power" />
            </Button>
          </View>
          <View style={{ justifyContent: 'space-around', flexDirection: 'row' }} >
            <Button style={{ width: '40%', backgroundColor: this.props.Button2Bg }} rounded block>
              <Text> LED</Text>
            </Button>
            <Button rounded style={{ width: '40%', backgroundColor: this.props.Button3Bg }} block>
              <Text> SCREEN</Text>
            </Button>
          </View>
        </View>
      </ScreenView>
    );
  }
}

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

function mapStateToProps(state) {
  return {
    switchState: state.switchState,
    ButtonState: state.ButtonState,
    flashStatus: state.flashStatus,
    PowerButtonBgColor: state.PowerButtonBgColor,
    Button2Bg: state.Button2Bg,
    Button3Bg: state.Button3Bg,
  };
}

export default connect(mapStateToProps)(Flash)


