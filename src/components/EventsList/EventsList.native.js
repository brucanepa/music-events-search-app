import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Container, Content, List, Text} from 'native-base';

import container from '../../containers/EventsList';
import Spinner from '../Spinner/Spinner.native';
import EventItem from '../EventItem/EventItem.native';
import ListHeader from '../ListHeader/ListHeader.native';
import InitialListScreen from '../InitialListScreen/InitialListScreen.native';
import dictionary from '../../constants/dictionary';

const createList = (data) => (
  <Content>
    <ListHeader title={dictionary.artists.nextEventsTitle}/>
    <List>
      {data.map(item => {
        return <EventItem key={item.id} {...item}/>
      })}
    </List>
  </Content>
);

const showEvents = ({data, showList, showNotFound, showError}) => {
  if (showError()) {
    return <ListHeader title={dictionary.connectionError}/>;
  }
  if (showList()) {
    return createList(data);
  }
  if (showNotFound()) {
    return <ListHeader title={dictionary.artists.notFound}/>;
  }
  return <InitialListScreen/>;
};

const showData = ({data, showLoading, showList, showNotFound, showError}) => {
  return showLoading()
    ? <Spinner/>
    : showEvents({data, showList, showNotFound, showError});
};

const EventsList = ({data, showLoading, showList, showNotFound, showError}) => (
  <Container>
    {showData({data, showLoading, showList, showNotFound, showError})}
  </Container>
);

EventsList.propTypes = {
  data: PropTypes.array.isRequired,
  showLoading: PropTypes.func.isRequired,
  showList: PropTypes.func.isRequired,
  showNotFound: PropTypes.func.isRequired,
  showError: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    paddingTop: 20,
    fontSize: 18
  }
});

export default container(EventsList);