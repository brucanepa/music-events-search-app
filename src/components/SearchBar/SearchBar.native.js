import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Header, Item, Input, Icon, Button, Text} from 'native-base';

import container from '../../containers/SearchBar';
import dictionary from '../../constants/dictionary';
import colors from '../../constants/colors';

class CustomSearchBar extends Component {
  onCancel = () => {
    const {props, _textInput} = this;
    _textInput.setNativeProps({text: ''});
    props.onCancel();
  }

  showCancel() {
    if (this.props.showCancel()) {
      return <Icon style={styles.icon} onPress={this.onCancel}>
        <Text>{dictionary.searchCross}</Text>
      </Icon>;
    }
  }

  render() {
    const {onSearch} = this.props;
    return (
      <Header style={styles.header} searchBar rounded>
        <Item>
          <Icon name="ios-search"/>
          <Input style={styles.input}
            ref={searchText => this._textInput = searchText}
            placeholder={dictionary.searchBarTitle}
            onChangeText={onSearch}/>
          {this.showCancel()}
        </Item>
      </Header>
    )
  }
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.MAIN_BACKGROUND_COLOR
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10
  },
  input:{
    paddingBottom: 7
  },
});

export default container(CustomSearchBar);