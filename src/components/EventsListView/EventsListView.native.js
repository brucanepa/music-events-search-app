import React, {Component} from 'react'
import {Container} from 'native-base';

import SearchBar from '../SearchBar/SearchBar.native';
import EventsList from '../EventsList/EventsList.native';
import {getArtistEvents} from '../../api/services/artists';

const baseState = {
  events: [],
  fetching: false,
  writing: false
};

class EventsListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...baseState
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const {events, fetching, writing} = this.state;
    return events != nextState.events || fetching != nextState.fetching || writing != nextState.writing;
  }

  onSearch = async({value, waiting}) => {
    if (waiting && value) {
      this.setState({writing: true, filtered: true});
    } else if (value) {
      this.setState({fetching: true, writing: false});
      const events = await getArtistEvents(value);
      this.setState({
        events: [...events]
      });
      this.setState({fetching: false});
    } else {
      this.setState(...baseState);
    }
  }

  render() {
    const {fetching, events, writing} = this.state;
    return (
      <Container>
        <SearchBar onSearch={this.onSearch}/>
        <EventsList data={events} fetching={fetching || writing} filtered={writing}/>
      </Container>
    )
  }
}

export default EventsListView;