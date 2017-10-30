import React from 'react'
import PropTypes from 'prop-types';
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

EventsListView.propTypes = {
  onSearch: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired,
  fetching: PropTypes.bool.isRequired,
  writing: PropTypes.bool.isRequired,
  filtered: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.SECOND_BACKGROUND_COLOR
  }
});

export default container(EventsListView);