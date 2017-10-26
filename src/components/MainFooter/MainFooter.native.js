import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Footer, Icon} from 'native-base';

import dictionary from '../../constants/dictionary';
import colors from '../../constants/colors';

const MainFooter = () => (
  <Footer style={styles.footer}>
    <Icon style={styles.icon} name="search"/>
    <Text style={styles.text}>
      {dictionary.searchViewTitle}
    </Text>
  </Footer>
);

const styles = StyleSheet.create({
  footer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.MAIN_BACKGROUND_COLOR
  },
  icon: {
    flex: 2,
    paddingBottom: 15,
    color: colors.MAIN_FONT_COLOR
  },
  text: {
    flex: 3,
    color: colors.MAIN_FONT_COLOR
  }
});

export default MainFooter;