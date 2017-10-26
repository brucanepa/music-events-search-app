import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Content, List, Text} from 'native-base';

import container from '../../containers/EventsList';
import Spinner from '../Spinner/Spinner.native';
import Event from '../Event/Event.native';
import ListHeader from '../ListHeader/ListHeader.native';
import dictionary from '../../constants/dictionary';
import colors from '../../constants/colors';

const createList = (data) => (
  <Content>
    <ListHeader title={dictionary.artists.nextEventsTitle}/>
    <List>
      {data.map(item => {
        return <Event key={item.id} {...item}/>
      })}
    </List>
  </Content>
);

const showEvents = ({data, showList, showNotFound}) => {
  if (showList()) {
    return createList(data);
  }
  if (showNotFound()) {
    return <ListHeader title={dictionary.artists.notFound}/>;
  }
  return <ListHeader title={dictionary.artists.nothingHere}/>;
};

const showData = ({data, showLoading, showList, showNotFound}) => {
  return showLoading()
    ? <Spinner/>
    : showEvents({data, showList, showNotFound});
};

const EventsList = ({data, showLoading, showList, showNotFound}) => (
  <Content>
    {showData({data, showLoading, showList, showNotFound})}
  </Content>
);

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    paddingTop: 20,
    fontSize: 18
  }
});

export default container(EventsList);