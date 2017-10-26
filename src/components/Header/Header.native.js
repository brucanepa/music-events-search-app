import React from 'react';
import {StyleSheet} from 'react-native';
import {Header, Text} from 'native-base';

import dictionary from '../../constants/dictionary';

const CustomHeader = () => (
  <Header style={styles.header}>
    <Text>
      {dictionary.searchViewTitle}
    </Text>
  </Header>
);

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CustomHeader;