import React from 'react';
import {StyleSheet} from 'react-native';
import {Header, Title} from 'native-base';

import colors from '../../constants/colors';

const ListHeader = ({title}) => (
  <Header style={styles.header}>
    <Title style={styles.title}>
      {title}
    </Title>
  </Header>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.MAIN_BACKGROUND_COLOR
  },
  title: {
    paddingTop: 10,
    color: colors.MAIN_FONT_COLOR
  }
});

export default ListHeader;