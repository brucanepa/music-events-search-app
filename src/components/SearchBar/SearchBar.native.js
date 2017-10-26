import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Header, Item, Input, Icon, Button, Text} from 'native-base';

import container from '../../containers/SearchBar';
import dictionary from '../../constants/dictionary';
import colors from '../../constants/colors';

class CustomSearchBar extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Header style={styles.header} searchBar rounded>
        <Item>
          <Icon name="ios-search"/>
          <Input placeholder={dictionary.searchBarTitle} onChangeText={this.props.onSearch}/>
          <Icon name="ios-people"/>
        </Item>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.MAIN_BACKGROUND_COLOR
  }
});

export default container(CustomSearchBar);