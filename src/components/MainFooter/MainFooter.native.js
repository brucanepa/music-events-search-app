import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Footer, FooterTab, Icon, Button} from 'native-base';

import dictionary from '../../constants/dictionary';
import colors from '../../constants/colors';

const MainFooter = () => (
  <Footer>
    <FooterTab>
      <Button style={styles.button} active={true} full>
        <Icon style={styles.buttonContent} name="search"/>
        <Text style={styles.buttonContent}>{dictionary.searchViewTitle}</Text>
      </Button>
    </FooterTab>
  </Footer>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.MAIN_BACKGROUND_COLOR
  },
  buttonContent: {
    color: colors.MAIN_FONT_COLOR
  }
});

export default MainFooter;