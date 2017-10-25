import React from 'react';
import {Container} from 'native-base';

import Header from '../Header/Header.native';
import EventsListView from '../EventsListView/EventsListView.native';
import Footer from '../Footer/Footer.native';

const MainView = () => (
  <Container>
    <Header/>
    <EventsListView/>
    <Footer/>
  </Container>
);

export default MainView;