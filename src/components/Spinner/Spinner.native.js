import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Spinner} from 'native-base';

class CustomSpinner extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return <Spinner color='black'/>
  }
}

export default CustomSpinner;