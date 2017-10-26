import React, {Component} from 'react'
import {Container} from 'native-base';

import container from '../../containers/EventsListView';
import SearchBar from '../SearchBar/SearchBar.native';
import EventsList from '../EventsList/EventsList.native';

const EventsListView = ({onSearch, events, fetching, writing, filtered}) => (
  <Container>
    <SearchBar onSearch={onSearch}/>
    <EventsList style={{width: '100%'}} data={events} fetching={fetching || writing} filtered={filtered}/>
  </Container>
);

export default container(EventsListView);