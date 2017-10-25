import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Header, Item, Input, Icon, Button, Text} from 'native-base';

import container from '../../containers/SearchBar';
import dictionary from '../../utils/dictionary';

class CustomSearchBar extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired
  }

  shouldComponentUpdate() {
    return false;
  }

  onChangeText = (text) => {
    const {onSearch} = this.props;
    onSearch && onSearch(text);
  }

  render() {
    return (
      <Header style={styles.header} searchBar rounded>
        <Item>
          <Icon name="ios-search"/>
          <Input placeholder={dictionary.searchBarTitle} onChangeText={this.onChangeText}/>
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
    alignItems: 'center'
  }
});

export default container(CustomSearchBar);