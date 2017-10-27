import React from 'react'
import {StyleSheet} from 'react-native';
import {Container} from 'native-base';

import container from '../../containers/EventsListView';
import SearchBar from '../SearchBar/SearchBar.native';
import EventsList from '../EventsList/EventsList.native';
import colors from '../../constants/colors';

const EventsListView = ({onSearch, events, fetching, writing, filtered, error}) => (
  <Container style={styles.container}>
    <SearchBar onSearch={onSearch}/>
    <EventsList data={events} fetching={fetching || writing} filtered={filtered} error={error}/>
  </Container>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.SECOND_BACKGROUND_COLOR
  }
})

export default container(EventsListView);