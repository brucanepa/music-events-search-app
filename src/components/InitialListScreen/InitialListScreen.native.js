import React from 'react'
import {StyleSheet} from 'react-native';
import {Container, Content, Icon, Text, View} from 'native-base';

import colors from '../../constants/colors';
import dictionary from '../../constants/dictionary';

const InitialListScreen = ({onSearch, events, fetching, writing, filtered}) => (
  <Container style={styles.container}>
    <View style={styles.view}>
      <Icon style={styles.icon} name="ios-search"/>
      <Text style={styles.text}>{dictionary.artists.findEvents}</Text>
    </View>
  </Container>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    fontSize: 80,
    color: colors.SECOND_FONT_COLOR
  },
  text: {
    fontSize: 20,
    color: colors.SECOND_FONT_COLOR,
    textAlign: 'center'
  }
});

export default InitialListScreen;