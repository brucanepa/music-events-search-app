import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Footer, Icon} from 'native-base';

import dictionary from '../../utils/dictionary';
import colors from '../../utils/colors';

const CustomFooter = () => (
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.MAIN_BACKGROUND_COLOR,
  },
  icon: {
    paddingRight: 10,
    color: colors.MAIN_FONT_COLOR
  },
  text: {
    color: colors.MAIN_FONT_COLOR
  }
});

export default CustomFooter;