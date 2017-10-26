import React, {Component} from 'react'
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Content, List, ListItem, Text, Title} from 'native-base';

import container from '../../containers/EventsList';
import Spinner from '../Spinner/Spinner.native';
import Event from '../Event/Event.native';
import dictionary from '../../constants/dictionary';

const createList = (data) => (
  <Content>
    <Title style={styles.title}>
      {dictionary.artists.nextEventsTitle}
    </Title>
    <Content>
      <List scrollEnabled>{data.map(item => {
          return <Event key={item.id} {...item}/>
        })}</List>
    </Content>
  </Content>
);

const showEvents = ({data, showList, showNotFound}) => {
  if (showList()) {
    return createList(data);
  }
  if (showNotFound()) {
    return <Text style={styles.text}>{dictionary.artists.notFound}</Text>
  }
  return <Text style={styles.text}>{dictionary.artists.nothingHere}</Text>;
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
  title: {
    paddingTop: 10
  },
  text: {
    alignSelf: 'center',
    paddingTop: 20,
    fontSize: 18
  }
});

export default container(EventsList);