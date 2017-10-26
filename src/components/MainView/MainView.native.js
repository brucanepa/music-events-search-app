import React from 'react';
import {Container} from 'native-base';

import EventsListView from '../EventsListView/EventsListView.native';
import MainFooter from '../MainFooter/MainFooter.native';

const MainView = () => (
  <Container>
    <EventsListView style={{width: '100%'}}/>
    <MainFooter/>
  </Container>
);

export default MainView;